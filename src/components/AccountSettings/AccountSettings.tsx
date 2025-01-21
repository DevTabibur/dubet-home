import React from 'react'
import bonus1 from '@/assets/demo/bonus1.png'
import ToggleSwitch from '../ui/ToggleSwitch/ToggleSwitch'

const AccountSettings: React.FC = () => {
  return (
    <div className="bg-[#290d2f] border border-white/10 text-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-semibold">Account Settings</h2>
      <p className="text-gray-400 mt-1">
        Fill in the empty fields to take advantage of the enhanced features of
        the website!
      </p>

      {/* Security Settings */}
      <div className="mt-8">
        <h3 className="text-lg font-medium">Security Settings</h3>
        <button className="mt-4 px-4 py-2 bg-[#C52EE1] rounded-md text-white font-semibold">
          Logout
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* Account Settings */}
        <div>
          <h3 className="text-lg font-medium mb-4">Account Settings</h3>
          {[
            'Show balance on top panel',
            'Disable betting Zone',
            'Email Login',
            'QR code login',
          ].map((setting, index) => (
            <div
              key={index}
              className="flex bg-white/20 rounded-md shadow-md p-2 items-center justify-between mb-4"
            >
              <span className="text-sm">{setting}</span>
              <ToggleSwitch />
            </div>
          ))}
        </div>

        {/* Mailing List */}
        <div>
          <h3 className="text-lg font-medium mb-4">Mailing List</h3>
          {[
            'News about events',
            'Deposit notifications',
            'My bet outcomes',
          ].map((setting, index) => (
            <div
              key={index}
              className="flex bg-white/20 rounded-md shadow-md p-2 items-center justify-between mb-4"
            >
              <span className="text-sm">{setting}</span>
              <ToggleSwitch />
            </div>
          ))}
        </div>
      </div>

      {/* Promo Points & Promo Code */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-4">
            Choose how promo points are created
          </h3>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="promoPoints"
                className="radio-checkbox"
              />
              Bonus Points for placed bets
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="promoPoints"
                className="radio-checkbox"
              />
              Bonus on your account balance
            </label>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-4">Promo Code Check</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your promo code"
              className="flex-grow px-3 py-2 bg-[#35204a] rounded-md border border-gray-500 focus:outline-none"
            />
            <button className="px-4 py-2 bg-[#C52EE1] rounded-md text-white font-semibold">
              Check
            </button>
            <button className="px-4 py-2 bg-[#7a4b98] rounded-md text-white font-semibold">
              History
            </button>
          </div>
        </div>
      </div>

      {/* Wallet & Bonus Offers */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Wallet */}
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-4">Your wallet</h3>
          <div className="flex gap-2">
            <select className="px-3 w-full py-2 bg-[#35204a] rounded-md border border-gray-500 focus:outline-none">
              <option>Euro</option>
              <option>USD</option>
            </select>
            <button className="px-4 w-40 py-2 bg-[#C52EE1] rounded-md text-white font-semibold">
              Add Wallet
            </button>
          </div>
        </div>

        {/* Bonus Offers */}
        <div className="flex-grow">
          <h3 className="text-lg font-medium mb-4">
            Participation in bonus offers
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Offer Cards */}
            {['Sports', 'Casino + Game', 'Reject Bonuses'].map(
              (offer, index) => (
                <div
                  key={index}
                  className="relative h-32 bg-[#35204a] rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={bonus1.src}
                    alt={offer}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-75 text-white text-center py-2">
                    {offer}
                  </div>
                </div>
              )
            )}
          </div>
          <p className="text-xs text-gray-400 mt-2">
            *Bettors are entitled to participate in the company other bonus
            offers...
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
