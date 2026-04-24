const BASE_URL = 'https://astrologer.p.rapidapi.com/api/v5';

const API_KEYS = [
  process.env.RAPIDAPI_KEY_1!,
  process.env.RAPIDAPI_KEY_2!,
];

let currentKeyIndex = 0;

function getNextApiKey(): string {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return key;
}

function getHeaders(apiKey: string) {
  return {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
  };
}

export async function callAstrologerApi<T>(
  endpoint: string,
  body: Record<string, unknown>
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  let lastError: Error | null = null;

  for (let i = 0; i < API_KEYS.length; i++) {
    const apiKey = getNextApiKey();
    const headers = getHeaders(apiKey);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        cache: 'no-store',
      });

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

      return response.json();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (i < API_KEYS.length - 1) {
        console.warn(`API request failed, trying next key...`);
      }
    }
  }

  throw lastError || new Error('All API keys exhausted');
}
