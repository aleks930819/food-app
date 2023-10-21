import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    if (!userId) {
      return NextResponse.json('User is not authenticated', { status: 401 });
    }
    if (!name) {
      return NextResponse.json('Name is required', { status: 400 });
    }

    if (!params.storeId) {
      return NextResponse.json('Store ID is required', { status: 400 });
    }

    const store = await prismadb.store.update({
      where: {
        id: params.storeId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(store, { status: 200 });
  } catch (err: any) {
    console.log('Stores PATCH error: ', err);
    return NextResponse.json(err.message, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json('User is not authenticated', { status: 401 });
    }

    if (!params.storeId) {
      return NextResponse.json('Store ID is required', { status: 400 });
    }

    const store = await prismadb.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return NextResponse.json(store, { status: 200 });
  } catch (err: any) {
    console.log('Stores PATCH error: ', err);
    return NextResponse.json(err.message, { status: 500 });
  }
}
