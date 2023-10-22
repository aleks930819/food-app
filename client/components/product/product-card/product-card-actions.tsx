'use client';
import React from 'react';
import { Eye, Heart } from 'lucide-react';
import { useCartStore } from '@/lib/state';
import { Product } from '@/types';

import { Tooltip } from '@/components/common/tooltip';

const ProductCardActions = ({ product }: { product: Product }) => {
  const addItemsToCart = useCartStore((state) => state.addItem);

  return (
    <div className="flex gap-2 w-full pt-4 ">
      <button
        aria-label="Add to cart"
        data-test="add-to-cart"
        className="custom-background mr-auto rounded-full py-2 px-4"
        onClick={() => addItemsToCart(product)}
      >
        Add to cart
      </button>
      <Tooltip tooltip="Quick View">
        <button className="custom-background w-11 h-11 flex items-center text-center mr-2 rounded-full ">
          <Eye size={20} className="mx-auto" />
        </button>
      </Tooltip>
      <Tooltip tooltip="Add to wishlist">
        <button className="custom-background  rounded-full w-11 h-11 flex items-center text-center">
          <Heart size={20} className="mx-auto" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ProductCardActions;
