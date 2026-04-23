'use client';

import { MoonPhaseResponse } from '@/lib/types';
import { GlowCard } from '@/components/ui/GlowCard';
import { DataTable } from '@/components/ui/DataTable';
import { JsonViewer } from '@/components/ui/JsonViewer';

interface MoonPhaseResultProps {
  data: MoonPhaseResponse;
}

const moonPhaseEmojis: Record<string, string> = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
};

const moonPhaseVi: Record<string, string> = {
  'New Moon': 'Trăng Mới',
  'Waxing Crescent': 'Trăng Lưỡi Liềm Mọc',
  'First Quarter': 'Trăng Quý Một',
  'Waxing Gibbous': 'Trăng Gần Tròn (Mọc)',
  'Full Moon': 'Trăng Tròn',
  'Waning Gibbous': 'Trăng Gần Tròn (Giảm)',
  'Last Quarter': 'Trăng Quý Ba',
  'Waning Crescent': 'Trăng Lưỡi Liềm (Giảm)',
};

export function MoonPhaseResult({ data }: MoonPhaseResultProps) {
  // Handle RapidAPI response format
  const moonData = data.moon_phase_overview?.moon;
  const phase = moonData?.phase_name || data.phase || data.data?.phase || 'Unknown';
  const illuminationStr = moonData?.illumination || data.illumination || data.data?.illumination || '0%';
  const illumination = typeof illuminationStr === 'string'
    ? parseFloat(illuminationStr)
    : illuminationStr ?? 0;
  const emoji = moonData?.emoji || data.emoji || data.data?.emoji || moonPhaseEmojis[phase] || '🌙';
  const description = data.data?.description || '';
  const moonAge = moonData?.age_days ?? data.data?.moon_age;
  const distanceKm = data.data?.distance_km;

  const viPhaseName = moonPhaseVi[phase] || phase;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Main Phase Display */}
      <GlowCard className="text-center">
        <div className="text-9xl mb-6">{emoji}</div>
        <h3 className="font-mystical text-3xl font-bold text-cosmic-gold mb-2">
          {viPhaseName}
        </h3>
        <p className="text-cosmic-text text-lg mb-6">{phase}</p>

        {/* Illumination */}
        <div className="mb-6">
          <p className="text-cosmic-muted text-sm mb-3">Tỷ Lệ Chiếu Sáng</p>
          <div className="bg-cosmic-bg border border-cosmic-border rounded-full h-4 overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-cosmic-gold to-cosmic-purple-light transition-all"
              style={{ width: `${illumination}%` }}
            />
          </div>
          <p className="text-cosmic-gold font-bold text-lg">{illumination.toFixed(1)}%</p>
        </div>

        {/* Details */}
        {(moonAge !== undefined || distanceKm !== undefined) && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cosmic-border">
            {moonAge !== undefined && (
              <div>
                <p className="text-cosmic-muted text-sm mb-1">Tuổi Trăng</p>
                <p className="text-cosmic-gold font-bold">{moonAge.toFixed(1)} ngày</p>
              </div>
            )}
            {distanceKm !== undefined && (
              <div>
                <p className="text-cosmic-muted text-sm mb-1">Khoảng Cách</p>
                <p className="text-cosmic-gold font-bold">{distanceKm.toFixed(0)} km</p>
              </div>
            )}
          </div>
        )}
      </GlowCard>

      {/* Description */}
      {description && (
        <GlowCard>
          <h4 className="font-mystical text-lg font-bold text-cosmic-gold mb-3">
            Ý Nghĩa
          </h4>
          <p className="text-cosmic-text leading-relaxed">{description}</p>
        </GlowCard>
      )}

      {/* Moon Phases Info */}
      <GlowCard>
        <h4 className="font-mystical text-lg font-bold text-cosmic-gold mb-4">
          Các Pha Mặt Trăng
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {Object.entries(moonPhaseVi).map(([english, vi]) => (
            <div key={english} className="p-3 bg-cosmic-bg/50 rounded border border-cosmic-border/50">
              <div className="text-2xl mb-1">{moonPhaseEmojis[english]}</div>
              <p className="text-cosmic-text text-xs">{vi}</p>
            </div>
          ))}
        </div>
      </GlowCard>

      {/* Chart Data Table */}
      <DataTable
        data={[
          {
            'Phase Name': phase,
            'Illumination': `${illumination.toFixed(1)}%`,
            'Age (days)': moonAge !== undefined ? moonAge.toFixed(1) : '-',
            'Distance (km)': distanceKm !== undefined ? distanceKm.toFixed(0) : '-',
          },
        ]}
        title="Chart Data - Moon Phase"
      />

      {/* JSON Data */}
      <JsonViewer data={data} title="JSON Data - Full Response" />
    </div>
  );
}
