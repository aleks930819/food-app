import React from 'react';

import { Product } from '@/types/types';
import Image from 'next/image';
import { Button } from '../ui';

const ProductList = ({ product }: { product: Product }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-md shadow-md">
      <div className="w-[40%] h-full bg-gray-100 rounded-md overflow-hidden">
        <Image
          src={product.imageURL}
          alt={product.name}
          width={300}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-xl font-semibold text-primary-light">
          <strong>${product.price}</strong>
        </p>
        {/* ACTIONS */}
        <div className="px-4 py-4">
          <Button className="mr-2">View</Button>
          <Button className="">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
