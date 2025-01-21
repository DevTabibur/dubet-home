import React from 'react'
import Image from 'next/image'
import { SocialMediaButtonsProps } from '@/interface/socialMediaButtons'

//!=====================================================================================================>>>
const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
  items,
  onClick,
}) => {
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-full p-2 cursor-pointer flex items-center justify-center bg-[#5d4761]"
          onClick={() => onClick(item.id)} // Handle click with dynamic id
        >
          <Image
            src={item.icon}
            height={15}
            width={15}
            alt={`${item.name} icon`}
          />
        </div>
      ))}
    </div>
  )
}

export default SocialMediaButtons
