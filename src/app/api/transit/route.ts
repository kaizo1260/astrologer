import { NextRequest, NextResponse } from 'next/server';
import { callAstrologerApi } from '@/lib/astrologer-api';
import { TransitResponse } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await callAstrologerApi<TransitResponse>(
      '/chart/transit',
      body
    );
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch transit chart', details: message },
      { status: 500 }
    );
  }
}
