import React from 'react';
import Image from 'next/image';
import { ShoppingCart, X } from 'lucide-react';
import { Product } from '@/types/types';

import { Button } from '../ui';

const WishlistProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="">
      <Image src={product.imageURL} alt={product.name} width={500} height={500} />

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-xl text-gray-500 mb-2">
          <strong>${product.price.toFixed(2)}</strong>
        </p>
        <div className="flex items-center  gap-2">
          <Button className="rounded-md">
            <span>
              <X size={20} />
            </span>
            <span>Remove</span>
          </Button>
          <Button variant="primary" className="rounded-md  ">
            <span>
              <ShoppingCart size={20} />
            </span>
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
