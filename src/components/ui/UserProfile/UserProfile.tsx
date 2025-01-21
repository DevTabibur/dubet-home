import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

interface UserProfileProps {
  name: string
  avatarUrl: StaticImageData
  balance: number
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatarUrl,
  balance,
}) => {
  return (
    <div className="bg-[#2b1b38] border border-white/20 text-white p-4 rounded-lg flex flex-col items-center">
      <div className="flex items-center gap-3 w-full pb-2 border-b border-[#3b2b4b]">
        <Image
          src={avatarUrl.src}
          alt={`${name} profile`}
          className="w-10 h-10 rounded-full"
          width={50}
          height={50}
        />
        <p className="font-semibold">{name}</p>
      </div>
      <div className="flex items-center gap-2 w-full pt-3">
        <FaDollarSign className="text-yellow-400 text-xl" />
        <p className="text-lg font-semibold">{balance.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default UserProfile
