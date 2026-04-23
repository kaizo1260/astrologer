interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export function SectionHeader({ title, subtitle, icon }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h1 className="font-mystical text-4xl md:text-5xl font-bold text-cosmic-gold mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-cosmic-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-gold mx-auto mt-4 rounded-full" />
    </div>
  );
}
