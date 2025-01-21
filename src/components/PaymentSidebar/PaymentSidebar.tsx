/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLanguage } from '@/context/LanguageContext'
import React from 'react'

interface SidebarProps {
  setActiveSection: (
    section:
      | 'all-methods'
      | 'e-wallets'
      | 'payment-system'
      | 'internet-banking'
      | 'recommended-methods'
      | 'bank-transfer'
      | 'crypto-currency'
      | 'e-vouchers'
      | 'e-currency-exchangers'
  ) => void
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
const PaymentSidebar: React.FC<SidebarProps> = ({
  setActiveSection,
  activeSection,
}) => {
  const menuItems = [
    {
      id: 'recommended-methods',
      label: 'paymentSidebar.recommended-methods',
      count: 24,
    },
    { id: 'all-methods', label: 'paymentSidebar.all-methods', count: 115 },
    { id: 'e-wallets', label: 'paymentSidebar.e-wallets', count: 27 },
    { id: 'payment-system', label: 'paymentSidebar.payment-system', count: 2 },
    {
      id: 'e-currency-exchangers',
      label: 'paymentSidebar.e-currency-exchangers',
      count: 10,
    },
    {
      id: 'internet-banking',
      label: 'paymentSidebar.internet-banking',
      count: 1,
    },
    { id: 'bank-transfer', label: 'paymentSidebar.bank-transfer', count: 1 },
    {
      id: 'crypto-currency',
      label: 'paymentSidebar.crypto-currency',
      count: 49,
    },
    { id: 'e-vouchers', label: 'paymentSidebar.e-vouchers', count: 1 },
  ]
  const { t } = useLanguage()

  return (
    <div className="bg-gray-600/10 rounded-md border border-white/20 text-white w-[25%]">
      <ul>
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActiveSection(item.id as any)}
              className={`cursor-pointer flex justify-between px-3 py-3 gap-2 border-b border-white/10 
              ${item.id === activeSection ? 'bg-[#C52EE1]' : 'hover:bg-[#C52EE1]'} 
              transition`}
            >
              <span>{t(item.label)}</span>
              <span className="text-sm font-medium">{item.count}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PaymentSidebar
