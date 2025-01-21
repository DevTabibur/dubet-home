import React from 'react'
import { FaDesktop, FaMobileAlt } from 'react-icons/fa'

interface SessionProps {
  type: 'desktop' | 'mobile'
  location: string
  date: string
  details: string
}

const SessionItem: React.FC<SessionProps> = ({
  type,
  location,
  date,
  details,
}) => {
  return (
    <div className="flex items-start gap-3 text-gray-300 mb-3">
      {type === 'desktop' ? (
        <FaDesktop className="text-xl text-gray-400" />
      ) : (
        <FaMobileAlt className="text-xl text-gray-400" />
      )}
      <div>
        <p className="text-sm font-semibold">{location}</p>
        <p className="text-xs">
          {date} {details}
        </p>
      </div>
    </div>
  )
}

const RecentSessions = () => {
  return (
    <div className="bg-[#290d2f] border border-white/20 text-white rounded-lg p-6 shadow-lg">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Recent sessions</h2>

      {/* End All Sessions Button */}
      <button className="bg-[#00c100] hover:bg-[#00c100] text-white font-semibold py-1.5 px-4 rounded-lg text-sm mb-5">
        End all Sessions
      </button>

      {/* Active Sessions Section */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3">Active sessions</h3>
        <SessionItem
          type="desktop"
          location="Window, Dhaka"
          date="28/10/2024 11:20:45"
          details="Desktop site 103.68.4.230"
        />
      </div>

      {/* Session History Section */}
      <div>
        <h3 className="text-md font-semibold mb-3">Session History</h3>
        <SessionItem
          type="desktop"
          location="Window, Dhaka"
          date="28/10/2024 11:20:45"
          details="Desktop site 103.68.4.230"
        />
        <SessionItem
          type="desktop"
          location="Window, Dhaka"
          date="28/10/2024 11:20:45"
          details="Desktop site 103.68.4.230"
        />
        <SessionItem
          type="mobile"
          location="Window, Dhaka"
          date="28/10/2024 11:20:45"
          details="Desktop site 103.68.4.230"
        />
        <SessionItem
          type="desktop"
          location="Window, Dhaka"
          date="28/10/2024 11:20:45"
          details="Desktop site 103.68.4.230"
        />
      </div>
    </div>
  )
}

export default RecentSessions
