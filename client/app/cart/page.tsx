import { Metadata } from 'next';

import { CartTable, CartTotal } from '@/components/cart';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart page',
};

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* PRODUCTS */}
        <CartTable />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
