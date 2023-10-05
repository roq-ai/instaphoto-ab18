import * as yup from 'yup';

export const postValidationSchema = yup.object().shape({
  caption: yup.string().nullable(),
  location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
