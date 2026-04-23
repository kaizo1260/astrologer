import { PlanetData } from '@/lib/types';
import { getPlanetEmoji, getZodiacEmoji } from '@/lib/utils';
import { GlowCard } from '@/components/ui/GlowCard';

interface PlanetTableProps {
  planets: PlanetData[] | Record<string, PlanetData>;
  title?: string;
}

export function PlanetTable({ planets, title = 'Vị Trí Hành Tinh' }: PlanetTableProps) {
  // Convert object to array if needed
  const planetArray = Array.isArray(planets)
    ? planets
    : Object.entries(planets).map(([, data]) => data);

  if (!planetArray || planetArray.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {planetArray.map((planet, idx) => (
          <GlowCard key={`${planet.name}-${idx}`}>
            <div className="text-center">
              <div className="text-3xl mb-2">
                {getPlanetEmoji(planet.name)}
              </div>
              <p className="text-cosmic-gold font-semibold text-sm mb-1">
                {planet.name}
              </p>
              <p className="text-cosmic-text text-sm mb-2">
                {getZodiacEmoji(planet.sign || '')} {planet.sign}
              </p>
              <p className="text-cosmic-muted text-xs">
                {planet.position?.toFixed(1)}°
              </p>
              {planet.house && (
                <p className="text-cosmic-muted text-xs mt-1">
                  {typeof planet.house === 'string' ? planet.house : `House ${planet.house}`}
                </p>
              )}
              {planet.retrograde && (
                <p className="text-red-400 text-xs mt-1">℞ Retrograde</p>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
