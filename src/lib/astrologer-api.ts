const BASE_URL = 'https://astrologer.p.rapidapi.com/api/v5';

const headers = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
  'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
};

export async function callAstrologerApi<T>(
  endpoint: string,
  body: Record<string, unknown>
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `API error [${response.status}]: ${response.statusText} - ${error}`
    );
  }

  return response.json();
}
