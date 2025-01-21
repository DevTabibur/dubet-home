/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { forgetPasswordSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'
import { useState } from 'react'

//!==============================================================>>>
const ForgetPasswordForm = () => {
  const [isForgetDataChecked, setIsForgetDataChecked] = useState(false) // State to toggle form visibility
  const formik = useFormik({
    initialValues: {
      forgetCode: '',
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Validate email or phone number here
        console.log('Form values:', values)

        if (values.forgetCode) {
          // Add your validation logic (e.g., regex for email/phone number)
          // Assuming it's valid, update the state to show the second form
          setIsForgetDataChecked(true)
        }
      } catch (error) {
        console.error('Submission error', error)
        resetForm()
      }
    },
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik

  return (
    <>
      {/* First form: email or phone input */}
      {!isForgetDataChecked && ( // Show this form only if forgetCode has not been validated
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {/* Input for email or phone number */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Insert Email or Mobile number here"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('forgetCode')}
              />
              {touched.forgetCode && errors.forgetCode && (
                <div className="text-red-500 text-start mt-1">
                  {errors.forgetCode}
                </div>
              )}
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                variant="solid"
                className="text-center w-full text-white rounded px-20 py-2  font-bold bg-[#9b00b8] flex items-center justify-center"
                size="lg"
                disabled={isSubmitting}
              >
                Send Code
              </Button>
            </div>
          </Form>
        </FormikProvider>
      )}

      {/* Second form: code input */}
      {isForgetDataChecked && ( // Show this form after successful email/phone validation
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {/* Input for code */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Enter Code"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('forgetCode')}
              />
              {touched.forgetCode && errors.forgetCode && (
                <div className="text-red-500 text-start mt-1">
                  {errors.forgetCode}
                </div>
              )}
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                variant="solid"
                className="text-center w-full text-white rounded px-20 py-2 font-bold bg-[#9b00b8] flex items-center justify-center"
                size="lg"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </Form>
        </FormikProvider>
      )}
    </>
  )
}

export default ForgetPasswordForm
