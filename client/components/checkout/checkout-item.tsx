'use client';

import React from 'react';

import Image from 'next/image';

import { ClientOnly } from '../common';
import { Product } from '@/types';
import { useCartStore } from '@/lib/state';

const CheckoutItems = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <ClientOnly>
      <ul className="flex flex-col gap-6 w-full m-auto items-center justify-center pb-6">
        {cartItems.map((item: Product) => (
          <li className="flex justify-between gap-2 text-black   w-3/4" key={item.id}>
            <div className="flex gap-4 pr-4">
              <figure className="aspect-square w-[100px] h-[100px]">
                <Image
                  src={item.images[0].url}
                  alt="placeholder"
                  className="object-cover w-full h-full"
                  width={100}
                  height={100}
                />
              </figure>

              <p>
                {item.name} x {item.cartItemQuantity}
              </p>
            </div>

            <p>
              <strong>
                {Number(item.price).toFixed(2)} <span>лв.</span>
              </strong>
            </p>
          </li>
        ))}
      </ul>
    </ClientOnly>
  );
};

export default CheckoutItems;
