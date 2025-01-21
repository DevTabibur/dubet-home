import React, { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps {
  options: DropdownOption[]
  placeholder?: string
  icon?: React.ReactNode
  onChange: (value: string) => void
  value?: string
  defaultText?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = 'Select an option',
  icon,
  onChange,
  value,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | undefined>(value)

  useEffect(() => {
    if (value) setSelected(value)
  }, [value])

  const handleOptionClick = (optionValue: string) => {
    setSelected(optionValue)
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={`relative inline-block w-full ${className}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full bg-[#48304d] text-white py-2.5 px-3 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center text-sm">
          {icon && <span className="mr-2">{icon}</span>}
          <span>
            {selected
              ? options.find((opt) => opt.value === selected)?.label || selected
              : placeholder}
          </span>
        </div>
        <FaChevronDown size={10} />
      </button>

      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        className="absolute z-10 mt-1 w-full bg-[#48304d] border border-gray-300 rounded shadow-lg"
        style={{ overflow: 'hidden' }} // Hide the list when collapsed
      >
        {options.map((option) => (
          <motion.li
            key={option.value}
            className="px-3 py-2 hover:bg-[#9b00b8] text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Dropdown
