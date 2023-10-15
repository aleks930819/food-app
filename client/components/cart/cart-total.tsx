'use client';

import { CircleDollarSign } from 'lucide-react';
import React from 'react';

import { Button } from '../ui';

const CartTotal = () => {
  return (
    <section className="shadow-lg  rounded-lg px-10 py-2 w-full lg:w-[40%]">
      <h3 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-4">Cart Totals</h3>

      <p className="text-lg text-gray-500 mb-2 flex w-full justify-between">
        Subtotal: <strong>$100</strong>
      </p>

      <p className="text-lg text-gray-500 mb-2 flex w-full justify-between">
        Shipping: <strong>$20</strong>
      </p>

      <p className="text-lg text-gray-500 mb-2 flex w-full justify-between">
        Total: <strong>$120</strong>
      </p>
      <Button variant="primary" className="w-3/4 rounded-md my-10 mx-auto flex items-center gap-2">
        <span>Proceed to Checkout</span>
        <span>
          <CircleDollarSign />
        </span>
      </Button>
    </section>
  );
};

export default CartTotal;
