/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { confirmationCodeSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'

//!===========================================================================>>>
const ConfirmationCode = () => {
  const formik = useFormik({
    initialValues: {
      confirmationCode: '',
    },
    validationSchema: confirmationCodeSchema,
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

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik

  // const handleSocialMediaClick = (id: string) => {
  //   console.log(`Clicked on ${id}`)
  //   // Perform actions based on the clicked social media id
  // }
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center pt-8">
            <FormInput
              type="text"
              placeholder="Confirmation Code"
              className="w-[80%] bg-[#48304d] text-white "
              {...getFieldProps('confirmationCode')}
            />
          </div>
          {touched.confirmationCode && errors.confirmationCode && (
            <div className="text-red-500 text-start mt-1">
              {errors.confirmationCode}
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
              Confirm Registration
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default ConfirmationCode
