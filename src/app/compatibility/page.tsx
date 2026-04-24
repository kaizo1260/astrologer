'use client';

import { useCompatibility } from '@/hooks/useCompatibility';
import { SubjectInput } from '@/lib/types';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { RateLimitDisplay } from '@/components/ui/RateLimitDisplay';
import { CompatibilityForm } from '@/components/features/compatibility/CompatibilityForm';
import { CompatibilityResult } from '@/components/features/compatibility/CompatibilityResult';

export default function CompatibilityPage() {
  const { result, loading, error, calculate } = useCompatibility();

  const handleCalculate = async (first: SubjectInput, second: SubjectInput) => {
    calculate(first, second);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <SectionHeader
        icon="♾"
        title="Hợp Tuổi"
        subtitle="Khám phá mức độ tương hợp giữa hai người"
      />

      <div className="max-w-3xl mx-auto mb-8">
        <RateLimitDisplay className="mb-6" />
      </div>

      <GlowCard className="max-w-3xl mx-auto mb-8">
        <CompatibilityForm onSubmit={handleCalculate} loading={loading} />
      </GlowCard>

      {error && <ErrorMessage message={error} />}

      {loading && <LoadingSpinner />}

      {result && <CompatibilityResult data={result} />}
    </div>
  );
}
