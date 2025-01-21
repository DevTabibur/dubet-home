'use client'
import { useState } from 'react'
interface InputProps {
  name: string
  type?: 'text' | 'email' | 'password' | 'date'
  placeholder?: string
  icon?: React.ReactNode
  iconColor?: string
  value?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  className?: string
  disabled?: boolean
  isTextArea?: boolean
  rows?: number
  cols?: number
}
import { FaRegEye } from 'react-icons/fa'
import { IoIosEyeOff } from 'react-icons/io'

const FormInput: React.FC<InputProps> = ({
  name,
  type = 'text',
  placeholder,
  icon,
  iconColor,
  value,
  onChange,
  className,
  disabled = false,
  isTextArea = false,
  rows,
  cols,
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const iconClasses = `h-5 w-5 text-gray-500 ${iconColor}`

  // **Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <>
      <div
        className={`relative flex items-center gap-2 rounded-md text-white ${className}`}
      >
        {icon && <span className={iconClasses}>{icon}</span>}

        {isTextArea ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
            className="flex-grow bg-[#5d4761] rounded-md outline-none p-2.5 resize-none"
            disabled={disabled}
          />
        ) : (
          <input
            name={name}
            type={type === 'password' && showPassword ? 'text' : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-grow bg-[#5d4761] rounded-md outline-none p-2.5"
            disabled={disabled}
          />
        )}

        {type === 'password' && !isTextArea && (
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="h-5 w-5 text-white absolute right-2 focus:outline-none"
          >
            {showPassword ? (
              <IoIosEyeOff className="text-xl" />
            ) : (
              <FaRegEye className="text-xl" />
            )}
          </button>
        )}
      </div>
    </>
  )
}

export default FormInput
