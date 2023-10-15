'use client';

import { useWindowSize } from '@uidotdev/usehooks';

const TableHead = () => {
  const { width } = useWindowSize();

  let isMobile = width! < 1024;

  if (isMobile) return null;

  return (
    <thead className="w-full lg:w-[60%]">
      <tr className="bg-primary-light text-lg text-white ">
        <th className=""> </th>
        <th className=""> </th>
        <th className="p-4 text-start">Product</th>
        <th className="p-4 text-start">Price</th>
        <th className="p-4 text-start">Quantity</th>
        <th className="p-4 text-start">Subtotal</th>
      </tr>
    </thead>
  );
};

export default TableHead;
