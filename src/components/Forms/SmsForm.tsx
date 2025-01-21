/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
import { smsLoginSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'

//!===========================================================>>>

const SmsForm = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: smsLoginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Form values:', values)
        // Here you can handle the login logic, e.g., making API requests.
      } catch (error) {
        console.error('Login error', error)
        resetForm()
      }
    },
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } =
    formik


  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center">
            <FormInput
              type="text"
              placeholder="Phone Number"
              className="w-full bg-[#48304d] text-white"
              {...getFieldProps('phoneNumber')}
            />
          </div>
          {touched.phoneNumber && errors.phoneNumber && (
            <div className="text-red-500 text-start mt-1">
              {errors.phoneNumber}
            </div>
          )}

          <div className="mt-12">
            <Button
              type="submit"
              variant="solid"
              className="text-center w-full text-white rounded px-20 py-3 font-bold bg-[#9b00b8] flex items-center justify-center" // Added flex properties
              size="lg"
              disabled={isSubmitting}
            >
              Send code
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default SmsForm
