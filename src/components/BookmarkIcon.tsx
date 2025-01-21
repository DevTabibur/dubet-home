'use client'
import { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

interface BookmarkIconProps {
  initialActive?: boolean
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({
  initialActive = false,
}) => {
  const [isActive, setIsActive] = useState(initialActive)

  const handleClick = () => {
    setIsActive(!isActive)
    // Optional: Trigger a callback or API call here to update backend on icon state change
  }

  return (
    <span
      className={`text-2xl cursor-pointer ${isActive ? 'text-yellow-500' : 'text-white'}`}
      onClick={handleClick}
    >
      {isActive ? <IoIosStar /> : <IoIosStarOutline />}
    </span>
  )
}

export default BookmarkIcon
