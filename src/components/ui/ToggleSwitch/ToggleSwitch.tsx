'use client'
import React, { useState } from 'react'

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-[#C52EE1]' : 'bg-gray-400'
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
          isOn ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  )
}

export default ToggleSwitch
