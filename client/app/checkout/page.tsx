import React from 'react';

import { CheckoutForm, CheckoutItems, CheckoutSummary } from '@/components/checkout';

const CheckoutPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center lg:text-3xl mb-10 mt-10">Checkout</h2>

      <div className="flex flex-col lg:flex-row gap-10 w-full m-auto items-center justify-center">
        <div className="w-full lg:w-[70%]">
          <CheckoutForm />
        </div>
        {/* ORDER SUMMARY */}
        <section className="flex flex-col items-center gap-2 p-0 w-full lg:p-4 shadow-md px-4 py-2 lg:w-[30%]">
          <h2 className="text-xl w-full lg:text-2xl lg:w-3/4 text-center lg:text-start font-semibold text-black  pb-6 pt-2">
            Order Summary
          </h2>
          <CheckoutItems />
          <CheckoutSummary />
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
