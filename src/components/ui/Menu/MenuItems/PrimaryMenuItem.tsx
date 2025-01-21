/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image'
import React, { ReactNode } from 'react'
import './PrimaryMenu.css'

interface PrimaryMenuItemProps {
  label: string
  icon: ReactNode // Accept an SVG or JSX element
}

const PrimaryMenuItem: React.FC<PrimaryMenuItemProps> = ({ label, icon }) => {
  return (
    <div className="max-w-md w-full mx-auto py-4">
      <button className="rounded-lg lg:px-5 p-2.5 lg:py-4 py-2 w-full shadow-lg bg-gradient-to-r from-[#592268] via-[#060108] to-black">
        <div className="flex items-center justify-start">
          <Image
            src={icon as any}
            alt={`${label} Icon`}
            width={25}
            height={25}
            className="mr-4"
          />
          <span className="font-medium lg:text-[16px] text-sm text-white">
            {label}
          </span>
        </div>
      </button>
    </div>
  )
}

export default PrimaryMenuItem
