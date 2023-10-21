import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    if (!params.slug) {
      return new NextResponse('Missing slug', { status: 400 });
    }

    const staticPage = await prismadb.staticPage.findUnique({
      where: {
        slug: params.slug,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err: any) {
    console.log('[STATIC_GET]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: { params: { storeId: string; slug: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, content } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!title) {
      return new NextResponse('Missing title', { status: 400 });
    }

    if (!content) {
      return new NextResponse('Missing content', { status: 400 });
    }

    if (!params.slug) {
      return new NextResponse('Missing storeId', { status: 400 });
    }

    const slug = slugifyString(title);

    const staticPage = await prismadb.staticPage.updateMany({
      where: {
        slug: params.slug,
      },
      data: {
        title,
        content,
        slug,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err: any) {
    console.log('[STATIC_PATCH]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function DELETE(_req: Request, { params }: { params: { storeId: string; slug: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!params.slug) {
      return new NextResponse('Missing size id', { status: 400 });
    }

    const staticPage = await prismadb.staticPage.deleteMany({
      where: {
        slug: params.slug,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err: any) {
    console.log('[STATIC_DELETE]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
