'use client'
import AccountCard from '@/components/ui/AccountCard/AccountCard'
import React, { useState } from 'react'
import accountoption from '@/assets/demo/accountoption.png'
import { IoCloudDownloadOutline } from 'react-icons/io5'

const TransitionHistory = () => {
  const [activeTab, setActiveTab] = useState('main')

  return (
    <div>
      {' '}
      <div className="grid grid-cols-3 gap-5 mb-5">
        <AccountCard
          title="Top Up Your Account"
          subtitle="Deposit funds easily."
          imageUrl={accountoption}
          buttonText="Deposit"
          onButtonClick={() => alert('Deposit Clicked')}
        />
        <AccountCard
          title="Bonus Your Account"
          subtitle="The more you bet, the more bonuses you get!"
          imageUrl={accountoption}
          buttonText="Find out more"
          onButtonClick={() => alert('Find out more Clicked')}
        />
        <AccountCard
          title="Link Your Phone Number"
          subtitle="To withdraw your funds!"
          imageUrl={accountoption}
          buttonText="Enable"
          onButtonClick={() => alert('Enable Clicked')}
        />
        <AccountCard
          title="Two-Factor Authentication"
          subtitle="Protect Your Account"
          imageUrl={accountoption}
          buttonText="Enable"
          onButtonClick={() => alert('Enable Clicked')}
        />
        <AccountCard
          title="Call Back"
          subtitle="Speak to a consultant"
          imageUrl={accountoption}
          buttonText="Order"
          secondButtonText="History"
          onButtonClick={() => alert('Order Clicked')}
          onSecondButtonClick={() => alert('History Clicked')}
        />
      </div>
      <div className="border border-white/20 bg-[#290d2f] p-6 rounded-lg text-white">
        {/* Title */}
        <div className="text-left">
          <h2 className="text-xl font-semibold">Transaction history</h2>
          <p className="text-sm text-gray-400">
            Includes deposits, withdrawals and transfers of funds
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mt-4 space-x-2">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'main'
                ? 'bg-[#C52EE1] text-white'
                : 'bg-transparent border border-[#C52EE1] text-{#C52EE1}'
            }`}
            onClick={() => setActiveTab('main')}
          >
            Main Account
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === 'virtual'
                ? 'bg-[#C52EE1] text-white'
                : 'bg-transparent border border-[#C52EE1] text-[#C52EE1]'
            }`}
            onClick={() => setActiveTab('virtual')}
          >
            Virtual Account
          </button>
        </div>

        {/* Show Earlier */}
        <div className="mt-6 border border-dashed border-gray-400 rounded-md py-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2">
            <IoCloudDownloadOutline size={30} />
            <span>Show Earlier</span>
          </div>
        </div>

        {/* List Empty */}
        <div className="text-center text-gray-400 text-sm mt-4">List Empty</div>
      </div>
    </div>
  )
}

export default TransitionHistory
