import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { generateToken } from '@/utils/auth';
import prismadb from '@/lib/prismadb';

const saltRounds = 10;

export async function POST(req: NextRequest) {
  try {
    const { email, password, first_name, last_name } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const isUserExist = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExist) {
      return new NextResponse('User already exist', { status: 409 });
    }

    // Create the user
    const user: User = await prismadb.user.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
        last_name,
      },
    });

    // Create a wishlist for the user
    await prismadb.wishlist.create({
      data: {
        userId: user.id,
      },
    });

    // Create a JWT
    const token = generateToken(user);

    const userInfo = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
    };
    // Return the token

    return new NextResponse(JSON.stringify(userInfo), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 });
  }
}
