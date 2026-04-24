'use client';

import { useBirthChart } from '@/hooks/useBirthChart';
import { SubjectInput } from '@/lib/types';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { RateLimitDisplay } from '@/components/ui/RateLimitDisplay';
import { BirthChartForm } from '@/components/features/birth-chart/BirthChartForm';
import { BirthChartResult } from '@/components/features/birth-chart/BirthChartResult';

export default function BirthChartPage() {
  const { result, loading, error, fetchChart } = useBirthChart();

  const handleFetchChart = async (subject: SubjectInput) => {
    fetchChart(subject);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <SectionHeader
        icon="♈"
        title="Lá Số Tử Vi"
        subtitle="Khám phá bản đồ vũ trụ lúc bạn sinh ra"
      />

      <div className="max-w-2xl mx-auto mb-8">
        <RateLimitDisplay className="mb-6" />
      </div>

      <GlowCard className="max-w-2xl mx-auto mb-8">
        <BirthChartForm onSubmit={handleFetchChart} loading={loading} />
      </GlowCard>

      {error && <ErrorMessage message={error} />}

      {loading && <LoadingSpinner />}

      {result && <BirthChartResult data={result} />}
    </div>
  );
}
