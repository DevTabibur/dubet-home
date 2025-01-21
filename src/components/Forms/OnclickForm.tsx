'use client'
import { onClickFormSchema } from '@/schemas/auth/authSchema'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, Dropdown, FormInput } from '../ui'
import { FaFlag } from 'react-icons/fa'

//!=========================================================================>>>
const OnclickForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      currency: 'Bangladeshi TK (BDT)',
      promoCode: '',
    },
    validationSchema: onClickFormSchema,

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
            {/* First Name Input */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="First Name"
                className="w-full bg-[#48304d] text-white"
                {...getFieldProps('firstName')}
              />
              {touched.firstName && errors.firstName && (
                <div className="text-red-500 text-start mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>

            {/* Last Name Input */}
            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#48304d] text-white"
                {...getFieldProps('lastName')}
              />
              {touched.lastName && errors.lastName && (
                <div className="text-red-500 text-start mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="w-full">
              <Dropdown
                options={[
                  { label: 'Bangladeshi TK (BDT)', value: 'BDT' },
                  { label: 'USD', value: 'USD' },
                  { label: 'EUR', value: 'EUR' },
                ]}
                icon={<FaFlag className="text-green-500 mr-2" />}
                placeholder="Select Currency"
                value={values.currency} // Bind to formik value
                onChange={(value) => formik.setFieldValue('currency', value)} // Update formik state on change
                defaultText="Bangladeshi TK (BDT)" // Set the default option text here
              />
              {touched.currency && errors.currency && (
                <div className="text-red-500 text-start mt-1">
                  {errors.currency}
                </div>
              )}
            </div>

            <div className="w-full">
              <FormInput
                type="text"
                placeholder="Promocode (if you have)"
                className="w-full bg-[#48304d] text-white "
                {...getFieldProps('promoCode')}
              />
              {touched.promoCode && errors.promoCode && (
                <div className="text-red-500 text-start mt-1">
                  {errors.promoCode}
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Button
              type="submit"
              variant="solid"
              className="text-center w-full text-white rounded px-20 py-2  font-bold bg-[#9b00b8] shadow-sm flex items-center justify-center"
              size="lg"
              disabled={isSubmitting}
            >
              Registration
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </>
  )
}

export default OnclickForm
