import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, content, createdBy, images, category } = body;

    if (!userId) {
      return new NextResponse('Unathenticated', { status: 401 });
    }

    if (!category) {
      return new NextResponse('Missing category', { status: 400 });
    }

    if (!images || images.length === 0) {
      return new NextResponse('Missing images', { status: 400 });
    }

    if (!createdBy) {
      return new NextResponse('Missing createdBy', { status: 400 });
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

    const blogArticle = await prismadb.blog.create({
      data: {
        title,
        slug,
        createdBy,
        category,
        content,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        storeId: params.storeId,
      },
    });

    return NextResponse.json(blogArticle);
  } catch (err) {
    console.log('[BLOG_POST]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { storeId: string } }) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  try {
    const blogArticles = await prismadb.blog.findMany({
      where: {
        storeId: params.storeId,
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
    });

    return NextResponse.json(blogArticles);
  } catch (err) {
    console.log('[BLOG_GET]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
