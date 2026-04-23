'use client';

import { useState } from 'react';
import { SubjectInput, TransitResponse } from '@/lib/types';
import { fetchTransit } from '@/lib/api-client';

export function useTransit() {
  const [result, setResult] = useState<TransitResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChartNow = async (natalSubject: SubjectInput) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTransit(natalSubject);
      setResult(data);
    } catch {
      setError('Không thể tải biểu đồ hành tinh hiện tại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, fetchChartNow };
}
