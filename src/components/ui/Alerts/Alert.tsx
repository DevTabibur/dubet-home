'use client'
import React, { useState } from 'react'

interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  closable?: boolean
  onClose?: () => void
  children: React.ReactNode
  className?: string
}

//!=========================================================================================>>>
const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  size = 'md',
  closable = false,
  onClose,
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const variantClasses = {
    success: 'bg-green-100 text-green-800 border-green-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  }

  const sizeClasses = {
    xs: 'text-xs py-1 px-2',
    sm: 'text-sm py-2 px-3',
    md: 'text-base py-3 px-4',
    lg: 'text-lg py-4 px-5',
    xl: 'text-xl py-5 px-6',
  }

  const handleClose = () => {
    if (onClose) onClose()
    setVisible(false)
  }

  const alertClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    border rounded-md flex items-center gap-x-2
    transition-all duration-300 ease-in-out
    ${className}
  `

  return (
    <div className={alertClasses}>
      {children}
      {closable && (
        <button
          onClick={handleClose}
          className="ml-auto text-lg font-bold text-gray-700 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default Alert

//** HOW TO USE */
// import Alert from './Alert';

// const MyComponent = () => {
//   return (
//     <div>
//       <Alert variant="success" size="md" closable>
//         This is a success alert!
//       </Alert>
//       <Alert variant="error" size="lg">
//         This is an error alert.
//       </Alert>
//     </div>
//   );
// };
