'use client'
import { Button } from '../ui'
import cricketBatBall from '@/assets/demo/cricket-1.png'
import football from '@/assets/demo/football-1.png'
import basketball from '@/assets/demo/basketball-1.png'
import golf from '@/assets/demo/golfing-1.png'
import shuttleCock from '@/assets/demo/shuttlecock-1.png'
import { fire } from '@/assets/svg'
import { useState } from 'react'

interface IEventMenus {
  id: string
  label: string
  icon?: React.ReactNode
}

const menus: IEventMenus[] = [
  { id: '1', label: 'Top', icon: fire.src },
  { id: '2', label: 'Cricket', icon: cricketBatBall.src },
  { id: '3', label: 'Football', icon: football.src },
  { id: '4', label: 'Basketball', icon: basketball.src },
  { id: '5', label: 'Badminton', icon: shuttleCock.src },
  { id: '6', label: 'Golf', icon: golf.src },
  { id: '7', label: 'More', icon: '' },
]

const EventMenuButtons = () => {
  const [activeButton, setActiveButton] = useState('1') // Default to first button
  return (
    <div className="md:flex items-center justify-evenly  space-x-2 space-y-2 md:space-y-0 md:space-x-2 xl:space-x-5">
      {menus.map((menu: IEventMenus) => (
        <Button
          key={menu.id}
          icon={menu.icon}
          onClick={() => setActiveButton(menu.id)}
          className={`rounded-lg text-[12px] md:text-[14px] lg:[text-20px] xl:text-[18px] text-white px-3 py-2 
            ${activeButton === menu.id ? 'bg-[#c52ee1]' : 'bg-[#422948]'}`}
        >
          {menu.label}
        </Button>
      ))}
    </div>
  )
}

export default EventMenuButtons
