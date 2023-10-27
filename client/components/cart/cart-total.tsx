'use client';

import React from 'react';

import { useCartStore } from '@/lib/state';
import Link from 'next/link';

const CartTotal = () => {
  const cartTotalPrice = useCartStore((state) => state.totalCartItemsPrice);
  const cartItems = useCartStore((state) => state.items);

  if (cartItems.length === 0) return null;

  return (
    <section className="shadow-lg  rounded-lg px-4 py-2 w-full lg:w-[30%]">
      <h3 className="text-xl font-bold mt-10 mb-4 border-b border-gray-200 pb-4">Cart Totals</h3>
      <p className="text-base text-gray-500 mb-2 flex w-full justify-between">
        Subtotal: <strong>${cartTotalPrice.toFixed(2)}</strong>
      </p>

      <p className="text-base text-gray-500 mb-2 flex w-full justify-between">
        Shipping: <strong>0</strong>
      </p>

      <p className="text-base text-gray-500 mb-2 flex w-full justify-between">
        Total: <strong>${cartTotalPrice.toFixed(2)}</strong>
      </p>
      <Link
        href="/checkout"
        className="w-full block text-center bg-primary-light px-4 py-3  transition-all duration-200 ease-in-out  text-white font-bold hover:bg-secondary rounded-md my-10 mx-auto "
      >
        Proceed to Checkout
      </Link>
    </section>
  );
};

export default CartTotal;
