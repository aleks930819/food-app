import React from 'react';

import { cn } from '@/lib/utils';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  label: string;
  className?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
}

const FormInput = ({ type, id, label, className, register, error, ...props }: FormInputProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-base font-semibold text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`text-base  bg-gray-100  rounded-sm px-4 py-3  placeholder:text-base focus:border-gray-3 focus:ring-1 focus:ring-primary-light focus:bg-transparent transition-all outline-none text-black`}
        placeholder={label}
        {...register}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
