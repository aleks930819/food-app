'use client';

import Image from 'next/image';
import React from 'react';

import { Product } from '@/types/types';
import { Eye, Heart } from 'lucide-react';

import { ReviewStars } from '@/components/review-stars';
import { ClientOnly } from '@/components/client-only';
import Link from 'next/link';

const ProductActionButton = ({ icon, action }: { icon: React.ReactNode; action: () => void }) => {
  return (
    <button
      onClick={action}
      className="bg-gray-400 flex justify-center items-center text-white text-lg rounded-full w-10 h-10 hover:bg-primary-light transition-all duration-300 ease-in-out "
    >
      {icon}
    </button>
  );
};

const ProductCardBig = ({ product }: { product: Product }) => {
  if (!product) return null;

  return (
    <ClientOnly>
      <div className=" p-4 rounded-lg shadow-md group group-hover:shadow-none transition-all duration-300 ease-in-out">
        <div
          className="w-full max-w-full border relative
    group-hover:border-primary-light transition-all duration-300 ease-in-out  group-hover:border-[4px]
   rounded-lg
    group-hover:scale-105
    border-secondary px-2 py-4 flex flex-col  items-center"
        >
          <div className="w-full h-96">
            <Image
              src={product.imageURL}
              alt={product.name}
              width={450}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-primary-light text-xl mb-2">
            <strong>${product.price}</strong>
          </p>
          <p className="pb-10">
            <ReviewStars num={product.reviews} />
          </p>

          <div
            className="absolute flex flex-col gap-2
       right-0 top-0 mr-4 mt-4 transition-all duration-300 ease-in-out
       transform translate-x-[-20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100
      "
          >
            <ProductActionButton icon={<Eye size={22} />} action={() => {}} />
            <ProductActionButton icon={<Heart size={22} />} action={() => {}} />
          </div>
          <span
            className="bg-primary-light text-white px-4 py-2 rounded-full
      transition-all duration-300 ease-in-out absolute bottom-[-20px]
    translate-y-[40px] opacity-0
      transform group-hover:translate-y-0  group-hover:opacity-100
      "
          >
            <Link href={`/products/${product.slug}`}>More Info</Link>
          </span>
        </div>
      </div>
    </ClientOnly>
  );
};

export default ProductCardBig;
