'use client'
import { byEmailFormSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, Dropdown, FormInput } from '../ui'
import { FaFlag } from 'react-icons/fa' // Import flag icon

const ByEmailForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      countryCode: '+880',
      currency: 'Bangladeshi TK (BDT)',
      promoCode: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: byEmailFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Form values:', values)
      } catch (error) {
        console.error('Login error', error)
        resetForm()
      }
    },
  })

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* firstName */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="First Name"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('firstName')}
              />
              {touched.firstName && errors.firstName && (
                <div className="text-red-500 text-start mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            {/* lastName */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('lastName')}
              />
              {touched.lastName && errors.lastName && (
                <div className="text-red-500 text-start mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
            {/* email */}
            <div className="w-full">
              <FormInput
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#48304d] text-white"
                {...getFieldProps('email')}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-start mt-1">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="w-full">
              <div className="flex">
                {/* Country Code Dropdown */}
                <Dropdown
                  options={[
                    { label: '+880', value: '+880' }, // Bangladesh
                    { label: '+1', value: '+1' }, // USA
                    { label: '+44', value: '+44' }, // UK
                  ]}
                  placeholder="Select Code"
                  value={values.countryCode} // Bind to formik value
                  onChange={(value) =>
                    formik.setFieldValue('countryCode', value)
                  } // Update formik state on change
                  className="bg-[#48304d] text-white rounded-l" // Dropdown styles
                />

                {/* Phone Number Input */}
                <FormInput
                  type="text"
                  placeholder="Phone Number"
                  className="bg-[#48304d] text-white rounded-r" // Phone input styles
                  {...getFieldProps('phoneNumber')}
                />
              </div>

              {/* Error Message */}
              {touched.phoneNumber && errors.phoneNumber && (
                <div className="text-red-500 text-start mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>

            <Dropdown
              options={[
                { label: 'Bangladeshi TK (BDT)', value: 'BDT' },
                { label: 'USD', value: 'USD' },
                { label: 'EUR', value: 'EUR' },
              ]}
              icon={<FaFlag className="text-green-500 mr-2" />}
              placeholder="Currency"
              value={values.currency} // Bind to formik value
              onChange={(value) => formik.setFieldValue('currency', value)} // Update formik state on change
            />
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Promocode (if you have)"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('promoCode')}
              />
            </div>
            {/* password */}
            <div className="w-full">
              <FormInput
                type="password"
                placeholder="Password"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('password')}
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-start mt-1">
                  {errors.password}
                </div>
              )}
            </div>
            {/* confirmPassword */}
            <div className="w-full">
              <FormInput
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-[#48304d] text-white"
                {...getFieldProps('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <div className="text-red-500 text-start mt-1">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Button
              type="submit"
              variant="solid"
              className="text-center w-full text-white rounded px-20 py-2 font-bold bg-[#9b00b8] flex items-center justify-center"
              size="lg"
              disabled={isSubmitting}
            >
              Send E-Mail
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default ByEmailForm
