'use client';

import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui';
import { Product } from '@/types';
import { useCartStore } from '@/lib/state';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <Button
      onClick={() => addToCart(product)}
      variant="primary"
      className="rounded-md  border-none m-auto md:ml-2 w-full md:w-auto flex items-center gap-2"
    >
      <span>
        <ShoppingCart size={20} />
      </span>
      <span>Add to Cart</span>
    </Button>
  );
};

export default AddToCartButton;
