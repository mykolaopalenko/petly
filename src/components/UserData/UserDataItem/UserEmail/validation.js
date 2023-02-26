import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address, example: "mail@mail.com"')
    .matches(
      /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/,
      'Valid email address, example: "mail@mail.com"'
    )
    .required('Email is required')
    .min(12, 'Email should be at least 12 characters long')
    .max(63, 'Email should be up to 63 characters long'),
});