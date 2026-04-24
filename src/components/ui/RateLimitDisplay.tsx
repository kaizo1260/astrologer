'use client';

import { useEffect, useState } from 'react';
import { getRateLimitInfo, getTotalMonthlyLimit } from '@/lib/rate-limit';

interface RateLimitDisplayProps {
  className?: string;
}

export function RateLimitDisplay({ className = '' }: RateLimitDisplayProps) {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [percentage, setPercentage] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const info = getRateLimitInfo();
    if (info) {
      setRemaining(info.remaining);
      const used = getTotalMonthlyLimit() - info.remaining;
      setPercentage(Math.round((used / getTotalMonthlyLimit()) * 100));
    }
  }, []);

  if (!mounted || remaining === null) {
    return null;
  }

  const total = getTotalMonthlyLimit();
  const isLow = remaining < 10;
  const isCritical = remaining < 5;

  return (
    <div
      className={`rounded-lg border p-4 ${
        isCritical
          ? 'border-red-500/50 bg-red-500/5'
          : isLow
            ? 'border-yellow-500/50 bg-yellow-500/5'
            : 'border-cyan-500/30 bg-cyan-500/5'
      } ${className}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">API Request Limit</span>
        <span
          className={`text-sm font-semibold ${
            isCritical
              ? 'text-red-400'
              : isLow
                ? 'text-yellow-400'
                : 'text-cyan-400'
          }`}
        >
          {remaining} / {total}
        </span>
      </div>

      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            isCritical
              ? 'bg-red-500'
              : isLow
                ? 'bg-yellow-500'
                : 'bg-cyan-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {percentage}% used
        {isCritical && (
          <span className="text-red-400 ml-2 font-medium">⚠️ Critical!</span>
        )}
        {isLow && !isCritical && (
          <span className="text-yellow-400 ml-2 font-medium">⚠️ Running low</span>
        )}
      </div>
    </div>
  );
}
