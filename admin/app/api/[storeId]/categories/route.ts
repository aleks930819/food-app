import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unathenticated', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Missing name', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Missing store id', { status: 400 });
    }

    const slug = slugifyString(name);

    const category = await prismadb.category.create({
      data: {
        name,
        slug,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(category);
  } catch (err) {
    console.log('[CATEGORIES_POST]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const categories = await prismadb.category.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(categories);
  } catch (err) {
    console.log('[CATEGORIES_GET]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
