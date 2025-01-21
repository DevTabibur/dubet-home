'use client'
import React, { useState } from 'react'

interface MenuItemSearchProps {
  placeholder?: string
  onSubmit: (value: string) => void
}

const MenuItemSearch: React.FC<MenuItemSearchProps> = ({
  placeholder = 'Search...',
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(inputValue) // Call the onSubmit function with the input value
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-[#C52EE1]/60 p-1 rounded-lg overflow-hidden z-10"
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="px-4 text-xs py-2 text-gray-300 bg-transparent outline-none w-full"
      />
      <button
        type="submit"
        className="bg-[#C52EE1] text-white lg:px-6 px-2 lg:py-2 py-1 text-sm rounded-r-lg"
      >
        Search
      </button>
    </form>
  )
}

export default MenuItemSearch

// old code, do not delete it
// import React from 'react'

// const MenuItemSearch: React.FC = () => {
//   return (
//     <div className="flex items-center border border-[#C52EE1]/60 p-1 rounded-lg overflow-hidden">
//       <input
//         type="text"
//         placeholder="Search Casino"
//         className="px-4 text-xs py-2 text-gray-300 bg-transparent outline-none w-full"
//       />
//       <button className="bg-[#C52EE1] text-white lg:px-6 px-2 lg:py-2 py-1 text-sm rounded-r-lg">
//         Search
//       </button>
//     </div>
//   )
// }

// export default MenuItemSearch
