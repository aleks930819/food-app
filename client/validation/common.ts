import * as yup from 'yup';

export const emailValidation = yup
  .string()
  .email('Email is not valid')
  .required('Email is required')
  .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, 'Email is not valid');

export const passwordValidation = yup
  .string()
  .required('The password is required')
  .min(8, 'Password must be at least 8 characters long')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter and one number',
  );

export const streedAddressValidation = yup
  .string()
  .required('Address is required')
  .matches(/^[a-zA-Z0-9\s,'-]*$/, 'Address must contain only letters and numbers');
