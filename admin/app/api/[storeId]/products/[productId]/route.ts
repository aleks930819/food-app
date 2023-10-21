import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { slugifyString } from '@/lib/utils';

export async function GET(_req: Request, { params }: { params: { productId: string } }) {
  try {
    if (!params.productId) {
      return new NextResponse('Missing product id', { status: 400 });
    }

    const product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        category: true,
        images: true,
      },
    });

    if (product) {
      // @ts-ignore
      product.price = parseFloat(String(product?.price));
    }

    return NextResponse.json(product);
  } catch (err: any) {
    console.log('[PRODUCT_GET]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function PATCH(req: Request, { params }: { params: { storeId: string; productId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, price, categoryId, images, isFeatured, isArchived, description, quantity } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
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

    if (!params.productId) {
      return new NextResponse('Missing productId', { status: 400 });
    }

    const slug = slugifyString(name);

    await prismadb.product.update({
      where: {
        id: params.productId,
      },
      data: {
        name,
        price,
        slug,
        categoryId,
        quantity,
        description,
        images: {
          deleteMany: {},
        },
        isFeatured,
        isArchived,
      },
    });

    const product = await prismadb.product.update({
      where: {
        id: params.productId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(product);
  } catch (err: any) {
    console.log('[PRODUCT_PATCH]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
export async function DELETE(_req: Request, { params }: { params: { storeId: string; productId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!params.productId) {
      return new NextResponse('Missing product id', { status: 400 });
    }

    const product = await prismadb.product.deleteMany({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json(product);
  } catch (err: any) {
    console.log('[PRODUCT_DELETE]', err);
    return new NextResponse(err.message, { status: 500 });
  }
}
