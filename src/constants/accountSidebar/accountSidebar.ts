import { ReactNode } from 'react'

import {
  profileCircle,
  lockCircle,
  accountSetting,
  walltet,
  withdrawFunds,
  history,
  transactionHistory,
  bonusesAndGifts,
  customerSupport,
  logout,
} from '@/assets/svg'

interface NavItem {
  label: string
  icon: ReactNode
  href?: string
  onClick?: () => void
}

export const accountSidebarItems: NavItem[] = [
  {
    label: 'accountSidebar.personalProfile',
    href: '/account/personal-profile',
    icon: profileCircle,
  },
  {
    label: 'accountSidebar.security',
    href: '/account/security',
    icon: lockCircle,
  },
  {
    label: 'accountSidebar.accountSettings',
    href: '/account/account-settings',
    icon: accountSetting,
  },
  { label: 'accountSidebar.deposit', href: '/account/deposit', icon: walltet },
  {
    label: 'accountSidebar.withdrawFunds',
    href: '/account/withdraw-funds',
    icon: withdrawFunds,
  },
  {
    label: 'accountSidebar.betHistory',
    href: '/account/bet-history',
    icon: history,
  },
  {
    label: 'accountSidebar.transactionHistory',
    href: '/account/transaction-history',
    icon: transactionHistory,
  },
  {
    label: 'accountSidebar.bonusesAndGifts',
    href: '/account/bonuses-gifts',
    icon: bonusesAndGifts,
  },
  {
    label: 'accountSidebar.customerSupport',
    href: '/account/customer-support',
    icon: customerSupport,
  },
  {
    label: 'accountSidebar.logOut',
    icon: logout,
    onClick: () => alert('Logging out...'),
  },
]
