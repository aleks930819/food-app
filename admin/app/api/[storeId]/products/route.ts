import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, description, price, categoryId, images, quantity, isFeatured, isArchived } = body;

    if (!userId) {
      return new NextResponse('Unathenticated', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Missing name', { status: 400 });
    }

    if (!price) {
      return new NextResponse('Missing price', { status: 400 });
    }

    if (!categoryId) {
      return new NextResponse('Missing categoryId', { status: 400 });
    }

    if (!images || images.length === 0) {
      return new NextResponse('Missing images', { status: 400 });
    }

    if (!quantity) {
      return new NextResponse('Missing quantity', { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse('Missing storeId', { status: 400 });
    }

    const slug = slugifyString(name);

    const product = await prismadb.product.create({
      data: {
        name,
        slug,
        description,
        price,
        quantity,
        categoryId,
        isFeatured,
        isArchived,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        storeId: params.storeId,
      },
    });

    return NextResponse.json(product);
  } catch (err) {
    console.log('[PRODUCTS_POST]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId') || undefined;

    const isFeatured = searchParams.get('isFeatured');
    const limit = parseInt(searchParams.get('limit') || '10');

    const totalProducts = await prismadb.product.count({
      where: {
        storeId: params.storeId,
        categoryId,
        isFeatured: isFeatured === 'true' ? true : undefined,
        isArchived: false,
      },
    });

    const totalPages = Math.ceil(totalProducts / limit);

    let currentPage = 1;

    if (searchParams.get('page') !== null) {
      currentPage = parseInt(searchParams.get('page')!);
    }

    const skip = (currentPage - 1) * limit;

    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId,
        categoryId,
        isArchived: false,
      },

      include: {
        images: true,
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: skip,
    });

    return NextResponse.json({
      products,
      meta_data: {
        total_count: totalProducts,
        total_pages: totalPages,
        current_page: currentPage,
      },
    });
    // return NextResponse.json(products);
  } catch (err) {
    console.log('[PRODUCTS_GET]', err);
    return new NextResponse('Internal Error', {
      status: 500,
    });
  }
}
