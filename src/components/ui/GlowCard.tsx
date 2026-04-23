import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div
      className={`bg-cosmic-card border border-cosmic-border rounded-lg shadow-gold-glow p-6 ${className}`}
    >
      {children}
    </div>
  );
}
