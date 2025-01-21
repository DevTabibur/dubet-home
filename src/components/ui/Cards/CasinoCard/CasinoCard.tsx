import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Badge from '../../Badge/Badge'
import BookmarkIcon from '@/components/BookmarkIcon'

interface BadgeProps {
  title: string
  color: string
}

interface GameCardProps {
  imageSrc: StaticImageData
  title?: string
  width?: number
  height?: number
  badges?: BadgeProps[] // Array of badges
}

const CasinoCard: React.FC<GameCardProps> = ({
  imageSrc,
  width = 400,
  height = 400,
  badges = [], // Default to an empty array
  title,
}) => {
  return (
    <div className="border-[1px] border-gray-600/40 relative text-white rounded-primary bg-[#341939]">
      <div>
        <Image
          src={imageSrc}
          alt="game image"
          width={width}
          height={height}
          className="rounded-primary w-full object-cover h-64"
        />
      </div>
      <div className="absolute right-0 top-0 flex flex-col gap-2 ">
        {badges.map((badge, index) => (
          <Badge key={index} title={badge.title} color={badge.color} />
        ))}
      </div>
      {title && (
        <div className="flex items-center justify-between p-3 ">
          <h1 className="text-white text-[20px] font-[400]">{title}</h1>

          <BookmarkIcon />
        </div>
      )}
    </div>
  )
}

export default CasinoCard
