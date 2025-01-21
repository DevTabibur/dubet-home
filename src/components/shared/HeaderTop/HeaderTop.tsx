'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from '../Container/Container'
import HeaderTopDynamicLinkWithText from '@/components/HeaderTopDynamicLinkWithText'
import { HeaderTopMenuLink } from '@/constants/headerTop'
import { tabsClickIcon, tabsEnvelopeIcon, tabsPhoneIcon } from '@/assets/svg'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import FancyButton from '@/components/ui/Buttons/FancyButton/FancyButton'
import React, { useState } from 'react'
import { PrimaryModal, Tabs } from '@/components/ui'
import {
  ByEmailForm,
  ByPhoneForm,
  ConfirmationCode,
  LoginForm,
  OnclickForm,
  SmsForm,
} from '@/components/Forms'
import NavigationMenu from '@/components/ui/Sidebars/NavigationMenu/NavigationMenu'
import SearchBar from '@/components/ui/SearchBar/SearchBar'

//** LOGIN TABS DATA */
const loginTabsData = [
  {
    label: 'E-mail login',
    content: <LoginForm />,
    icon: tabsPhoneIcon,

  },
  {
    label: 'Sms login',
    content: <SmsForm />,
    icon: tabsPhoneIcon,
  },
]

//** REGISTRATION TABS DATA */
const registrationTabsData = [
  {
    label: 'On Click',
    content: <OnclickForm />,
    icon: tabsClickIcon,
  },
  {
    label: 'By Phone',
    content: <ByPhoneForm />,
    icon: tabsPhoneIcon,
  },
  {
    label: 'By e-mail',
    content: <ByEmailForm />,
    icon: tabsEnvelopeIcon,
  },
]

//** CONFIRMATION TABS DATA */
const confirmationTabsData = [
  {
    label: 'On Click',
    content: <ConfirmationCode />,
    icon: tabsClickIcon,
  },
  {
    label: 'By Phone',
    content: <ConfirmationCode />,
    icon: tabsPhoneIcon,
  },
  {
    label: 'By e-mail',
    content: <ConfirmationCode />,
    icon: tabsEnvelopeIcon,
  },
]

const HeaderTop: React.FC = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
  // const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
  useState(false)

  // Open/Close functions for Registration Modal
  const openRegistrationModal = () => setIsRegistrationModalOpen(true)
  const closeRegistrationModal = () => setIsRegistrationModalOpen(false)

  // Open/Close functions for Login Modal
  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  // Open/Close functions for Confirmation Modal
  // const openConfirmationModal = () => setIsConfirmationModalOpen(true)
  const closeConfirmationModal = () => setIsConfirmationModalOpen(false)

  // open / close functions for forget-password
  // const openForgetPasswordModal = () => setIsForgetPasswordModalOpen(true)
  // const closeForgetPasswordModal = () => setIsForgetPasswordModalOpen(false)

  // Handle Registration Submit - close registration and open confirmation modal
  // const handleRegistrationSubmit = () => {
  //   closeRegistrationModal();
  //   openConfirmationModal();
  // };

  return (
    <>
      <header className="bg-[#1a0721] py-4">
        <Container>
          <h1 className="md:hidden block  text-2xl font-bold text-white">
            DUBET
          </h1>
          <div className=" md:flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center justify-center gap-5 text-gray-300">
              {HeaderTopMenuLink.map((menu, index) => {
                return (
                  <div
                    key={menu.id}
                    className={`group flex items-center ${index >= 2 ? 'hidden 2xl:flex' : 'flex'}`}
                  >
                    {index !== 0 && (
                      <div className="flex group-hover:bg-white bg-white/20 transition-all duration-500 items-center h-2 w-2 rounded-full mr-5" />
                    )}
                    <HeaderTopDynamicLinkWithText menu={menu} />
                  </div>
                )
              })}
            </div>
            <SearchBar />
            {/* Right Section */}
            <div className="md:flex hidden items-center gap-5">
              {/* Login Button */}
              <FancyButton
                isSmock={false}
                className="bg-gradient-to-br from-[black] via-[black] to-[black]"
                onClick={openLoginModal}
              >
                Login
              </FancyButton>

              {/* Registration Button */}
              <FancyButton onClick={openRegistrationModal}>
                Registration
              </FancyButton>

              {/* Country Selector */}
              <div className="hidden lg:flex">
                <LanguageSwitcher />
              </div>
              {/* Navigation / Hamburger Menu */}
              <div className="md:hidden">
                <NavigationMenu />
              </div>
            </div>
            <div className="md:hidden block ">
              <NavigationMenu />
            </div>
          </div>
        </Container>

        {/* Registration Modal */}
        <PrimaryModal
          isOpen={isRegistrationModalOpen}
          onClose={closeRegistrationModal}
          isRegister={true}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Registration
          </h2>
          <Tabs tabs={registrationTabsData} />
        </PrimaryModal>

        {/* Login Modal */}
        <PrimaryModal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Login
          </h2>
          <Tabs tabs={loginTabsData} />
          {/* You can add login form or content here */}
        </PrimaryModal>

        {/* Confirmation Modal */}
        <PrimaryModal
          isOpen={isConfirmationModalOpen}
          onClose={closeConfirmationModal}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Confirmation
          </h2>
          <Tabs tabs={confirmationTabsData} />
        </PrimaryModal>

        {/* Forget password Modal */}
        {/* <PrimaryModal
          isOpen={isForgetPasswordModalOpen}
          onClose={closeForgetPasswordModal}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            Forget Password?
          </h2>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-xl my-5">
              <ForgetPasswordForm />
            </div>
          </div>
        </PrimaryModal> */}
      </header>
    </>
  )
}

export default HeaderTop
