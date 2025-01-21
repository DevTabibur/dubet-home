import * as yup from 'yup'

export const customerSupportSchema = yup.object().shape({
  message: yup.string().required('Message is required'),
})
