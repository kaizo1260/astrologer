const BASE_URL = 'https://astrologer.p.rapidapi.com/api/v5';

let currentKeyIndex = 0;

export interface ApiRateLimitInfo {
  limit: number;
  remaining: number;
}

function getApiKeys(): string[] {
  const key1 = process.env.RAPIDAPI_KEY_1;
  const key2 = process.env.RAPIDAPI_KEY_2;

  if (!key1 || !key2) {
    throw new Error('Missing RAPIDAPI_KEY_1 or RAPIDAPI_KEY_2 environment variables');
  }

  return [key1, key2];
}

function getNextApiKey(): string {
  const keys = getApiKeys();
  const key = keys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  return key;
}

function getHeaders(apiKey: string) {
  const host = process.env.RAPIDAPI_HOST;
  if (!host) {
    throw new Error('Missing RAPIDAPI_HOST environment variable');
  }

  return {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': host,
  };
}

function extractRateLimitInfo(response: Response): ApiRateLimitInfo | null {
  const limit = response.headers.get('X-RateLimit-Requests-Limit');
  const remaining = response.headers.get('X-RateLimit-Requests-Remaining');

  if (limit && remaining) {
    return {
      limit: parseInt(limit, 10),
      remaining: parseInt(remaining, 10),
    };
  }

  return null;
}

export async function callAstrologerApi<T extends Record<string, unknown>>(
  endpoint: string,
  body: Record<string, unknown>
): Promise<T & { _rateLimitInfo?: ApiRateLimitInfo }> {
  const url = `${BASE_URL}${endpoint}`;
  const keys = getApiKeys();
  let lastError: Error | null = null;

  for (let i = 0; i < keys.length; i++) {
    const apiKey = getNextApiKey();
    const headers = getHeaders(apiKey);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        cache: 'no-store',
      });

      const rateLimitInfo = extractRateLimitInfo(response);

      if (!response.ok) {
        const error = await response.text();
        lastError = new Error(
          `API error [${response.status}]: ${response.statusText} - ${error}`
        );

        if (response.status === 429 || response.status === 403) {
          console.warn(`API key ${apiKey.slice(0, 10)}... exhausted, rotating...`);
          continue;
        }
        throw lastError;
      }

      const data = await response.json();
      if (rateLimitInfo) {
        data._rateLimitInfo = rateLimitInfo;
      }
      return data;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (i < keys.length - 1) {
        console.warn(`API request failed, trying next key...`);
      }
    }
  }

  throw lastError || new Error('All API keys exhausted');
}
