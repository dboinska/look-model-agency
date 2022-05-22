import * as Yup from 'yup';
import subYears from 'date-fns/subYears';
import isBefore from 'date-fns/isBefore';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function getPostalCodeRegExp(countryCode) {
  let postalCodeRegex = '';
  switch (countryCode) {
    case 'us':
      postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
      break;
    case 'ca':
      postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
      break;
    case 'pl':
      postalCodeRegex = /^([0-9]{2})(?:[-\s]*([0-9]{3}))?$/;
      break;
    default:
      postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
  }
  return postalCodeRegex;
}

function isAdult(birthDate) {
  const today = new Date();
  const subDate = subYears(today, 18);
  return isBefore(birthDate, subDate);
}

const eyeColors = ['blue', 'green', 'brown', 'gray'];

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
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'to short')
    .max(12, 'to long')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  address: Yup.string().required('Required'),

  city: Yup.string().required('Required'),

  countryCode: Yup.string().required('Required'),

  postalCode: Yup.string().when('countryCode', (countryCode, schema) => {
    if (countryCode) {
      const country_regexp = getPostalCodeRegExp(countryCode.toLowerCase());

      return schema
        .matches(country_regexp, 'Invalid postal code')
        .required('Required');
    }
    return schema.required('Required');
  }),

  birthDate: Yup.date()
    .max(new Date(), 'Future date')
    .test('check-is-adult', 'You are too young!', isAdult)
    .required('Required'),

  hairColor: Yup.string().required('Required'),

  eyeColor: Yup.string().required('Required').oneOf(eyeColors),

  height: Yup.number()
    .positive()
    .min(167, 'To Little!')
    .max(240, 'Are you sure?')
    .required('Required'),

  weight: Yup.number()
    .positive()
    .min(50, 'To Little!')
    .max(88, 'To Much!')
    .required('Required'),

  chestWidth: Yup.number()
    .positive()
    .min(60, 'To Little!')
    .max(100, 'To Much!')
    .required('Required'),

  waistWidth: Yup.number()
    .positive()
    .min(50, 'To Little!')
    .max(80, 'To Much!')
    .required('Required'),
  hipWidth: Yup.number()
    .positive()
    .min(70, 'To Little!')
    .max(110, 'To Much!')
    .required('Required'),
  shoeSize: Yup.number()
    .positive()
    .min(32, 'To Little!')
    .max(44, 'To Much!')
    .required('Required'),
});
