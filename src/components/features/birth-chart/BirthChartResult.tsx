'use client';

import { BirthChartResponse, PlanetData } from '@/lib/types';
import { SvgChartDisplay } from '@/components/charts/SvgChartDisplay';
import { PlanetTable } from '@/components/charts/PlanetTable';
import { GlowCard } from '@/components/ui/GlowCard';
import { DataTable } from '@/components/ui/DataTable';
import { JsonViewer } from '@/components/ui/JsonViewer';
import { getZodiacEmoji } from '@/lib/utils';

interface BirthChartResultProps {
  data: BirthChartResponse;
}

export function BirthChartResult({ data }: BirthChartResultProps) {
  const svgChart = data.chart || data.data?.svg;
  const planetsData = data.data?.planets || data.chart_data?.planets;

  // Convert to object if array
  const planets = Array.isArray(planetsData)
    ? Object.assign({}, ...planetsData.map((p) => ({ [p.name]: p })))
    : (planetsData || {}) as Record<string, PlanetData>;

  // Prepare planets data for table
  const planetsArray: PlanetData[] = Array.isArray(planetsData) ? planetsData :
    (planets ? Object.values(planets).filter((p) => p && typeof p === 'object') as PlanetData[] : []);

  const housesData = data.data?.houses || (data.chart_data?.houses ? Object.values(data.chart_data.houses) : []);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* SVG Chart */}
      {svgChart && <SvgChartDisplay svgString={svgChart} title="Biểu Đồ Lá Số" />}

      {/* Key Info */}
      {planetsData && (
        <GlowCard>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sun Sign */}
            {planets && planets.Sun && (
              <div className="text-center">
                <p className="text-cosmic-muted text-sm mb-2">CUNG MẶT TRỜI</p>
                <div className="text-4xl mb-2">☀️</div>
                <p className="font-mystical text-2xl font-bold text-cosmic-gold">
                  {getZodiacEmoji(planets.Sun.sign)} {planets.Sun.sign}
                </p>
                <p className="text-cosmic-text text-sm mt-2">{planets.Sun.position?.toFixed(1)}°</p>
              </div>
            )}

            {/* Moon Sign */}
            {planets && planets.Moon && (
              <div className="text-center">
                <p className="text-cosmic-muted text-sm mb-2">CUNG MẶT TRĂNG</p>
                <div className="text-4xl mb-2">🌙</div>
                <p className="font-mystical text-2xl font-bold text-cosmic-gold">
                  {getZodiacEmoji(planets.Moon.sign)} {planets.Moon.sign}
                </p>
                <p className="text-cosmic-text text-sm mt-2">{planets.Moon.position?.toFixed(1)}°</p>
              </div>
            )}

            {/* Ascending Sign */}
            {planets && planets.Ascendant && (
              <div className="text-center">
                <p className="text-cosmic-muted text-sm mb-2">CUNG TĂNG</p>
                <div className="text-4xl mb-2">↗️</div>
                <p className="font-mystical text-2xl font-bold text-cosmic-gold">
                  {getZodiacEmoji(planets.Ascendant.sign)} {planets.Ascendant.sign}
                </p>
                <p className="text-cosmic-text text-sm mt-2">
                  {planets.Ascendant.position?.toFixed(1)}°
                </p>
              </div>
            )}
          </div>
        </GlowCard>
      )}

      {/* All Planets */}
      {planetsData && <PlanetTable planets={planetsData} title="Tất Cả Hành Tinh" />}

      {/* Chart Data Table */}
      {planetsArray.length > 0 && (
        <DataTable
          data={planetsArray.map((p: PlanetData) => ({
            Name: p.name || '-',
            Sign: p.sign || '-',
            Position: p.position ? p.position.toFixed(2) : '-',
            House: p.house ? String(p.house) : '-',
            Retrograde: p.retrograde ? 'Yes' : 'No',
            Speed: p.speed ? p.speed.toFixed(2) : '-',
          }))}
          title="Chart Data - Planets"
        />
      )}

      {housesData && housesData.length > 0 && (
        <DataTable
          data={housesData.map((h) => ({
            Name: h.name || '-',
            Sign: h.sign || '-',
            Position: h.position ? h.position.toFixed(2) : '-',
          }))}
          title="Chart Data - Houses"
        />
      )}

      {/* JSON Data */}
      <JsonViewer data={data} title="JSON Data - Full Response" />
    </div>
  );
}
