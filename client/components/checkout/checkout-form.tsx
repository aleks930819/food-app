'use client';

import React from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { Button } from '../ui';
import { FormInput } from '../form';

import { checkoutFormValidation } from '@/validation';

type CheckoutFormValues = yup.InferType<typeof checkoutFormValidation>;

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: yupResolver(checkoutFormValidation),
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  return (
    <form className="w-full px-5 lg:px-0 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row   gap-6 mb-6">
        <FormInput
          type="text"
          id="firstName"
          label="First Name"
          className="w-full"
          register={register('firstName')}
          error={errors.firstName}
        />
        <FormInput
          type="text"
          id="lastName"
          label="Last Name"
          className="w-full"
          register={register('lastName')}
          error={errors.lastName}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <FormInput
          type="text"
          id="streetAddress"
          label="Street Address"
          className="w-full"
          register={register('streetAddress')}
          error={errors.streetAddress}
        />
      </div>
      <div className="flex  flex-col lg:flex-row gap-6 mb-6 w-full">
        <FormInput
          type="text"
          id="city"
          className="w-full"
          label="City"
          register={register('city')}
          error={errors.city}
        />
        <FormInput
          type="text"
          id="state"
          className="w-full"
          label="State"
          register={register('state')}
          error={errors.state}
        />
        <FormInput
          type="text"
          id="zipCode"
          className="w-full"
          label="Zip Code"
          register={register('zipCode')}
          error={errors.zipCode}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <FormInput
          type="email"
          id="email"
          label="Email"
          className="w-full"
          register={register('email')}
          error={errors.email}
        />
        <FormInput
          type="phone"
          id="phone"
          label="Phone"
          className="w-full"
          register={register('phone')}
          error={errors.phone}
        />
      </div>
      <Button
        aria-disabled={isSubmitting || Object.keys(errors).length > 0}
        disabled={isSubmitting || Object.keys(errors).length > 0}
        aria-label="Checkout"
        type="submit"
        className="w-full lg:w-auto"
      >
        Checkout
      </Button>
    </form>
  );
};

export default CheckoutForm;
