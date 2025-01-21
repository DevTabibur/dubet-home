import * as yup from 'yup'

export const bonusesAndGiftsSchema = yup.object().shape({
  promoCode: yup.string().required('Enter Your Promo Code Here!'),
})
