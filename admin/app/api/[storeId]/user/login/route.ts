import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcrypt';
import { generateToken } from '@/utils/auth';
import prismadb from '@/lib/prismadb';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const isUserExist = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (!isUserExist) {
      return new NextResponse('Invalid email or password', { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, isUserExist.password);

    if (!isPasswordValid) {
      return new NextResponse('Invalid email or password', { status: 401 });
    }

    // Create a JWT

    const token = generateToken(isUserExist);

    const userInfo = {
      id: isUserExist.id,
      email: isUserExist.email,
      first_name: isUserExist.first_name,
      last_name: isUserExist.last_name,
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
