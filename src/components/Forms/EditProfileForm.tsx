'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Form, FormikProvider, useFormik } from 'formik'
import { Button, FormInput } from '../ui'
import { profileSchema } from '@/schemas/account/profileSchema'
import { LockCircle } from '@/assets/svg'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'

const EditProfileForm = () => {
  const [isOpenGender, setIsOpenGender] = useState(false)
  const [isOpenDocument, setIsOpenDocument] = useState(false)

  const formik = useFormik({
    initialValues: {
      accountNumber: '2024 789574875124',
      newPassword: '',
      confirmPassword: '',
      registrationDate: '',
      phone: '',
      address: '',
      username: '',
      surname: '',
      dob: '',
      placeOfBirth: '',
      documentType: '',
      documentNumber: '',
      documentIssueDate: '',
      country: '',
      gender: '',
      phoneNumber: '',
      email: '',
    },
    validationSchema: profileSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Profile form values:', values)
      } catch (error) {
        console.error('Profile update error:', error)
        resetForm()
      }
    },
  })

  const {
    errors,
    touched,
    setFieldValue,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik
  return (
    <>
      <div className=" rounded-lg shadow-lg text-white">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Edit Profile</h2>
                <p className="text-sm text-gray-300">
                  Fill in the empty fields to take advantage of the enhanced
                  features of thw website!
                </p>
              </div>
            </div>
            <h2 className="text-white font-semibold mb-4 text-xl">
              Account Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[25rem] h-full overflow-y-auto scroll-container">
              {/* first col */}
              <div className="space-y-4">
                {/* account number */}
                <div>
                  <div className=" text-white flex items-center justify-start mb-2">
                    <span> Account Number</span>
                    <span className="ml-3">
                      <Image
                        src={LockCircle.src}
                        height={20}
                        width={20}
                        alt="lock"
                      />
                    </span>
                  </div>
                  <FormInput
                    type="text"
                    placeholder="Account Number"
                    disabled
                    {...getFieldProps('accountNumber')}
                  />
                  {touched.accountNumber && errors.accountNumber && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.accountNumber}
                    </div>
                  )}
                </div>

                {/* newPassword */}
                <div>
                  <span className=" text-white">New Password</span>
                  <FormInput
                    type="password"
                    placeholder="New Password"
                    {...getFieldProps('newPassword')}
                  />
                  {touched.newPassword && errors.newPassword && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.newPassword}
                    </div>
                  )}
                </div>
                {/* confirmPassword */}
                <div>
                  <span className=" text-white">Confirm Password</span>
                  <FormInput
                    type="password"
                    placeholder="Confirm Password"
                    {...getFieldProps('confirmPassword')}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                {/* registrationDate */}

                <div>
                  <div className=" text-white flex items-center justify-start mb-2">
                    <span className="">Registration Date</span>
                    <span className="ml-3">
                      <Image
                        src={LockCircle.src}
                        height={20}
                        width={20}
                        alt="lock"
                      />
                    </span>
                  </div>
                  <FormInput
                    type="date"
                    placeholder="Registration Date"
                    disabled
                    {...getFieldProps('registrationDate')}
                  />
                  {touched.registrationDate && errors.registrationDate && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.registrationDate}
                    </div>
                  )}
                </div>

                {/* contact details */}
                <h2 className="text-white font-semibold text-xl mt-6 mb-4">
                  Contact Details
                </h2>

                {/* phoneNumber */}
                <div>
                  <span className=" text-white">Phone</span>
                  <FormInput
                    type="text"
                    placeholder="Phone"
                    // disabled // Static
                    {...getFieldProps('phoneNumber')}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>

                {/* email */}
                <div>
                  <span className=" text-white">Email</span>
                  <FormInput
                    type="email"
                    placeholder="Email"
                    // disabled // Static
                    {...getFieldProps('email')}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* address */}
                <div>
                  <span className=" text-white">Address</span>
                  <FormInput
                    type="text"
                    placeholder="Address"
                    // disabled // Static
                    {...getFieldProps('address')}
                  />
                  {touched.address && errors.address && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>

              {/* 2nd col */}
              <div className="space-y-4">
                {/* username */}
                <div>
                  <span className=" text-white">User Name</span>
                  <FormInput
                    type="text"
                    placeholder="Username"
                    {...getFieldProps('username')}
                    className="mt-1.5"
                  />
                  {touched.username && errors.username && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.username}
                    </div>
                  )}
                </div>
                {/* surname */}
                <div>
                  <span className=" text-white">Surame</span>
                  <FormInput
                    type="text"
                    placeholder="Surname"
                    {...getFieldProps('surname')}
                  />
                  {touched.surname && errors.surname && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.surname}
                    </div>
                  )}
                </div>
                {/* dob */}
                <div>
                  <span className=" text-white">Date of Birth</span>
                  <FormInput
                    type="date"
                    placeholder="Date of Birth"
                    {...getFieldProps('dob')}
                  />
                  {touched.dob && errors.dob && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.dob}
                    </div>
                  )}
                </div>

                {/* placeOfBirth */}
                <div>
                  <span className=" text-white">Place of Birth</span>
                  <FormInput
                    type="text"
                    placeholder="Place  of Birth"
                    {...getFieldProps('placeOfBirth')}
                  />
                  {touched.placeOfBirth && errors.placeOfBirth && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.placeOfBirth}
                    </div>
                  )}
                </div>

                {/* documentType */}
                <div className="relative w-full">
                  <span className="text-white">Type of Document</span>
                  <div
                    className="relative w-full p-2.5 bg-[#5d4761] cursor-pointer rounded-md text-white flex items-center justify-between"
                    onClick={() => setIsOpenDocument(!isOpenDocument)}
                  >
                    {/* Display selected document type or default text */}
                    <span className="ml-2 text-[#9ca3af]">
                      {values.documentType || 'Select Document Type'}
                    </span>
                    <IoIosArrowDropdown className="text-xl text-[#9ca3af]" />
                  </div>

                  {/* Animated Dropdown Menu */}
                  <AnimatePresence>
                    {isOpenDocument && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full bg-[#5d4761] shadow-2xl rounded-md mt-2 p-2 z-10"
                      >
                        <ul className="text-white">
                          {[
                            'Passport',
                            "Driver's License",
                            'National ID',
                            'Other',
                          ].map((type) => (
                            <li
                              key={type}
                              onClick={() => {
                                setFieldValue('documentType', type)
                                setIsOpenDocument(false) // Close dropdown after selection
                              }}
                              className="p-2 hover:bg-gray-700 cursor-pointer rounded-md"
                            >
                              {type}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error message */}
                  {touched.documentType && errors.documentType && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.documentType}
                    </div>
                  )}
                </div>

                {/* documentNumber */}
                <div>
                  <span className=" text-white">Document Number</span>
                  <FormInput
                    type="text"
                    placeholder="Document Number"
                    {...getFieldProps('documentNumber')}
                  />
                  {touched.documentNumber && errors.documentNumber && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.documentNumber}
                    </div>
                  )}
                </div>
                {/* documentIssueDate */}
                <div>
                  <div className=" text-white flex items-center justify-start mb-2">
                    <span> Document Issue Date</span>
                    <span className="ml-3">
                      <Image
                        src={LockCircle.src}
                        height={20}
                        width={20}
                        alt="lock"
                      />
                    </span>
                  </div>
                  <FormInput
                    type="date"
                    placeholder="Issue Date"
                    disabled
                    {...getFieldProps('documentIssueDate')}
                  />
                  {touched.documentIssueDate && errors.documentIssueDate && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.documentIssueDate}
                    </div>
                  )}
                </div>
                {/* country */}
                <div>
                  <span className=" text-white">Country</span>
                  <FormInput
                    type="text"
                    placeholder="Country"
                    {...getFieldProps('country')}
                  />
                  {touched.country && errors.country && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.country}
                    </div>
                  )}
                </div>

                {/* gender */}
                <div className="relative w-full">
                  <span className="text-white">Gender</span>
                  <div
                    className="relative w-full p-2.5 bg-[#5d4761] cursor-pointer rounded-md text-white flex items-center justify-between"
                    onClick={() => setIsOpenGender(!isOpenGender)}
                  >
                    {/* Display selected document type or default text */}
                    <span className="ml-2 text-[#9ca3af]">
                      {values.gender || 'Select Gender'}
                    </span>
                    <IoIosArrowDropdown className="text-xl text-[#9ca3af]" />
                  </div>

                  {/* Animated Dropdown Menu */}
                  <AnimatePresence>
                    {isOpenGender && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full bg-[#5d4761] shadow-2xl rounded-md mt-2 p-2 z-10"
                      >
                        <ul className="text-white">
                          {['Male', 'Female', 'Other'].map((type) => (
                            <li
                              key={type}
                              onClick={() => {
                                setFieldValue('gender', type)
                                setIsOpenGender(false) // Close dropdown after selection
                              }}
                              className="p-2 hover:bg-gray-700 cursor-pointer rounded-md"
                            >
                              {type}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error message */}
                  {touched.gender && errors.gender && (
                    <div className="text-red-500 text-start mt-1">
                      {errors.gender}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                className="text-center w-full text-white rounded px-20 py-2 font-bold bg-[#9b00b8] flex items-center justify-center"
                size="lg"
                disabled={isSubmitting}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </>
  )
}

export default EditProfileForm
