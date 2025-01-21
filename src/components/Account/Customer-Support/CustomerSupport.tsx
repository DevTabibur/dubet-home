'use client'
import AccountCard from '@/components/ui/AccountCard/AccountCard'
import accountoption from '@/assets/demo/accountoption.png'
import CustomerSupportForm from '@/components/Forms/CustomerSupportForm'

const CustomerSupport = () => {
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
        <AccountCard
          title="Two-Factor Authentication"
          subtitle="Protect Your Account"
          imageUrl={accountoption}
          buttonText="Enable"
          onButtonClick={() => alert('Enable Clicked')}
        />
      </div>
      <CustomerSupportForm />
    </div>
  )
}

export default CustomerSupport
