import * as yup from 'yup';

import { emailValidation } from './common';

const checkoutFormValidation = yup.object({
  firstName: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'The name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'The last name must contain only letters'),
  streetAddress: yup
    .string()
    .required('Address is required')
    .matches(/^[a-zA-Zа-яА-Я0-9\s,'-]*$/, 'The address must contain only letters and numbers'),
  city: yup
    .string()
    .required('City is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'The city must contain only letters'),
  state: yup
    .string()
    .required('State is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'The state must contain only letters'),
  zipCode: yup
    .string()
    .required('Zip code is required')
    .matches(/^[0-9]+$/, 'The zip code must contain only numbers'),
  email: emailValidation,
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[0-9]+$/, 'The phone must contain only numbers'),
});

export default checkoutFormValidation;
