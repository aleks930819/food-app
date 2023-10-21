import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(_req: Request, { params }: { params: { categoryId: string } }) {
  try {
    if (!params.categoryId) {
      return new NextResponse('Missing category id', { status: 400 });
    }

    const category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (err: any) {
    console.log('[CATEGORY_GET]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: { params: { storeId: string; categoryId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Missing name', { status: 400 });
    }

    if (!params.categoryId) {
      return new NextResponse('Missing storeId', { status: 400 });
    }

    const slug = slugifyString(name);

    const category = await prismadb.category.updateMany({
      where: {
        id: params.categoryId,
      },
      data: {
        name,
        slug,
      },
    });

    return NextResponse.json(category);
  } catch (err: any) {
    console.log('[CATEGORY_PATCH]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function DELETE(_req: Request, { params }: { params: { storeId: string; categoryId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!params.categoryId) {
      return new NextResponse('Missing category id', { status: 400 });
    }

    const category = await prismadb.category.deleteMany({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json(category);
  } catch (err: any) {
    console.log('[CATEGORY_DELETE]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
