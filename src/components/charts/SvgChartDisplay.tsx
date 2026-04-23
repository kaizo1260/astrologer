'use client';

import { useState } from 'react';

interface SvgChartDisplayProps {
  svgString: string;
  title?: string;
}

export function SvgChartDisplay({ svgString, title }: SvgChartDisplayProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!svgString) return null;

  return (
    <>
      <div className="mb-8">
        {title && <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-4">{title}</h3>}
        <button
          onClick={() => setIsZoomed(true)}
          className="w-full max-w-4xl mx-auto bg-cosmic-card border border-cosmic-border rounded-lg p-6 [&>svg]:w-full [&>svg]:h-auto overflow-auto hover:border-cosmic-gold transition-colors cursor-pointer"
          suppressHydrationWarning
        >
          <div dangerouslySetInnerHTML={{ __html: svgString }} />
        </button>
        <p className="text-center text-cosmic-muted text-sm mt-3">Bấm vào hình để phóng to</p>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-cosmic-card border border-cosmic-border rounded-lg p-8 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-cosmic-gold hover:text-cosmic-gold/70 text-2xl font-bold z-10"
              aria-label="Đóng"
            >
              ✕
            </button>

            <div
              className="[&>svg]:w-full [&>svg]:h-auto"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: svgString }}
            />
          </div>
        </div>
      )}
    </>
  );
}
