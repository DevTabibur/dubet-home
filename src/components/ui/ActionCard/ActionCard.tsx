import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa'

interface ActionCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  actionText: string
  onAction: () => void
  onClose: () => void
  isActive?: boolean // Determines if the checkmark is shown
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  subtitle,
  actionText,
  onAction,
  onClose,
  isActive = false,
}) => {
  return (
    <div className="relative bg-[#290d2f] border border-white/20 text-white rounded-lg shadow-md p-5 w-full max-w-xs">
      {/* Close Button */}

      {/* Icon and Checkmark */}
      <div className="flex justify-center items-center mb-4 relative">
        <div className="bg-[#3b2b4b] rounded-full p-4 text-3xl">{icon}</div>
        {isActive ? (
          <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <FaCheck size={12} />
          </div>
        ) : (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
          >
            <FaTimes size={20} />
          </button>
        )}
      </div>

      {/* Title and Subtitle */}
      <h3 className="text-lg font-semibold text-center mb-1">{title}</h3>
      <p className="text-center text-gray-400 text-sm mb-4">{subtitle}</p>

      {/* Action Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={onAction}
          className="w-full py-2 bg-[#00c100] max-w-40 mx-auto hover:bg-green-500 text-white font-semibold rounded-md"
        >
          {actionText}
        </button>
      </div>
    </div>
  )
}

export default ActionCard
