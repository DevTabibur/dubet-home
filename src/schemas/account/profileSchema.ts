import * as yup from 'yup'

export const profileSchema = yup.object().shape({
  accountNumber: yup.string().optional(),
  newPassword: yup
    .string()
    .required('New Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  registrationDate: yup.string().optional(),
  phone: yup.string().required('Phone is required'),
  address: yup.string().required('Address is required'),
  username: yup
    .string()
    .required('Username is required')
    .min(2, 'Username must be at least 2 characters')
    .max(50, 'Username must be less than 50 characters'),
  surname: yup
    .string()
    .required('Surname is required')
    .min(2, 'Surname must be at least 2 characters')
    .max(50, 'Surname must be less than 50 characters'),
  dob: yup.string().required('Date of Birth is required'),
  placeOfBirth: yup.string().required('Place of Birth is required'),
  documentType: yup.string().optional(),
  documentNumber: yup.string().optional(),
  documentIssueDate: yup.string().optional(),
  country: yup.string().required('Country is required'),
  gender: yup.string().required('Gender is required'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
    .min(6, 'Phone Number must be at least 6 digits')
    .max(15, 'Phone Number must be less than 15 digits'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
})
