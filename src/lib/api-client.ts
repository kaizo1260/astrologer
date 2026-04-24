import { SubjectInput } from './types';
import { getCoordinatesFromCity } from './geocoding';
import { saveRateLimitInfo } from './rate-limit';

export async function fetchBirthChart(subject: SubjectInput) {
  // Get coordinates if not provided
  const enrichedSubject = { ...subject };
  if (!enrichedSubject.latitude || !enrichedSubject.longitude) {
    const coords = await getCoordinatesFromCity(subject.city);
    enrichedSubject.latitude = coords.latitude;
    enrichedSubject.longitude = coords.longitude;
    enrichedSubject.timezone = coords.timezone;
  }

  const response = await fetch('/api/birth-chart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject: enrichedSubject }),
  });
  if (!response.ok) throw new Error('Failed to fetch birth chart');
  const data = await response.json();

  if (data._rateLimitInfo) {
    saveRateLimitInfo(data._rateLimitInfo);
  }

  return data;
}

export async function fetchCompatibility(
  firstSubject: SubjectInput,
  secondSubject: SubjectInput
) {
  const first = await enrichSubjectWithCoordinates(firstSubject);
  const second = await enrichSubjectWithCoordinates(secondSubject);

  const response = await fetch('/api/compatibility', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_subject: {
        ...first,
        city: first.city || firstSubject.city,
        nation: first.nation || firstSubject.nation,
      },
      second_subject: {
        ...second,
        city: second.city || secondSubject.city,
        nation: second.nation || secondSubject.nation,
      },
    }),
  });
  if (!response.ok) throw new Error('Failed to fetch compatibility');
  const data = await response.json();

  if (data._rateLimitInfo) {
    saveRateLimitInfo(data._rateLimitInfo);
  }

  return data;
}

export async function fetchMoonPhase(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  city: string
) {
  const coords = await getCoordinatesFromCity(city);

  const response = await fetch('/api/moon-phase', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      year,
      month,
      day,
      hour,
      minute,
      latitude: coords.latitude,
      longitude: coords.longitude,
      timezone: coords.timezone,
    }),
  });
  if (!response.ok) throw new Error('Failed to fetch moon phase');
  const data = await response.json();

  if (data._rateLimitInfo) {
    saveRateLimitInfo(data._rateLimitInfo);
  }

  return data;
}

export async function fetchTransit(
  natalSubject: SubjectInput,
  transitDate?: { year: number; month: number; day: number }
) {
  const natal = await enrichSubjectWithCoordinates(natalSubject);
  const transitSubject = transitDate ? transitDate : getNowDate();
  const coords = await getCoordinatesFromCity(natalSubject.city);

  const response = await fetch('/api/transit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      first_subject: natal,
      transit_subject: {
        ...transitSubject,
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        latitude: coords.latitude,
        longitude: coords.longitude,
        timezone: coords.timezone,
        city: natalSubject.city,
        nation: natalSubject.nation,
      },
    }),
  });
  if (!response.ok) throw new Error('Failed to fetch transit chart');
  const data = await response.json();

  if (data._rateLimitInfo) {
    saveRateLimitInfo(data._rateLimitInfo);
  }

  return data;
}

export async function fetchSubject(subject: SubjectInput) {
  const response = await fetch('/api/subject', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject }),
  });
  if (!response.ok) throw new Error('Failed to fetch subject data');
  const data = await response.json();

  if (data._rateLimitInfo) {
    saveRateLimitInfo(data._rateLimitInfo);
  }

  return data;
}

async function enrichSubjectWithCoordinates(
  subject: SubjectInput
): Promise<SubjectInput> {
  if (subject.latitude && subject.longitude) {
    return subject;
  }

  const coords = await getCoordinatesFromCity(subject.city);
  return {
    ...subject,
    latitude: coords.latitude,
    longitude: coords.longitude,
    timezone: coords.timezone,
  };
}

function getNowDate() {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}
