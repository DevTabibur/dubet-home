/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { loginSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'

//!=========================================================================>>>

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
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
              type="email"
              placeholder="Email"
              className="w-full bg-[#48304d] text-white "
              {...getFieldProps('email')}
            />
          </div>
          {touched.email && errors.email && (
            <div className="text-red-500 text-start mt-1">{errors.email}</div>
          )}
          <div className="flex flex-col items-center justify-center mt-6">
            <FormInput
              type="password"
              placeholder="Password"
              className="w-full bg-[#48304d] text-white "
              {...getFieldProps('password')}
            />
          </div>
          {touched.password && errors.password && (
            <p className="text-red-500 text-start mt-1">{errors.password}</p>
          )}

          <div className="flex items-center justify-start h-full my-4">
            <input
              type="checkbox"
              className="mr-2 w-5 h-5 bg-[#34193a] rounded border border-gray-200 appearance-none  checked:bg-[blue] checked:border-white focus:ring-0"
            />
            <p className="text-white font-normal">Remember Information</p>
          </div>

          <div className="">
            <Button
              type="submit"
              // variant="solid"
              className="text-center w-full text-white rounded px-20 py-3 font-bold bg-[#9b00b8] flex items-center justify-center" // Added flex properties
              size="lg"
              disabled={isSubmitting}
            >
              LOGIN
            </Button>
          </div>
          <div>
            <button className="text-white mt-3">Forget Password?</button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default LoginForm
