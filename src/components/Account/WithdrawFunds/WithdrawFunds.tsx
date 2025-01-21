'use client'
import PaymentSidebar from '@/components/PaymentSidebar/PaymentSidebar'
import { useState } from 'react'
import { Button } from '@/components/ui'
import Content from '../Deposite/Content/Content.'

const WithdrawFunds = () => {
  const [activeSection, setActiveSection] = useState<
    | 'all-methods'
    | 'e-wallets'
    | 'payment-system'
    | 'internet-banking'
    | 'recommended-methods'
    | 'bank-transfer'
    | 'crypto-currency'
    | 'e-vouchers'
    | 'e-currency-exchangers'
  >('all-methods')

  return (
    <div>
      <div className="border border-white/20 rounded-lg p-5 shadow-lg bg-gray-500/10">
        <div className="text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Account 1016253835</h2>
              <p className="text-lg">
                Select payment method to top up your account:
              </p>
            </div>
            <div>
              <Button
                type="button"
                className="bg-[#C52EE1] rounded-md px-8 py-3"
              >
                Withdraw Request
              </Button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-4">
            Payment systems in your region
          </h3>
          <div className="bg-orange-700/20 rounded-lg text-white items-center border border-white/20 flex space-x-4 mb-10">
            <div className="p-5 h-full border-white/10 ">
              <div className="bg-yellow-500 text-black w-10 h-10 flex items-center justify-center rounded-full">
                <span className="text-xl font-bold">!</span>
              </div>
            </div>
            <div className="p-5 h-full">
              <p className="text-xs leading-relaxed">
                <span className="block  text-left">
                  আপনি যদি ৩ ঘন্টার মধ্যে আপনার সেলফ অ্যাকাউন্টে ডিপোজিটের টাকা
                  না পান তাহলে অনুগ্রহ করে নেনদেরের প্রধান সহ আমাদের সাধারন
                  ইমেইল অ্যাড্রেস{' '}
                  <span className="italic">(Company Domain)</span> এ যোগাযোগ
                  করুন পরবর্তী বিবরনে জমা করে লিখুন আপনার Player id, Transaction
                  ID, Client no, Agent number, Time, date, Amount, এবং স্ক্রিন
                  /স্ক্রিনশট/স্ক্রীনশট অ্যাপ থেকে নেনেরের কনফার্মেশন রিপোর্ট।
                </span>
                <span className="block text-left mt-2">
                  If you do not receive the deposit amount in your gaming
                  account within 3 hours please contact our general queries
                  email transaction-bn@1xbet-team.com with next details: Player
                  id, Transaction ID, Client no, Agent number, Time, Date,
                  Amount, Transaction Screenshot from app.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#290d2f] flex items-start gap-4 text-white ">
          <PaymentSidebar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
          <Content activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

export default WithdrawFunds
