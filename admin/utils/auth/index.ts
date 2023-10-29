import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

export const generateToken = (user: User) => {
  const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || 'secret';
  return jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: '30d',
  });
};
