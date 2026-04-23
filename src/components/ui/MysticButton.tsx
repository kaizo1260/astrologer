import { ButtonHTMLAttributes } from 'react';

interface MysticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function MysticButton({ children, loading, disabled, className = '', ...props }: MysticButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={`
        bg-gradient-to-r from-cosmic-purple to-cosmic-gold
        hover:from-cosmic-purple-light hover:to-cosmic-gold-light
        text-cosmic-bg font-semibold py-2 px-6 rounded-lg
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        shadow-purple-glow hover:shadow-gold-glow
        ${className}
      `}
      {...props}
    >
      {loading ? '⏳...' : children}
    </button>
  );
}
