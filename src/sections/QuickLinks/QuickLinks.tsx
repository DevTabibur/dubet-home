/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link' // Import Link
import { quickLinks } from '@/constants/quickLinks'
import { IQuicLinkProps } from '@/interface/quickLinks'
import Image from 'next/image'

const QuickLinks = () => {
  return (
    <>
      <div className="bg-[#341939] lg:rounded-2xl rounded-lg border border-white/10 my-4">
        <div className="border-b-[3px] lg:px-6 px-3  py-4 border-white/20">
          <h2 className="lg:text-4xl text-xl font-semibold text-white">
            Quick Links
          </h2>
        </div>
        <div>
          {quickLinks.map((ql: IQuicLinkProps, index: number) => {
            return (
              <Link key={ql.id} href={ql.href} passHref>
                <div
                  className="flex items-center lg:px-4 px-2 justify-start gap-4 py-5 cursor-pointer"
                  style={{
                    borderBottom:
                      index < quickLinks.length - 1
                        ? '1px solid #5d4761'
                        : 'none',
                  }}
                >
                  <div className="lg:p-3 p-1.5 group shadow shadow-purple-900 lg:rounded-xl rounded-md bg-[#5d4761]">
                    <Image
                      src={ql?.icon as any}
                      alt={`${ql.title} Icon`}
                      width={27}
                      height={27}
                      className="object-contain transition-all duration-500 group-hover:animate-bounce"
                    />
                  </div>
                  <span className="font-medium lg:text-[18px] text-[14px] text-white flex items-center ">
                    {ql.title}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default QuickLinks
