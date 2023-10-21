import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  try {
    if (!params.slug) {
      return new NextResponse('Missing slug', { status: 400 });
    }

    const blogArticle = await prismadb.blog.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(blogArticle);
  } catch (err: any) {
    console.log('[BLOG_GET]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: { params: { storeId: string; slug: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, content, createdBy, images } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!images || images.length === 0) {
      return new NextResponse('Missing images', { status: 400 });
    }

    if (!title) {
      return new NextResponse('Missing title', { status: 400 });
    }

    if (!content) {
      return new NextResponse('Missing content', { status: 400 });
    }

    if (!createdBy) {
      return new NextResponse('Missing createdBy', { status: 400 });
    }

    if (!params.slug) {
      return new NextResponse('Missing slug', { status: 400 });
    }

    const slug = slugifyString(title);

    await prismadb.blog.update({
      where: {
        slug: params.slug,
      },
      data: {
        slug,
        title,
        content,
        createdBy,
        images: {
          deleteMany: {},
        },
      },
    });

    const blogArticle = await prismadb.blog.update({
      where: {
        slug: params.slug,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });
    return NextResponse.json(blogArticle);
  } catch (err: any) {
    console.log('[BLOG_UPDATE]', err);
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

    const staticPage = await prismadb.blog.deleteMany({
      where: {
        slug: params.slug,
      },
    });

    return NextResponse.json(staticPage);
  } catch (err: any) {
    console.log('[BLOG_DELETE]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
