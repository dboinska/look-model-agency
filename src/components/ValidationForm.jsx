import * as Yup from 'yup';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(12, 'to long')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  address: Yup.string().required('Required'),

  city: Yup.string().required('Required'),

  postcode: Yup.string().required('Required'),

  birthDate: Yup.date()
    .max(new Date().getFullYear() - 17, 'You are too young ')
    .required('Required'),

  hairColor: Yup.string().required('Required'),

  eyeColor: Yup.string().required('Required'),

  height: Yup.number().positive().min(167, 'To Little!').required('Required'),

  weight: Yup.number()
    .positive()
    .min(50, 'To Little!')
    .max(80, 'To Much!')
    .required('Required'),
  chestWidth: Yup.number().positive().required('Required'),

  waistWidth: Yup.number().positive().required('Required'),
  hipWidth: Yup.number().positive().required('Required'),
  shoeSize: Yup.number().positive().required('Required'),
});
