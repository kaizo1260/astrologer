interface GeocodingResult {
  latitude: number;
  longitude: number;
  timezone: string;
}

const cityCoordinates: Record<string, GeocodingResult> = {
  'ho chi minh city': {
    latitude: 10.7769,
    longitude: 106.7009,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'hanoi': {
    latitude: 21.0285,
    longitude: 105.8542,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'da nang': {
    latitude: 16.0544,
    longitude: 108.2022,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'hue': {
    latitude: 16.4637,
    longitude: 107.5909,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'can tho': {
    latitude: 10.0379,
    longitude: 105.7869,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'hai phong': {
    latitude: 20.8449,
    longitude: 106.6881,
    timezone: 'Asia/Ho_Chi_Minh',
  },
  'new york': {
    latitude: 40.7128,
    longitude: -74.006,
    timezone: 'America/New_York',
  },
  'london': {
    latitude: 51.5074,
    longitude: -0.1278,
    timezone: 'Europe/London',
  },
  'paris': {
    latitude: 48.8566,
    longitude: 2.3522,
    timezone: 'Europe/Paris',
  },
  'tokyo': {
    latitude: 35.6762,
    longitude: 139.6503,
    timezone: 'Asia/Tokyo',
  },
  'sydney': {
    latitude: -33.8688,
    longitude: 151.2093,
    timezone: 'Australia/Sydney',
  },
  'los angeles': {
    latitude: 34.0522,
    longitude: -118.2437,
    timezone: 'America/Los_Angeles',
  },
  'chicago': {
    latitude: 41.8781,
    longitude: -87.6298,
    timezone: 'America/Chicago',
  },
};

export async function getCoordinatesFromCity(
  city: string
): Promise<GeocodingResult> {
  const cityKey = city.toLowerCase();

  // Check local database first
  if (cityKey in cityCoordinates) {
    return cityCoordinates[cityKey];
  }

  // Fallback to Nominatim (OpenStreetMap) - free geocoding service
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`,
      { headers: { 'User-Agent': 'AstrologerApp' } }
    );

    if (!response.ok) throw new Error('Geocoding failed');

    const results = await response.json();
    if (!results.length) throw new Error('City not found');

    const { lat, lon } = results[0];

    // Guess timezone based on longitude (simplified)
    const timezone = estimateTimezone(parseFloat(lon));

    return {
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
      timezone,
    };
  } catch {
    // Fallback: return Ho Chi Minh City coordinates
    console.warn(`Could not find coordinates for ${city}, using default`);
    return cityCoordinates['ho chi minh city'];
  }
}

function estimateTimezone(longitude: number): string {
  // Simplified timezone estimation based on longitude
  // This is not perfectly accurate but works for most cases
  const utcOffset = Math.round(longitude / 15);

  const timezones: Record<number, string> = {
    '-8': 'America/Los_Angeles',
    '-6': 'America/Chicago',
    '-5': 'America/New_York',
    '0': 'Europe/London',
    '1': 'Europe/Paris',
    '8': 'Asia/Shanghai',
    '9': 'Asia/Tokyo',
    '7': 'Asia/Ho_Chi_Minh',
  };

  return timezones[utcOffset] || 'UTC';
}
