import React, { ReactNode } from 'react'
import PrimaryMenuItem from '../Menu/MenuItems/PrimaryMenuItem'

interface MenuItem {
  label: string
  icon: ReactNode // Accept an SVG or JSX element
}

interface MenuItemSidebarProps {
  header: string
  menuItems: MenuItem[]
}

const MenuItemSidebar: React.FC<MenuItemSidebarProps> = ({
  header,
  menuItems,
}) => {
  return (
    <aside className="py-5">
      <h2 className="mb-10 text-white text-3xl font-semibold">
        {header}</h2>
      <section className=" lg:pt-6 glassy-class mt-4">
        <div className="lg:px-10 flex flex-col divide-y divide-white/10 items-center h-[40rem] overflow-auto scroll-container">
          {menuItems.map((item, index) => (
            <PrimaryMenuItem key={index} label={item.label} icon={item.icon} />
          ))}
        </div>
      </section>
    </aside>
  )
}

export default MenuItemSidebar
