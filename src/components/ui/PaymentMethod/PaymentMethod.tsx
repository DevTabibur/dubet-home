import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PaymentMethodProps {
  title: string
  paymentMethods: {
    id: number
    name: string
    logo: StaticImageData
  }[]
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  title,
  paymentMethods,
}) => {
  return (
    <div className="p-3 rounded-lg text-white border border-white/20">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 9 }).map((_, index) => {
          const method = paymentMethods[index % paymentMethods.length]
          return (
            <div
              key={index}
              className="rounded-lg flex flex-col border border-white/10"
            >
              <div className="flex py-3 items-center justify-center">
                <Image
                  width={40}
                  height={40}
                  className="w-20 h-12"
                  alt="method"
                  src={method.logo.src}
                />
              </div>
              <div className="text-sm text-center border-t w-full p-2 border-white/10">
                {method.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PaymentMethod
