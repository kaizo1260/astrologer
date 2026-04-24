import { ApiRateLimitInfo } from './astrologer-api';

const RATE_LIMIT_KEY = 'astrologer_rate_limit';

export interface StoredRateLimitInfo extends ApiRateLimitInfo {
  timestamp: number;
}

export function saveRateLimitInfo(info: ApiRateLimitInfo): void {
  if (typeof window === 'undefined') return;

  const stored: StoredRateLimitInfo = {
    ...info,
    timestamp: Date.now(),
  };

  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(stored));
}

export function getRateLimitInfo(): StoredRateLimitInfo | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as StoredRateLimitInfo;
  } catch {
    return null;
  }
}

export function clearRateLimitInfo(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(RATE_LIMIT_KEY);
}

export function getTotalMonthlyLimit(): number {
  return 150;
}

export function getUsedRequests(): number {
  const info = getRateLimitInfo();
  if (!info) return 0;

  return getTotalMonthlyLimit() - info.remaining;
}

export function getRemainingRequests(): number {
  const info = getRateLimitInfo();
  if (!info) return getTotalMonthlyLimit();

  return info.remaining;
}

export function getUsagePercentage(): number {
  const remaining = getRemainingRequests();
  const total = getTotalMonthlyLimit();
  return Math.round(((total - remaining) / total) * 100);
}
