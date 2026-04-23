'use client';

import { useState } from 'react';
import { SubjectInput, CompatibilityResponse } from '@/lib/types';
import { fetchCompatibility } from '@/lib/api-client';

export function useCompatibility() {
  const [result, setResult] = useState<CompatibilityResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculate = async (firstSubject: SubjectInput, secondSubject: SubjectInput) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCompatibility(firstSubject, secondSubject);
      setResult(data);
    } catch {
      setError('Không thể tính toán hợp tuổi. Vui lòng kiểm tra lại thông tin và thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, calculate };
}
