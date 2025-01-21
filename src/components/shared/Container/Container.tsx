import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

//!==============================================================>>>

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1700px] mx-auto px-4 ${className}`}>{children}</div>
  )
}

export default Container
