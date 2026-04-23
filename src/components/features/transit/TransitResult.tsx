'use client';

import { TransitResponse } from '@/lib/types';
import { SvgChartDisplay } from '@/components/charts/SvgChartDisplay';
import { GlowCard } from '@/components/ui/GlowCard';

interface TransitResultProps {
  data: TransitResponse;
}

export function TransitResult({ data }: TransitResultProps) {
  const svgChart = data.chart || data.data?.svg;

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
    </div>
  );
}
