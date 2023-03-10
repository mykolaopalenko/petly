import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should have at least 3 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇґҐ]+(?: [a-zA-Zа-яА-ЯіІїЇґҐ]+)*$/,
      'Only letters can be accepted'
    )
    .max(12, 'Name should be up to 12 characters long')
    .required('Name is required'),
});
