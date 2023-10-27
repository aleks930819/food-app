'use client';

import ClientOnly from '@/components/common/client-only/client-only';
import { useCartStore } from '@/lib/state';

const ChecoutPriceSummary = () => {
  const cartTotal = useCartStore((state) => state.totalCartItemsPrice);
  return (
    <ClientOnly>
      <div className="flex  w-3/4 flex-col m-auto  items-center justify-center gap-4  border-t border-b border-gray-1 py-6 mb-6">
        <div className="flex w-full justify-between">
          <p aria-label="Subtotal" className="text-gray-1 text-center">
            Subtotal:
          </p>
          <p className="text-black">
            <strong>
              <span>$</span> {cartTotal.toFixed(2)}
            </strong>
          </p>
        </div>
        <div className="flex w-full justify-between ">
          <p aria-label="Delivery Price" className="text-gray-1 text-center">
            Delivery Price:
          </p>
          <p className="text-black">
            <strong>0</strong>
          </p>
        </div>
      </div>

      <div className="flex w-3/4  justify-between m-auto items-center pb-6 ">
        <p aria-label="Total" className="font-bold text-black">
          <strong>
            <span>Total</span>:
          </strong>
        </p>
        <p className="text-xl  font-bold text-black">
          <strong>
            <span>$</span>
            {cartTotal.toFixed(2)}
          </strong>
        </p>
      </div>
    </ClientOnly>
  );
};

export default ChecoutPriceSummary;
