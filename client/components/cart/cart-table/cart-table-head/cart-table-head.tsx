'use client';

import { useWindowSize } from '@uidotdev/usehooks';

const CartTableHead = () => {
  const { width } = useWindowSize();

  let isMobile = width! < 1024;

  if (isMobile) return null;

  return (
    <thead className="w-full">
      <tr className="bg-primary-light text-lg text-white w-full">
        <th className=""></th>
        <th className=""></th>
        <th className="p-4 text-start">Product</th>
        <th className="p-4 text-start">Price</th>
        <th className="p-4 text-start">Quantity</th>
        <th className="p-4 text-start">Subtotal</th>
      </tr>
    </thead>
  );
};

export default CartTableHead;
