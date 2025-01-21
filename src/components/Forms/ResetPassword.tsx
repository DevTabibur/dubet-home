/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { resetPasswordSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'

//!==============================================================>>>
const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Form values:', values)
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
          <div className="grid grid-cols-2 gap-4">
            {' '}
            {/* First Name */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="New Password"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('resetCode')}
              />
              {touched.resetCode && errors.resetCode && (
                <div className="text-red-500 text-start mt-1">
                  {errors.resetCode}
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Button
              type="submit"
              variant="solid"
              className="text-center w-full text-white rounded px-20 py-2  font-bold bg-[#9b00b8] flex items-center justify-center"
              size="lg"
              disabled={isSubmitting}
            >
              Save
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default ResetPassword
