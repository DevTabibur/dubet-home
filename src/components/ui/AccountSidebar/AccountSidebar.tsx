'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { accountSidebarItems } from '@/constants/accountSidebar/accountSidebar'
import { usePathname } from 'next/navigation'
import PrimaryModal from '../Modals/PrimaryModal'
import Button from '../Buttons'
import { useLanguage } from '@/context/LanguageContext'

const AccountSidebar = () => {
  const pathname = usePathname() // usePathname hook to get the current route
  const { t } = useLanguage()

  const [isModalOpen, setIsModalOpen] = useState(false) // State for controlling the modal
  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // logout func
  const handleLogout = () => {
    alert('Log out')
  }

  return (
    <>
      <nav className="border border-white/20 bg-[#290d2f] text-white rounded-lg">
        <h2 className="text-xl font-semibold p-3">Menu</h2>
        <ul className="divide-y divide-white/20 text-[#d5cfd6] w-full bg-[#290d2f] rounded-lg">
          {accountSidebarItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <li key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 py-3 px-4 ${isActive ? 'font-bold border-l-4 border-purple-500 bg-white/10' : ''} hover:border-l-4 hover:border-purple-500 hover:bg-white/10`}
                  >
                    <div className="w-52 mx-auto text-start flex items-center gap-3">
                      <Image
                        src={item.icon as string}
                        width={20}
                        height={20}
                        alt="icon"
                      />
                      <span className="flex-grow text-start">
                        {t(item.label)}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={openModal}
                    className="flex items-center gap-3 py-3 px-4 hover:border-l-4 border-purple-500 hover:bg-white/10 w-full text-left"
                  >
                    <div className="w-52 mx-auto text-start flex items-center gap-4">
                      <Image
                        src={item.icon as string}
                        width={20}
                        height={20}
                        alt="icon"
                      />
                      <span className="flex-grow text-start">
                        {t(item.label)}
                      </span>
                    </div>
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      <PrimaryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="max-w-xl "
      >
        <div className="text-white text-center mt-28">
          <h2 className="text-3xl font-bold mb-4">Log Out</h2>
          <p>Are you sure you want to log out?</p>
          <div className="flex items-center justify-evenly gap-8 mt-28">
            <Button
              type="button"
              className="bg-[#C52EE1] w-1/2 py-4 rounded-md flex justify-center text-center"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <Button
              type="button"
              className="border border-[#9a8c9d] w-1/2 py-4 rounded-md flex justify-center text-center"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </PrimaryModal>
    </>
  )
}

export default AccountSidebar
