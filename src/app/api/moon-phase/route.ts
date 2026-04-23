import { NextRequest, NextResponse } from 'next/server';
import { callAstrologerApi } from '@/lib/astrologer-api';
import { MoonPhaseResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await callAstrologerApi<MoonPhaseResponse>(
      '/moon-phase',
      body
    );
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Moon phase error:', message);
    return NextResponse.json(
      { error: 'Failed to fetch moon phase', details: message },
      { status: 500 }
    );
  }
}
