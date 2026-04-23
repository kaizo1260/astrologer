'use client';

import { useMoonPhase } from '@/hooks/useMoonPhase';
import { GlowCard } from '@/components/ui/GlowCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { MoonPhaseForm } from '@/components/features/moon-phase/MoonPhaseForm';
import { MoonPhaseResult } from '@/components/features/moon-phase/MoonPhaseResult';

interface MoonPhaseFormState {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
  nation: string;
}

export default function MoonPhasePage() {
  const { result, loading, error, fetch } = useMoonPhase();

  const handleFetch = async (data: MoonPhaseFormState) => {
    fetch(data.year, data.month, data.day, data.hour, data.minute, data.city, data.nation);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <SectionHeader
        icon="🌙"
        title="Pha Mặt Trăng"
        subtitle="Khám phá pha mặt trăng hiện tại và ảnh hưởng của nó"
      />

      <GlowCard className="max-w-2xl mx-auto mb-8">
        <MoonPhaseForm onSubmit={handleFetch} loading={loading} />
      </GlowCard>

      {error && <ErrorMessage message={error} />}

      {loading && <LoadingSpinner />}

      {result && <MoonPhaseResult data={result} />}
    </div>
  );
}
