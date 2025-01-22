/* eslint-disable @next/next/no-img-element */
import React from 'react'
import group from '@/assets/demo/group.png'
import group2 from '@/assets/demo/group2.png'
const AffiliateProgram = () => {
  return (
    <div className="bg-[#290d2f] text-white rounded-lg p-8 shadow-lg">
      {/* Header Section */}
      <h2 className="text-2xl font-semibold mb-4">
        Become an affiliate and start earning
      </h2>
      <p className="text-gray-300 text-sm mb-4">
        Build a multi-level network by inviting your friends who in turn will
        refer their friends
      </p>
      <p className="text-gray-300 text-sm mb-8">
        Get commission at every level: your friend success will affect your
        earning - the more profit they bring, the more you earn too.
      </p>

      {/* Levels Section */}
      <div className="flex items-center w-full justify-between">
        <div className="max-w-2xl w-full items-center mb-8">
          <div className="flex justify-between ">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 bg-[#3b2b4b] rounded-full flex items-center justify-center text-2xl font-semibold text-white">
                  <img
                    src={group2?.src}
                    alt="Network illustration"
                    className=" object-cover"
                  />
                </div>
                <p className="mt-2 text-sm">Level {level}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 ">
            <label className="flex items-center text-gray-300 text-sm mb-2">
              <input type="checkbox" className="mr-2 w-4 h-4 text-purple-600" />
              I accept the terms and conditions
            </label>
            <button className="w-full bg-[#C52EE1] py-3 text-center font-semibold text-white rounded-lg">
              Take Part
            </button>
          </div>
        </div>

        {/* Network Illustration */}
        <div className="flex justify-between items-center">
          {/* Placeholder for Illustration */}
          <div className="flex justify-center">
            <img
              src={group?.src}
              alt="Network illustration"
              className="w-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliateProgram
