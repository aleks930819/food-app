'use client';

import { ShoppingCart } from 'lucide-react';

import { CheckoutMenu } from '@/app/checkout-menu';
import useCheckoutMenu from '@/lib/state/checkout-menu';
import { useCartStore } from '@/lib/state';

const CartButton = () => {
  const showCheckoutMenu = useCheckoutMenu((state) => state.showCheckoutMenu);
  const cart = useCartStore((state) => state.items);

  return (
    <>
      <nav className="flex items-center gap-2">
        <button
          data-test="cart-button"
          className="bg-primary-dark flex items-center gap-2 px-4 py-2 rounded-full"
          onClick={showCheckoutMenu}
        >
          <span className="font-bold flex items-center gap-2">
            <ShoppingCart size={18} />
            Cart
          </span>
          <span
            data-test="cart-count"
            className="bg-white text-primary-dark rounded-full w-6 h-6 flex items-center justify-center"
          >
            {cart.length}
          </span>
        </button>
      </nav>
      <CheckoutMenu />
    </>
  );
};

export default CartButton;
