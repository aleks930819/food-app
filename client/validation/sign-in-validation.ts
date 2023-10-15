import * as yup from 'yup';

import { emailValidation, passwordValidation } from './common';

const signInValidation = yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export default signInValidation;
