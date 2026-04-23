'use client';

import { useState } from 'react';
import { MoonPhaseResponse } from '@/lib/types';
import { fetchMoonPhase } from '@/lib/api-client';

export function useMoonPhase() {
  const [result, setResult] = useState<MoonPhaseResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = async (
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    city: string,
    nation: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMoonPhase(year, month, day, hour, minute, city, nation);
      setResult(data);
    } catch {
      setError('Không thể tải pha mặt trăng. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, fetch };
}
