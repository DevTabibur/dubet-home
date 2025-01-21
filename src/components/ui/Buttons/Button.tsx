/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from 'next/image'
import { FC } from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: React.ReactNode
  iconWidth?: number
  iconHeight?: number
  variant?: string
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
  icon,
  iconWidth = 18, // Provide a default width
  iconHeight = 18, // Provide a default height
}) => {
  const buttonClasses = `
    inline-flex items-center gap-x-2
    transition-all duration-300 ease-in-out
    ${disabled ? 'opacity-50 pointer-events-none' : ''}
    ${className}
  `

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {icon && typeof icon === 'string' ? (
        <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
      ) : (
        icon
      )}
      {children}
    </button>
  )
}

export default Button
