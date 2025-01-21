/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React, { useState } from 'react'

interface Tab {
  label: string
  content: React.ReactNode
  icon : any
}

interface TabsProps {
  tabs: Tab[]

}

//!=============================================================================================>>>
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex mb-8 gap-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-sm font-medium flex items-center gap-2 focus:outline-none space-x-4 transition-all mt-6 px-10 py-2 rounded text-white ${
              activeTab === index
                ? 'bg-[#C52EE1] border-none' // Adjusted margin for spacing
                : 'bg-[#48304d] border border-[#3d1246]'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* Render icon if it exists */}
            {tab.icon && (
              <Image
                src={tab?.icon?.src as any}
                alt="icon"
                width={15}
                height={15}
                className="mr-2"
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content */}
      <div className="w-full max-w-xl">
        {' '}
        {/* Added max-width for better layout */}
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs
