import Image from 'next/image'
import BookMark from '../../assets/sportsCard/svg/star.svg'
import Chart from '../../assets/sportsCard/svg/chart.svg'
// import styles from './styles.css'

interface Team {
  name: string
  score: string
  winPercentage: string
  t1: string
}

// Interface for sports data
interface SportsData {
  id: string
  teams: Team[]
}

// Props interface for CricketSportsCard
interface FootballSportsCardProps {
  sportsData: SportsData[]
}
//!===========================================================================>>>

const FootballSportsCard: React.FC<FootballSportsCardProps> = ({
  sportsData,
}) => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  gap-2  p-4  bg-[#290d2f] rounded-lg text-white border border-[#5f4e5f]">
        {sportsData.map((data) => {
          return (
            <>
              <div className="flex  flex-col justify-between w-full space-y-2 ">
                {/* first row */}
                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[0].name}
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-36">
                    <div>W% </div>
                    <div>{data.teams[0].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-36">
                    <div>T1</div>
                    <div>{data.teams[0].t1}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg px-4 ml-5">Vs</div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex flex-col justify-between items-center h-full lg:p-3 text-xs">
                    <div className="self-auto">1/0</div>
                    <div className="self-auto">68’50”</div>
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex items-center space-x-6  lg:p-3  text-xs">
                    <div>X</div>
                    <div>25</div>
                  </div>
                </div>

                {/* 3rd row */}
                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[1].name}
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-36">
                    <div>W% </div>
                    <div>{data.teams[1].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-36">
                    <div>T1</div>
                    <div>{data.teams[1].t1}</div>
                  </div>
                </div>
              </div>

              {/* last row of icons */}
              <div className="flex flex-wrap flex-col md:flex-row  items-center justify-between space-y-4  h-full">
                <div className="bg-[#381e3e] flex items-center justify-center p-5 rounded-lg w-full h-16">
                  <Image
                    src={BookMark.src}
                    alt="bookmark_start"
                    width={15}
                    height={15}
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-[#381e3e] flex items-center justify-center p-5 rounded-lg w-full h-16">
                  <Image
                    src={Chart.src}
                    alt="chart_icon"
                    width={15}
                    height={15}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default FootballSportsCard

{
  /* {sportsData.map((data) => {
          return (
            <>
              <div className="flex  flex-col justify-between w-full space-y-2 ">
                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[0].name}
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-36">
                    <div>W% </div>
                    <div>{data.teams[0].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-36">
                    <div>T1</div>
                    <div>{data.teams[0].t1}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg px-4 ml-5">Vs</div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex flex-col justify-between items-center h-full lg:p-3 text-xs">
                    <div className="self-auto">1/0</div>
                    <div className="self-auto">68’50”</div>
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex items-center space-x-6  lg:p-3  text-xs">
                    <div>X</div>
                    <div>25</div>
                  </div>
                </div>

                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[1].name}
                  </div>

                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-36">
                    <div>W% </div>
                    <div>{data.teams[1].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-36">
                    <div>T1</div>
                    <div>{data.teams[1].t1}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap flex-col items-center justify-between space-y-4  h-full">
                <div className="bg-[#381e3e] flex items-center justify-center p-5 rounded-lg w-full h-16">
                  <Image
                    src={BookMark.src}
                    alt="bookmark_start"
                    width={15}
                    height={15}
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-[#381e3e] flex items-center justify-center p-5 rounded-lg w-full h-16">
                  <Image
                    src={Chart.src}
                    alt="chart_icon"
                    width={15}
                    height={15}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </>
          )
        })} */
}

// <h1 className="text-white">Football Sports Card</h1>

// <div className="flex items-center justify-between  max-w-lg  bg-[#290d2f] rounded-lg text-white border border-[#5f4e5f]">
//   <div className="flex flex-col justify-between md:ml-5 ml-0 space-y-2 ">
//     <div className="flex justify-between items-center space-x-2">
//       <div className="text-lg mb-auto px-4">Atlanta</div>
//       <div className="bg-[#381e3e] p-2 rounded-lg flex justify-center items-center space-x-6">
//         <div>W% </div>
//         <div>40%</div>
//       </div>
//       <div className="bg-[#381e3e] p-2 rounded-lg flex justify-center items-center space-x-6">
//         <div>T1</div>
//         <div>2.5</div>
//       </div>
//     </div>

//     <div className="flex justify-between items-center">
//       <div className="text-lg px-4 ml-5">Vs</div>
//       <div className="bg-[#381e3e] p-2 rounded-lg flex flex-col items-center">
//         <div className="text-sm">1/0</div>
//         <div>68’50”</div>
//       </div>

//       <div className="bg-[#381e3e] p-2 rounded-lg flex items-center space-x-6">
//         <div>X</div>
//         <div>25</div>
//       </div>
//     </div>

//     <div className="flex justify-between items-center ">
//       <div className="text-lg px-4">Celtic</div>
//       <div className="bg-[#381e3e] p-2 rounded-lg flex justify-center items-center space-x-6">
//         <div>W% </div>
//         <div>60%</div>
//       </div>
//       <div className="bg-[#381e3e] p-2 rounded-lg flex justify-center items-center space-x-6">
//         <div>T2</div>
//         <div>1.3</div>
//       </div>
//     </div>
//   </div>

//   <div className="flex flex-col items-center justify-center space-y-4 p-4">
//     <div className="bg-[#381e3e] flex items-center justify-center px-4  py-4 rounded-lg">
//       <Image
//         src={BookMark.src}
//         alt="bookmark_start"
//         width={30}
//         height={30}
//         className=""
//       />
//     </div>
//     <div className="bg-[#381e3e] flex items-center justify-center px-4 py-4 rounded-lg">
//       <Image
//         src={Chart.src}
//         alt="chart_icon"
//         width={30}
//         height={30}
//         className=""
//       />
//     </div>
//   </div>
// </div>
