import React, { ReactNode } from 'react'
import './style.css'
import cn from '@/utils/cn'

// Define the props type for SpaceButton
interface SpaceButtonProps {
  children?: ReactNode // Optional children prop to allow dynamic content inside the button
  className?: string
}

const SpaceButton: React.FC<SpaceButtonProps> = ({ children, className }) => {
  return (
    <button
      type="button"
      className={cn('space-btn w-36 w-full py-1.5 rounded-full', className)}
    >
      <strong>{children}</strong>
      <div id="space-container-stars">
        <div id="space-stars"></div>
      </div>
    </button>
  )
}

export default SpaceButton
