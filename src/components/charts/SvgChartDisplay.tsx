interface SvgChartDisplayProps {
  svgString: string;
  title?: string;
}

export function SvgChartDisplay({ svgString, title }: SvgChartDisplayProps) {
  if (!svgString) return null;

  return (
    <div className="mb-8">
      {title && <h3 className="font-mystical text-xl font-bold text-cosmic-gold mb-4">{title}</h3>}
      <div
        className="w-full max-w-2xl mx-auto bg-cosmic-card border border-cosmic-border rounded-lg p-4 [&>svg]:w-full [&>svg]:h-auto overflow-auto"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    </div>
  );
}
