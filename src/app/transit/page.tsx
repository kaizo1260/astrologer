'use client';

import { useTransit } from '@/hooks/useTransit';
import { SubjectInput } from '@/lib/types';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { TransitForm } from '@/components/features/transit/TransitForm';
import { TransitResult } from '@/components/features/transit/TransitResult';

export default function TransitPage() {
  const { result, loading, error, fetchChartNow } = useTransit();

  const handleFetchChart = async (subject: SubjectInput) => {
    fetchChartNow(subject);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <SectionHeader
        icon="⭐"
        title="Hành Tinh Hiện Tại"
        subtitle="Xem những hành tinh đang tác động đến bạn ngay bây giờ"
      />

      <GlowCard className="max-w-2xl mx-auto mb-8">
        <TransitForm onSubmit={handleFetchChart} loading={loading} />
      </GlowCard>

      {error && <ErrorMessage message={error} />}

      {loading && <LoadingSpinner />}

      {result && <TransitResult data={result} />}
    </div>
  );
}
