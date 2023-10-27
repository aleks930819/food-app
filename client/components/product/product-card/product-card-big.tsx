'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product } from '@/types';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

import { ReviewStars } from '@/components/common';
import { ClientOnly } from '@/components/common';
import { Tooltip } from '@/components/common/tooltip';

const ProductActionButton = ({
  icon,
  action,
  tooltip,
}: {
  icon: React.ReactNode;
  action: () => void;
  tooltip: string;
}) => {
  return (
    <Tooltip tooltip={tooltip} position="left">
      <button
        onClick={action}
        className="bg-gray-400 flex justify-center items-center text-white text-lg rounded-full w-10 h-10 hover:bg-primary-light transition-all duration-300 ease-in-out "
      >
        {icon}
      </button>
    </Tooltip>
  );
};

const ProductCardBig = ({ product }: { product: Product }) => {
  if (!product) return null;

  return (
    <ClientOnly>
      <div className=" p-4 rounded-lg shadow-md group group-hover:shadow-none transition-all duration-300 ease-in-out">
        <div className="w-full max-w-full border relative group-hover:border-primary-light transition-all duration-300 ease-in-out  group-hover:border-[4px] rounded-lg group-hover:scale-105 border-secondary px-2 py-4 flex flex-col  items-center">
          <div className="w-full h-96">
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={450}
              height={350}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{product.name}</h2>
          <p className="text-primary-light text-xl mb-2">
            <strong>${product.price}</strong>
          </p>
          <p className="pb-10">
            <ReviewStars num={4} />
          </p>

          <div className="absolute flex flex-col gap-2 right-0 top-0 mr-4 mt-4 transition-all duration-300 ease-in-out transform translate-x-[-20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
            <ProductActionButton tooltip="Quick View" icon={<Eye size={22} />} action={() => {}} />
            <ProductActionButton tooltip="Add to wishlist" icon={<Heart size={22} />} action={() => {}} />
            <ProductActionButton tooltip="Add to cart" icon={<ShoppingCart size={22} />} action={() => {}} />
          </div>
          <span
            className="bg-primary-light text-white px-4 py-2 rounded-full
      transition-all duration-300 ease-in-out absolute bottom-[-20px]
    translate-y-[40px] opacity-0
      transform group-hover:translate-y-0  group-hover:opacity-100
      "
          >
            <Link href={`/products/${product.id}`}>More Info</Link>
          </span>
        </div>
      </div>
    </ClientOnly>
  );
};

export default ProductCardBig;
