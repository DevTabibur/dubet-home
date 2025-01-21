type SkeletonItem = {
  width: string
  height: string
  className?: string
  bgColor?: string
}

type SkeletonProps = {
  items: SkeletonItem[]
  className?: string
}

//!========================================================================================>>>
const Skeleton: React.FC<SkeletonProps> = ({ items, className = '' }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`skeleton ${item.className ?? ''}`}
          style={{
            width: item.width,
            height: item.height,
            backgroundColor: item.bgColor ?? '#e0e0e0',
          }}
        ></div>
      ))}
    </div>
  )
}

export default Skeleton

//** HOW TO USE */
// const courseSkeletonItems = [
//     { width: '100%', height: '128px', bgColor: '#C9DABF' }, // Image placeholder
//     { width: '70%', height: '16px', bgColor: '#9CA986' },   // Title placeholder
//     { width: '100%', height: '16px', bgColor: '#808D7C' },  // Description line 1
//     { width: '80%', height: '16px', bgColor: '#5F6F65' },   // Description line 2
// ];

// const tableRowSkeletonItems = [
//     { width: '15%', height: '24px', bgColor: '#C9DABF' }, // Column 1
//     { width: '25%', height: '24px', bgColor: '#9CA986' }, // Column 2
//     { width: '20%', height: '24px', bgColor: '#808D7C' }, // Column 3
//     { width: '20%', height: '24px', bgColor: '#5F6F65' }, // Column 4
// ];

//   <Skeleton items={courseSkeletonItems} className="w-52 mb-4" />
//   <Skeleton items={tableRowSkeletonItems} className="flex w-full" />;
