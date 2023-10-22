import React from 'react';
import { Eye } from 'lucide-react';
import Image from 'next/image';

import { Product } from '@/types';
import Link from 'next/link';

import { AddToCartButton } from '@/components/common';

const ProductList = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-md shadow-md">
      <div className="w-full md:w-[40%] h-full bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={300}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 w-full md:w-[60%]">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description.substring(0, 100) + '...'}</p>
        <p className="text-xl font-semibold text-primary-light">
          <strong>${product.price}</strong>
        </p>
        {/* ACTIONS */}
        <div className="flex items-center gap-2 px-4 py-4 mt-auto ">
          <Link
            href={`/products/${product.id}`}
            className="mr-2 rounded-md bg-primary-light  px-4 py-3  transition-all duration-200 ease-in-out  text-white font-bold hover:bg-secondary flex items-center gap-2"
          >
            <Eye size={16} />
            View
          </Link>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
