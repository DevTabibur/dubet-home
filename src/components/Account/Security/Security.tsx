'use client'
import React from 'react'
import AccountCard from '@/components/ui/AccountCard/AccountCard'
import accountoption from '@/assets/demo/accountoption.png'
import ProfileProgressBar from '@/components/ui/ProfileProgressBar/ProfileProgressBar'
import ActionCard from '@/components/ui/ActionCard/ActionCard'
import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaQuestionCircle,
  FaShieldAlt,
} from 'react-icons/fa'
import RecentSessions from '@/components/RecentSessions/RecentSessions'

const Security = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 border-b pb-5 border-gray-100/20 mb-5">
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
      </div>
      <div className="text-white space-y-2">
        <h2 className="text-2xl ">Account Security</h2>
        <h2 className="text-sm text-gray-400 mb-5">
          To prevent fraud and keep your account secure,please complete all the
          following steps
        </h2>
        <ProfileProgressBar progress={40} />
        <div className="flex items-start gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActionCard
              icon={<FaLock />}
              title="Change Password"
              subtitle="Change your Password every 3 months"
              actionText="Enable"
              isActive={true}
              onAction={() => alert('Password Change Clicked')}
              onClose={() => alert('Close Clicked')}
            />
            <ActionCard
              icon={<FaPhone />}
              title="Link your phone"
              subtitle="This will enable you to restore access to your account"
              actionText="Enable"
              onAction={() => alert('Phone Link Clicked')}
              onClose={() => alert('Close Clicked')}
            />
            <ActionCard
              icon={<FaShieldAlt />}
              title="Two-factor authentication"
              subtitle="Protect your account from fraud in 2 days"
              actionText="Enable"
              onAction={() => alert('Two-Factor Authentication Clicked')}
              onClose={() => alert('Close Clicked')}
            />
            <ActionCard
              icon={<FaEnvelope />}
              title="Email Login Enabled"
              subtitle="This is the most insecure way to log in"
              actionText="Enable"
              onAction={() => alert('Email Login Clicked')}
              onClose={() => alert('Close Clicked')}
            />
            <ActionCard
              icon={<FaQuestionCircle />}
              title="Security question"
              subtitle="Enter an answer that only you know"
              actionText="Enable"
              onAction={() => alert('Security Question Clicked')}
              onClose={() => alert('Close Clicked')}
            />
          </div>
          <RecentSessions />
        </div>
      </div>
    </div>
  )
}

export default Security
