'use client'
import React, { useState } from 'react'
import PrimaryModal from '../Modals/PrimaryModal/PrimaryModal'
import FancyButton from '../Buttons/FancyButton/FancyButton'
import { ByEmailForm, ByPhoneForm, OnclickForm } from '@/components/Forms'
import { tabsClickIcon, tabsEnvelopeIcon, tabsPhoneIcon } from '@/assets/svg'
import Tabs from '../Tabs'

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

const BetSlip: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'slip' | 'bets'>('slip')
  const [isModalOpen, setIsModalOpen] = useState(false) // State for controlling the modal

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="w-full rounded-xl bg-[#302338] h-full shadow lg:p-5 p-2">
      {/* Tabs */}
      <div className="flex justify-around border-x border-t border-white/10  rounded-t-lg">
        <button
          onClick={() => setActiveTab('slip')}
          className={`w-full p-3 text-white text-center border-r border-gray-400/40 rounded-tl-lg bg-gradient-to-r from-fuchsia-900 to-fuchsia-950`}
        >
          My Slip
        </button>
        <button
          onClick={() => setActiveTab('bets')}
          className={`w-full p-3 text-white text-center rounded-tr-lg bg-gradient-to-l from-fuchsia-900 to-fuchsia-950`}
        >
          My Bets
        </button>
      </div>
      {/* Content Area */}
      <div className="bg-[#302338] border-x border-b flex items-center justify-center border-white/10 rounded-b-lg text-center py-2 xl:h-40 lg:h-28     px-2 text-white text-sm">
        {activeTab === 'slip' ? (
          <p>Add events to the bet slip or enter a code to load events</p>
        ) : (
          <p>No current bets. Add some bets to get started!</p>
        )}
      </div>

      {/* Registration Button */}
      <div className="mt-6">
        <FancyButton className="py-3" onClick={openModal}>
          Registration
        </FancyButton>
        <p className="text-center text-white text-sm mt-2">
          100% bonus on first deposit
        </p>
      </div>

      {/* Registration Modal */}
      <PrimaryModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Registration
        </h2>
        <Tabs tabs={registrationTabsData} />
      </PrimaryModal>
    </div>
  )
}

export default BetSlip
