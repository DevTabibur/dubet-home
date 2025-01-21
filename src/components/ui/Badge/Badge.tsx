// src/components/Badge.tsx
import cn from '@/utils/cn'
import React from 'react'

interface BadgeProps {
  title: string
  color: string
}

const colorClasses: { [key: string]: string } = {
  red: 'bg-gradient-to-r from-red-500 to-red-700',
  blue: 'bg-gradient-to-r from-blue-500 to-blue-700',
  green: 'bg-gradient-to-r from-green-500 to-green-700',
  purple: 'bg-gradient-to-r from-purple-500 to-purple-700',
  yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
}

const Badge: React.FC<BadgeProps> = ({ title, color }) => {
  return (
    <div
      className={cn(
        'text-white font-bold pl-6 pr-3 py-1 masx-w-44 w-full productBadge text-center ',
        colorClasses[color]
      )}
      style={{
        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {title.toUpperCase()}

      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Badge
