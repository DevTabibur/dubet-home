'use client'
// src/components/Content.tsx
import PaymentMethod from '@/components/ui/PaymentMethod/PaymentMethod'
import React from 'react'
import bkash from '@/assets/payment/bkash.svg'
import nagad from '@/assets/payment/nagad.svg'
import icash from '@/assets/payment/bkash.svg'

interface ContentProps {
  activeSection:
    | 'all-methods'
    | 'e-wallets'
    | 'payment-system'
    | 'internet-banking'
    | 'recommended-methods'
    | 'bank-transfer'
    | 'crypto-currency'
    | 'e-vouchers'
    | 'e-currency-exchangers'
}

// Define payment methods data
const recommendedMethods = [
  { id: 1, name: 'Bkash', logo: bkash },
  { id: 2, name: 'Nagad', logo: nagad },
  { id: 3, name: 'iCash', logo: icash },
]

const eWallets = [
  { id: 1, name: 'Bkash', logo: bkash },
  { id: 2, name: 'Nagad', logo: nagad },
  { id: 3, name: 'iCash', logo: icash },
]

const paymentSystem = [
  { id: 1, name: 'Bkash', logo: bkash },
  { id: 2, name: 'Nagad', logo: nagad },
  { id: 3, name: 'iCash', logo: icash },
]

const internetBanking = [
  { id: 1, name: 'Bkash', logo: bkash },
  { id: 2, name: 'Nagad', logo: nagad },
  { id: 3, name: 'iCash', logo: icash },
]

const Content: React.FC<ContentProps> = ({ activeSection }) => {
  const contentData: {
    [key in ContentProps['activeSection']]: React.JSX.Element
  } = {
    'all-methods': (
      <div className="space-y-6">
        <PaymentMethod
          title="Recommended Methods"
          paymentMethods={recommendedMethods}
        />
        <PaymentMethod title="E-Wallets" paymentMethods={eWallets} />
        <PaymentMethod title="Payment System" paymentMethods={paymentSystem} />
        <PaymentMethod
          title="Internet Banking"
          paymentMethods={internetBanking}
        />
      </div>
    ),
    'e-wallets': (
      <div className="space-y-6">
        <PaymentMethod title="E-Wallets" paymentMethods={eWallets} />
      </div>
    ),
    'recommended-methods': (
      <div className="space-y-6">
        <PaymentMethod
          title="Recommended Methods"
          paymentMethods={recommendedMethods}
        />
      </div>
    ),
    'payment-system': (
      <div className="space-y-6">
        <PaymentMethod title="Payment System" paymentMethods={paymentSystem} />
      </div>
    ),
    'internet-banking': (
      <div className="space-y-6">
        <PaymentMethod
          title="Internet Banking"
          paymentMethods={internetBanking}
        />
      </div>
    ),
    'e-currency-exchangers': (
      <div className="space-y-6">
        <PaymentMethod
          title="E-Currency Exchangers"
          paymentMethods={internetBanking}
        />
      </div>
    ),
    'bank-transfer': (
      <div className="space-y-6">
        <PaymentMethod title="Bank Transfer" paymentMethods={internetBanking} />
      </div>
    ),
    'crypto-currency': (
      <div className="space-y-6">
        <PaymentMethod
          title="Crypto Currency"
          paymentMethods={internetBanking}
        />
      </div>
    ),
    'e-vouchers': (
      <div className="space-y-6">
        <PaymentMethod title="E-Vouchers" paymentMethods={internetBanking} />
      </div>
    ),
  }

  return (
    <div className="bg-gray-600/10 rounded-md border border-white/20 w-[75%] p-6 text-white">
      {contentData[activeSection]}
    </div>
  )
}

export default Content
