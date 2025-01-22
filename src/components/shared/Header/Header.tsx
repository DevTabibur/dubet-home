'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import Container from '../Container/Container'
import HeaderTop from '../HeaderTop/HeaderTop'

import { menuConfig, moreMenuTablet } from '@/constants/header'
import { MenuItem } from '@/interface/header'

import { useState, useEffect, useCallback } from 'react'

import { useLanguage } from '@/context/LanguageContext'

const HeaderComponent = () => {
  const { t } = useLanguage()
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  // Handle menu toggle
  const handleMenuToggle = useCallback((key: string) => {
    setActiveMenu((prevActiveMenu) => (prevActiveMenu === key ? null : key))
  }, [])

  // Close menu when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       !document.getElementById(activeMenu)?.contains(event.target as Node)
  //     ) {
  //       setActiveMenu(null)
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [activeMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeMenu && // Ensure activeMenu is not null
        !document.getElementById(activeMenu)?.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);


  return (
    <>
      <HeaderTop />
      <div className="bg-[#341939] py-4 border-y border-white/10 md:block hidden">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <Link href="/">
              <h1 className="text-white text-3xl">DUBET</h1>
            </Link>

            <div>
              <ul className="flex items-end justify-end gap-14 md:gap-4">
                {menuConfig.map((menu: MenuItem) => {
                  const isMoreMenuTablet = moreMenuTablet.includes(menu.key)

                  return (
                    <Link
                      href={menu.path}
                      key={menu.key}
                      className={`relative flex items-center py-2 text-white ${isMoreMenuTablet ? 'hidden lg:flex' : 'flex'}`}
                      id={menu.key} // Unique ID for each menu item
                    >
                      <button
                        onClick={() => handleMenuToggle(menu.key)}
                        className="footer-link flex items-center gap-3"
                      >
                        <span className="ml-4 font-[400] text-sm">{t(menu.title)}</span>
                        {/* <Image
                          src={arrowDown.src}
                          alt="menu"
                          height={15}
                          width={15}
                        /> */}
                      </button>

                      {/* {menu.subMenu && activeMenu === menu.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full mt-2 left-0 right-0 bg-[#1e0024] rounded shadow-lg z-50 p-6 text-white w-[50rem]"
                        >
                          <div className="grid grid-cols-3 gap-4">
                            {menu.subMenu.map((subItem) => (
                              <div key={subItem.key} className="text-sm">
                                <h4 className="font-semibold mb-2">
                                  {t(subItem.title)}
                                </h4>
                                <ul>
                                  {subItem.items?.map((item: { key: Key | null | undefined; path: any; title: string }) => (
                                    <li
                                      key={item.key}
                                      className="py-1 hover:bg-[#786c7c] px-2 rounded"
                                    >
                                      <Link href={`${menu.path}${item.path}`}>
                                        {t(item.title)}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )} */}
                    </Link>
                  )
                })}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default HeaderComponent
