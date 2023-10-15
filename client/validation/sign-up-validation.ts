import * as yup from 'yup';

import { emailValidation, passwordValidation } from './common';

const signUpValidation = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Last name must contain only letters'),
  email: emailValidation,
  password: passwordValidation,
});

export default signUpValidation;
