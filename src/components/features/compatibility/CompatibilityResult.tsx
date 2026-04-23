'use client';

import { CompatibilityResponse } from '@/lib/types';
import { GlowCard } from '@/components/ui/GlowCard';
import { DataTable } from '@/components/ui/DataTable';
import { JsonViewer } from '@/components/ui/JsonViewer';

interface CompatibilityResultProps {
  data: CompatibilityResponse;
}

export function CompatibilityResult({ data }: CompatibilityResultProps) {
  const score = data.score ?? 0;
  const scoreDescription = data.score_description ?? 'Unknown';
  const aspects = data.aspects ?? [];
  const breakdown = data.score_breakdown ?? [];

  // Color based on score
  const getScoreColor = (s: number) => {
    if (s < 40) return '#ef4444'; // red
    if (s < 60) return '#eab308'; // yellow
    if (s < 80) return '#f59e0b'; // orange
    return '#c9a84c'; // gold
  };

  const scoreColor = getScoreColor(score);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Score */}
      <GlowCard className="text-center">
        <h3 className="font-mystical text-2xl font-bold text-cosmic-gold mb-4">
          Điểm Tương Hợp
        </h3>

        {/* Circular Score */}
        <svg width="200" height="200" className="mx-auto mb-6">
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#2d1b69"
            strokeWidth="8"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={scoreColor}
            strokeWidth="8"
            strokeDasharray={`${(score / 100) * 565} 565`}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
          />
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fontSize="48"
            fontWeight="bold"
            fill={scoreColor}
          >
            {score}
          </text>
        </svg>

        <p className="text-cosmic-gold font-bold text-lg">{scoreDescription}</p>
        <p className="text-cosmic-muted text-sm mt-2">
          {score < 40 && '💔 Cần lắng nghe và hiểu biết nhau'}
          {score >= 40 && score < 60 && '💛 Có tiềm năng phát triển tốt'}
          {score >= 60 && score < 80 && '🧡 Tương hợp khá tốt'}
          {score >= 80 && '💛✨ Rất tương hợp'}
        </p>
      </GlowCard>

      {/* Breakdown */}
      {breakdown.length > 0 && (
        <div>
          <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-4">
            Phân Tích Chi Tiết
          </h3>
          <div className="space-y-3">
            {breakdown.map((item, idx) => (
              <GlowCard key={idx}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cosmic-gold font-semibold">{item.rule}</p>
                    <p className="text-cosmic-text text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="text-cosmic-gold font-bold text-lg ml-4">+{item.points}</div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* Aspects */}
      {aspects.length > 0 && (
        <div>
          <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-4">
            Các Khía Cạnh (Aspects)
          </h3>
          <div className="grid gap-3">
            {aspects.slice(0, 12).map((aspect, idx) => (
              <GlowCard key={idx}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-cosmic-text">
                      <span className="font-semibold">{aspect.p1_name}</span>
                      {' '}
                      <span className="text-cosmic-gold font-bold">{aspect.aspect}</span>
                      {' '}
                      <span className="font-semibold">{aspect.p2_name}</span>
                    </p>
                    <p className="text-cosmic-muted text-xs mt-1">
                      Orbit: {aspect.orbit?.toFixed(2)}° | {aspect.aspect_movement}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
            {aspects.length > 12 && (
              <p className="text-cosmic-muted text-sm text-center mt-2">
                ... và {aspects.length - 12} khía cạnh khác
              </p>
            )}
          </div>
        </div>
      )}

      {/* Chart Data Table - Score Breakdown */}
      {breakdown.length > 0 && (
        <DataTable
          data={breakdown.map((item) => ({
            Rule: item.rule,
            Description: item.description,
            Points: item.points,
            Details: item.details || '-',
          }))}
          title="Chart Data - Score Breakdown"
        />
      )}

      {/* Chart Data Table - Aspects */}
      {aspects.length > 0 && (
        <DataTable
          data={aspects.map((a) => ({
            'Planet 1': a.p1_name,
            'Planet 2': a.p2_name,
            Aspect: a.aspect,
            Orbit: a.orbit?.toFixed(2) || '-',
            Movement: a.aspect_movement || '-',
            'Aspect Degrees': a.aspect_degrees?.toFixed(2) || '-',
          }))}
          title="Chart Data - Aspects"
        />
      )}

      {/* JSON Data */}
      <JsonViewer data={data} title="JSON Data - Full Response" />
    </div>
  );
}
