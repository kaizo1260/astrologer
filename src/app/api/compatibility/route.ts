import { NextRequest, NextResponse } from 'next/server';
import { callAstrologerApi } from '@/lib/astrologer-api';
import { CompatibilityResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await callAstrologerApi<CompatibilityResponse>(
      '/compatibility-score',
      body
    );
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to calculate compatibility', details: message },
      { status: 500 }
    );
  }
}
