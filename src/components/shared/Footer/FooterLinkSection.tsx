/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { FooterLinkSectionProps } from '@/interface/footer'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => {
  const { t } = useLanguage()

  return (
    <div className="col-span-1">
      <h3 className="text-xl font-semibold my-4 text-white">{t(title)}</h3>
      <ul className="space-y-3 text-gray-300">
        {links.map((link: any) => {
          return (
            <li key={link.name} className="py-2">
              {link.isClicked ? (
                <Link
                  href={link.href}
                  className="footer-link flex items-center space-x-2"
                >
                  <MdKeyboardDoubleArrowRight className="text-lg" />
                  <span className="flex justify-between w-full">
                    <span>{t(link.name)}</span>
                  </span>
                </Link>
              ) : (
                <div className="footer-link flex items-center space-x-2 text-gray-300">
                  <MdKeyboardDoubleArrowRight className="text-lg" />
                  <div className="flex justify-between w-full">
                    <span
                      className={`${link.staticValue ? `w-[120px] lg:w-[130px]` : ``}`}
                    >
                      {t(link.name)}
                    </span>
                    {link.staticValue && (
                      <>
                        <span className="w-[10px]">:</span>
                        <span className="w-[70px]">{link.staticValue}</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterLinkSection
