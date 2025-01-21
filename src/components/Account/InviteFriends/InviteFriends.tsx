'use client'
import React from 'react'
import AffiliateProgram from '../AffiliateProgram/AffiliateProgram'
import AccountCard from '@/components/ui/AccountCard/AccountCard'
import accountoption from '@/assets/demo/accountoption.png'

export const InviteFriends = () => {
  return (
    <div>
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
      <AffiliateProgram />
    </div>
  )
}
