import { NextResponse } from 'next/server';

import { getCategories } from '@/actions';

export async function GET() {
  try {
    const res = await getCategories();

    return NextResponse.json(res);
  } catch (err) {
    console.error(err);
  }
}
