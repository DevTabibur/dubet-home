import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
interface SidebarMenuProps {
  items: {
    icon: StaticImageData
    href: string
  }[]
}

const StickyNavigator: React.FC<SidebarMenuProps> = ({ items }) => {
  return (
    <div className="md:hidden block flex drop-shadow-lg shadow-gray-500/60 flex-col fixed right-0 z-40 top-[50%] items-center space-y-4 py-5 px-3 bg-[#341939] rounded-full border border-white/10 shadow-lg">
      {items.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="p-1 flex items-center justify-center bg-white/30 hover:bg-purple-700 transition-all rounded shadow-md"
        >
          <Image src={item?.icon} alt="image icon" width={17} height={17} />
        </Link>
      ))}
    </div>
  )
}

export default StickyNavigator
