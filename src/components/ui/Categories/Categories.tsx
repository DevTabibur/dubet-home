import React from 'react'
import cricketGame from '@/assets/hero/cricket.gif'
import footballGame from '@/assets/hero/football.gif'
import basketball from '@/assets/hero/basketball.gif'
import Image from 'next/image'

const Categories = () => {
  // Array of image data
  const imageData = [
    {
      src: cricketGame,
      alt: 'Cricket Game',
    },
    {
      src: basketball,
      alt: 'Basketball Game',
    },
    {
      src: footballGame,
      alt: 'Football Game',
    },
    {
      src: cricketGame,
      alt: 'Cricket Game',
    },
    {
      src: basketball,
      alt: 'Basketball Game',
    },
    {
      src: footballGame,
      alt: 'Football Game',
    },
  ]

  return (
    <div className="flex items-center justify-between my-10">
      <div className="grid grid-cols-3 gap-6">
        {imageData.slice(0, 3).map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            quality={100}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {imageData.slice(3).map((image, index) => (
          <Image
            key={index + 3} // Ensure unique keys
            src={image.src}
            alt={image.alt}
            width={100}
            height={100}
            quality={100}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
