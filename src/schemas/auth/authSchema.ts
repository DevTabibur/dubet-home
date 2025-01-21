import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters')
    .required('Password is required'),
})

export const smsLoginSchema = yup.object().shape({
  phoneNumber: yup.string().required('Phone Number is required'),
})

export const confirmationCodeSchema = yup.object().shape({
  confirmationCode: yup.string().required('Confirmation Code is required'),
})

export const onClickFormSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  currency: yup.string().required('Currency is required'),
  promoCode: yup.string().optional(),
})

export const byPhoneFormSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  countryCode: yup.string().required('Country code is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  currency: yup.string().required('Currency is required'),
  promoCode: yup.string().optional(),
})

export const byEmailFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be less than 50 characters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must be less than 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  countryCode: yup.string().required('Country code is required'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
    .min(6, 'Phone Number must be at least 6 digits')
    .max(15, 'Phone Number must be less than 15 digits'),
  currency: yup.string().required('Currency is required'),
  promoCode: yup.string().optional(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const forgetPasswordSchema = yup.object().shape({
  forgetCode: yup.string().required('Code is required'),
})

export const resetPasswordSchema = yup.object().shape({
  resetCode: yup.string().required('Code is required'),
})
