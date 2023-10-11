import { NextResponse } from 'next/server';

import { getCategories } from '@/actions/get-categories';

export async function GET() {
  const res = await getCategories();

  return NextResponse.json(res);
}
