interface FluidContainerProps {
  children: React.ReactNode
  className?: string // Optional className for additional styling
}

//!====================================================================>>>
const FluidContainer: React.FC<FluidContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`max-w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default FluidContainer
