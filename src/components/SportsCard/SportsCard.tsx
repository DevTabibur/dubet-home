import { BsBarChartLine } from 'react-icons/bs'
import { IoStarOutline } from 'react-icons/io5'

const SportsCard = () => {
  return (
    <div>
      <div className="md:flex items-center rounded-xl  h-auto border border-white/20  bg-gray-400/10 shadow-lg p-2 md:p-0  lg:max-w-3xl md:max-w-2xl mx-auto   text-white">
        {/* 1st col */}

        <div className=" lg:ml-6 flex md:flex-col  justify-between md:h-40    lg:text-xl   p-4 md:p-2.5  ">
          <h1 className=" ">Pakistan</h1>
          <h1 className="text-2xl md:text-xl text-center">VS</h1>
          <h1>England</h1>
        </div>

        {/* 2 */}
        <div className="md:w-40 md:p-4 px-2 flex justify-center items-center">
          <div className="py-2 px-4 rounded-md text-sm gap-1 w-full flex flex-col justify-between items-center bg-[#381e3e]">
            <h3>Starts At</h3>
            <h1>10 PM</h1>
          </div>
        </div>

        {/* 4th col */}
        <div className=" md:w-32 md:p-4 text-sm mt-4 h-full md:mt-0">
          <div className="flex md:flex-col flex-row    gap-2     ">
            <div className="p-2.5 rounded-md  bg-[#381e3e] md:w-full w-1/3">
              <div className="flex justify-between items-center ">
                <h1>T1</h1>
                <h1>2.5</h1>
              </div>
            </div>
            <div className="p-2.5 rounded-md  bg-[#381e3e] md:w-full w-1/3">
              <div className="flex justify-between items-center">
                <h1>X</h1>
                <h1>25</h1>
              </div>
            </div>
            <div className="p-2.5 rounded-md  bg-[#381e3e] md:w-full w-1/3">
              <div className="flex justify-between items-center">
                <h1>T2</h1>
                <h1>1.3</h1>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className=" md:w-36  p-4 md:h-40   gap-2 ">
          <div className=" flex md:flex-col gap-2 h-full  justify-between">
            <div className="p-3 rounded-md bg-[#381e3e] items-center flex justify-center md:w-full w-1/2  mb-0 md:mb-4">
              <IoStarOutline />
            </div>

            <div className="p-3 rounded-md bg-[#381e3e] items-center flex justify-center md:w-full w-1/2  ">
              <BsBarChartLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsCard
