import React from 'react'

interface ProgressBarProps {
  progress: number // progress as a percentage
}

const ProfileProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="bg-[#2b1b38]/80 text-white p-4 rounded-lg w-full ">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold">Protected ({progress}%)</span>
      </div>
      <div className="w-full bg-[#3b2b4b] rounded-full h-2">
        <div
          className="bg-purple-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProfileProgressBar
