/* eslint-disable no-irregular-whitespace */

import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'
import { bonusesAndGiftsSchema } from '@/schemas/account/bonusesAndGiftsSchema'

const BonusesAndGiftsForm = () => {
  const formik = useFormik({
    initialValues: {
      promoCode: '',
    },
    validationSchema: bonusesAndGiftsSchema,
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
      <h2 className="text-white text-2xl mb-2">Bonuses and gifts</h2>
      <p className="text-white text-sm mb-2">
        The following bonuses and gifts are available to you. Don&rsquo;t forget
        to open them before they expire!
      </p>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="flex  justify-start space-x-4 py-9 max-w-xl">
            <div className="w-2/3">
              <FormInput
                type="text"
                placeholder="Enter Promo Code"
                {...getFieldProps('promoCode')}
              />
              {touched.promoCode && errors.promoCode && (
                <div className="text-red-500 text-start mt-1">
                  {errors.promoCode}
                </div>
              )}
            </div>
            <div className="w-1/3">
              <Button
                type="submit"
                className="text-center  text-white rounded px-20 py-2 font-bold bg-[#9b00b8] flex items-center justify-center"
                size="lg"
                disabled={isSubmitting}
              >
                Ok
              </Button>
            </div>
          </div>
          <div className="text-center">
            <div className="text-start">
              <h1 className="text-white text-2xl mb-2">Gifts</h1>
              <p className="text-white text-sm mb-8">
                The countdown starts from the moment a bonus is credited, not
                activated. Terms and Conditions
              </p>
            </div>
            <span className="text-center mx-auto text-[#a99eac]">
              Nothing found
            </span>
          </div>
        </Form>
      </FormikProvider>
    </div>
  )
}

export default BonusesAndGiftsForm
