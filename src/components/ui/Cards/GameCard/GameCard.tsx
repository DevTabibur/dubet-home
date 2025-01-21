import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface GameCardProps {
  imageSrc: StaticImageData
  title: string
  width?: number
  height?: number
}

const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  title,
  width = 400,
  height = 400,
}) => {
  return (
    <div className="glassy-class border-[1px] border-gray-600/40 text-white rounded-primary">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={width}
          height={height}
          className="rounded-primary w-full h-56"
        />
      </div>
    </div>
  )
}

export default GameCard
