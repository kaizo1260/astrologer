'use client';

import { TransitResponse, PlanetData } from '@/lib/types';
import { SvgChartDisplay } from '@/components/charts/SvgChartDisplay';
import { GlowCard } from '@/components/ui/GlowCard';
import { DataTable } from '@/components/ui/DataTable';
import { JsonViewer } from '@/components/ui/JsonViewer';

interface TransitResultProps {
  data: TransitResponse;
}

export function TransitResult({ data }: TransitResultProps) {
  const svgChart = data.chart || data.data?.svg;
  const transitsData = data.chart_data?.transits || data.data?.transits;

  // Prepare transits data for table
  const transitsArray = Array.isArray(transitsData) ? transitsData : [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Info */}
      <GlowCard>
        <p className="text-cosmic-text text-center">
          Biểu đồ bên dưới cho thấy vị trí các hành tinh <span className="text-cosmic-gold font-bold">hiện tại</span> so với
          vị trí tại thời điểm bạn sinh ra. Đây được gọi là{' '}
          <span className="text-cosmic-gold font-bold">Transit Chart</span>.
        </p>
      </GlowCard>

      {/* SVG Chart */}
      {svgChart && <SvgChartDisplay svgString={svgChart} title="Biểu Đồ Hành Tinh Hiện Tại" />}

      {/* Info about transits */}
      <GlowCard>
        <h3 className="font-mystical text-lg font-bold text-cosmic-gold mb-3">
          Hành Tinh Hiện Tại Có Ý Nghĩa Gì?
        </h3>
        <p className="text-cosmic-text leading-relaxed">
          Hành tinh hiện tại đang tác động đến sinh hoạt cá nhân của bạn. Khi một hành tinh
          hiện tại tạo thành các góc cụ thể (aspect) với hành tinh trong biểu đồ sinh tử của bạn,
          nó sẽ kích hoạt những năng lượng nhất định trong cuộc sống của bạn. Những tác động này
          có thể dương tính hay âm tính tùy thuộc vào loại khía cạnh.
        </p>
      </GlowCard>

      {/* Chart Data Table */}
      {transitsArray.length > 0 && (
        <DataTable
          data={transitsArray.map((p: PlanetData) => ({
            Name: p.name,
            Sign: p.sign,
            Position: p.position?.toFixed(2),
            House: p.house || '-',
            Retrograde: p.retrograde ? 'Yes' : 'No',
            Speed: p.speed?.toFixed(2) || '-',
          }))}
          title="Chart Data - Transit Planets"
        />
      )}

      {/* JSON Data */}
      <JsonViewer data={data} title="JSON Data - Full Response" />
    </div>
  );
}
