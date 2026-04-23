'use client';

import { useMemo } from 'react';

export function StarBackground() {
  const stars = useMemo(() => {
    const colors = ['bg-white', 'bg-cosmic-gold', 'bg-cosmic-purple'];
    const sizes = [1, 1.5, 2];

    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      duration: 2 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${star.color} animate-twinkle`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${Math.random() * star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
