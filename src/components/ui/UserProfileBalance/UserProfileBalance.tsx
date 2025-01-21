import React from 'react'
import './UserProfileBalance.css'

interface UserProfileBalanceProps {
  username: string
  balance: number
  profilePicUrl?: string
}

const UserProfileBalance: React.FC<UserProfileBalanceProps> = ({
  username,
  balance,
  profilePicUrl,
}) => {
  return (
    <div className="profile-balance-container">
      <div className="profile-section">
        <div className="profile-icon">
          {profilePicUrl ? (
            <img src={profilePicUrl} alt="Profile" className="avatar-image" />
          ) : (
            <div className="avatar-placeholder">{username.charAt(0)}</div>
          )}
        </div>
        <span className="username">{username}</span>
      </div>
      <div className="balance-section">
        <button className="add-balance-btn">+</button>
        <div className="balance-display">
          <span className="currency-icon">💰</span>
          <span className="balance-amount">{balance.toLocaleString()}</span>
        </div>
        <button className="settings-btn">⚙️</button>
      </div>
    </div>
  )
}

export default UserProfileBalance
