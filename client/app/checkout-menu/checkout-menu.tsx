'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useClickAway } from '@uidotdev/usehooks';
import { useCartStore } from '@/lib/state';

import useCheckoutMenu from '@/lib/state/checkout-menu';

import CheckoutMenuItem from './checkout-menu-item';
import { ClientOnly } from '@/components/common';
import { Button } from '@/components/ui';

const CheckoutMenu = () => {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const isOpen = useCheckoutMenu((state) => state.isOpen);
  const totalCartPrice = useCartStore((state) => state.totalCartItemsPrice);
  const hideCheckoutMenu = useCheckoutMenu((state) => state.hideCheckoutMenu);

  const ref = useClickAway(() => {
    hideCheckoutMenu();
  });

  return (
    <ClientOnly>
      {isOpen && (
        <div className="fixed top-0 z-40  left-0 w-full h-full bg-black/80  transition-opacity duration-500" />
      )}

      <div
        data-test="checkout-menu"
        ref={ref as any}
        className={`w-[90vw] sm:w-[55vw] md:w-[45vw] xl:w-[25vw] z-50
        fixed h-screen flex flex-col  justify-between px-3 bg-white  top-0 right-0 transition duration-500 ease-in-out transform overflow-y-auto ${
          isOpen ? 'translate-x-0 visible ' : ' invisibile translate-x-full  '
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black text-start pt-10 pb-10">Cart</h2>
          <button data-test="checkout-menu-close-button" className="text-black" onClick={hideCheckoutMenu}>
            <X size={24} />
          </button>
        </div>

        {/* ITEMS IN THE CART */}
        <div className="w-full flex flex-col gap-5 items-center justify-center  mb-auto border-t pt-5 pb-5">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-black font-semibold">Your Cart is empty.</p>
            </div>
          )}
          {items.map((item) => (
            <CheckoutMenuItem key={item.id} product={item} />
          ))}
        </div>

        {/* TOTAL PRICE  AND CHECKOUT MENU ACTIONS*/}
        {items.length > 0 ? (
          <div className="pb-5 pt-5">
            <p className="w-full flex justify-between">
              <span className="text-black font-semibold">Total: </span>
              <span className="text-black font-bold"> ${totalCartPrice.toFixed(2)}</span>
            </p>
            {/* CHECKOUT MENU ACTIONS */}
            <div className=" flex flex-col gap-4 mt-4">
              <Button
                disabled={items.length === 0}
                aria-label="Checkout"
                variant="primary"
                className="disabled:opacity-50 disabled:hover:bg-primary-light/50 disabled:cursor-not-allowed"
                onClick={() => {
                  router.push('/checkout');
                  hideCheckoutMenu();
                }}
              >
                Checkout
              </Button>
              <Button
                aria-label="View shopping cart"
                variant="outline"
                onClick={() => {
                  router.push('/cart');
                  hideCheckoutMenu();
                }}
              >
                View Shopping Cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mt-auto mb-6">
            <Button
              aria-label="Continue Shopping"
              variant="primary"
              className="disabled:opacity-50 disabled:hover:bg-primary-light/50 disabled:cursor-not-allowed"
              onClick={() => {
                router.push('/products');
                hideCheckoutMenu();
              }}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </ClientOnly>
  );
};

export default CheckoutMenu;
