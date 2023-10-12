import { NextResponse } from 'next/server';

import { getCategories } from '@/actions';

export async function GET() {
  const res = await getCategories();

  return NextResponse.json(res);
}
