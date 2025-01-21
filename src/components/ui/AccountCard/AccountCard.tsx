import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface AccountCardProps {
  title: string
  subtitle?: string
  imageUrl: StaticImageData
  buttonText?: string
  secondButtonText?: string
  onButtonClick: () => void
  onSecondButtonClick?: () => void
}

const AccountCard: React.FC<AccountCardProps> = ({
  title,
  subtitle,
  imageUrl,
  buttonText,
  secondButtonText,
  onButtonClick,
  onSecondButtonClick,
}) => {
  return (
    <div className="bg-[#2b1b38] text-white rounded-lg overflow-hidden shadow-lg flex flex-col w-full">
      <div className="p-4 text-left font-semibold text-sm">
        <h3 className="text-base">{title}</h3>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          src={imageUrl.src}
          alt="Card Image"
          className="w-full object-cover h-36"
        />
      </div>
      <div className="flex mt-auto">
        <button
          onClick={onButtonClick}
          className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-red-800 to-purple-500"
        >
          {buttonText}
        </button>
        {secondButtonText && onSecondButtonClick && (
          <button
            onClick={onSecondButtonClick}
            className="w-full py-3 text-center font-semibold text-white bg-[#290d2f]"
          >
            {secondButtonText}
          </button>
        )}
      </div>
    </div>
  )
}

export default AccountCard
