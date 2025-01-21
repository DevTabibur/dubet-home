/* eslint-disable no-irregular-whitespace */

import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'
import { customerSupportSchema } from '@/schemas/account/customerSupportSchema'

const CustomerSupportForm = () => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: customerSupportSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Profile form Bonues :', values)
      } catch (error) {
        console.error('Profile Bonuses error:', error)
        resetForm()
      }
    },
  })

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
      <h2 className="text-white text-2xl mb-2">Question for Administrator</h2>
      <p className="text-white text-sm mb-2">
        Type your query. The administrator will respond as soon as possible. The
        reply will be sent to your email.
      </p>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="space-y-4 mt-10">
            <FormInput
              isTextArea
              rows={4}
              cols={50}
              placeholder="Enter your message here"
              {...getFieldProps('message')}
            />

            {touched.message && errors.message && (
              <div className="text-red-500 text-start mt-1">
                {errors.message}
              </div>
            )}
            <Button
              type="submit"
              className="text-center  text-white rounded px-20 py-2 font-bold bg-[#9b00b8] flex items-center justify-center"
              size="lg"
              disabled={isSubmitting}
            >
              Send message
            </Button>
          </div>
        </Form>
      </FormikProvider>
    </div>
  )
}

export default CustomerSupportForm
