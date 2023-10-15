'use client';

import { useAuthModalState } from '@/lib/state/auth-modal';
import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { signInValidation, signUpValidation } from '@/validation';
import { FormInput } from '../form';
import { Button } from '../ui';
import { useClickAway } from '@uidotdev/usehooks';
import { X } from 'lucide-react';

type SignInFormValues = yup.InferType<typeof signInValidation>;

type SignUpFormValues = yup.InferType<typeof signUpValidation>;

const AuthForm = () => {
  const [formState, setFormState] = useState<'signin' | 'signup'>('signin');
  const isOpen = useAuthModalState((state) => state.isOpen);
  const hideAuthModal = useAuthModalState((state) => state.hideAuthModal);

  const ref: any = useClickAway(() => {
    hideAuthModal();

    setFormState('signin');
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormValues | SignUpFormValues>({
    resolver: yupResolver(formState === 'signin' ? signInValidation : signUpValidation),
  });

  useEffect(() => {
    if (formState === 'signin') {
      reset({ email: '', password: '' });
    } else {
      reset({ firstName: '', lastName: '', email: '', password: '' });
    }
  }, [formState]);

  const onSubmit = async (data: SignInFormValues | SignUpFormValues) => {};

  return (
    <div
      className={`fixed top-0 left-0  w-full h-full bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out transform ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div ref={ref} className="">
        <form
          className={`absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-8
          w-[90%] sm:w-[45vw] md:w-[35vw]
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => {
              hideAuthModal();
            }}
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl text-center font-bold mb-4">{formState === 'signin' ? 'Sign In' : 'Sign Up'}</h2>

          <span className="text-center block mb-4">
            <p>
              {formState === 'signin' ? 'Dont have an account?' : 'Already have an account?'}{' '}
              <button
                className="text-primary-light font-bold hover:underline"
                onClick={() => {
                  setFormState(formState === 'signin' ? 'signup' : 'signin');
                }}
              >
                {formState === 'signin' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </span>

          {formState === 'signup' && (
            <>
              <FormInput
                type="text"
                id="firstName"
                label="Name"
                className="mb-4"
                register={register('firstName')}
                // TODO: fix this
                // @ts-ignore
                error={errors.firstName}
              />

              <FormInput
                type="text"
                id="lastName"
                label="Last Name"
                className="mb-4"
                register={register('lastName')}
                // TODO: fix this
                // @ts-ignore
                error={errors.lastName}
              />
            </>
          )}
          <FormInput
            type="email"
            id="email"
            label="Email"
            className="mb-4"
            register={register('email')}
            error={errors.email}
          />
          <FormInput
            type="password"
            id="password"
            label="Password"
            className="mb-4"
            register={register('password')}
            error={errors.password}
          />

          <Button type="submit" className="w-full mt-4" variant="primary">
            {formState === 'signin' ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
