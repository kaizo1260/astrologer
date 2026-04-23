'use client';

import { useState } from 'react';
import { SubjectInput, BirthChartResponse } from '@/lib/types';
import { fetchBirthChart } from '@/lib/api-client';

export function useBirthChart() {
  const [result, setResult] = useState<BirthChartResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChart = async (subject: SubjectInput) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBirthChart(subject);
      setResult(data);
    } catch {
      setError('Không thể tải biểu đồ. Vui lòng kiểm tra lại thông tin và thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, fetchChart };
}
