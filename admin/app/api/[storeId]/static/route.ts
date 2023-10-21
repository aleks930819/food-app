import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, content } = body;

    if (!userId) {
      return new NextResponse('Unathenticated', { status: 401 });
    }

    if (!title) {
      return new NextResponse('Missing name', { status: 400 });
    }

    if (!content) {
      return new NextResponse('Missing value', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Missing storeId', { status: 400 });
    }

    const slug = slugifyString(title);

    console.log(params);

    const staticPage = await prismadb.staticPage.create({
      data: {
        title,
        slug,
        content,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err) {
    console.log('[STATIC_POST]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const staticPage = await prismadb.staticPage.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err) {
    console.log('[STATIC_GET]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
