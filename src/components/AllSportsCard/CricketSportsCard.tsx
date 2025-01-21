import Image from 'next/image'
import BookMark from '../../assets/sportsCard/svg/star.svg'
import Chart from '../../assets/sportsCard/svg/chart.svg'

// Interface for each team
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
interface CricketSportsCardProps {
  sportsData: SportsData[]
}

//!=========================================================>>>
const CricketSportsCard: React.FC<CricketSportsCardProps> = ({
  sportsData,
}) => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  gap-2  p-4  bg-[#290d2f] rounded-lg text-white border border-white/10">
        {sportsData.map((data) => {
          return (
            <>
              <div className="flex  flex-col justify-between w-full space-y-2 ">
                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[0].name}
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg lg:rounded-primary  lg:p-3  text-xs  w-full justify-between text-center ">
                    {data.teams[0].score}
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-full">
                    <div>W% </div>
                    <div>{data.teams[0].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-full">
                    <div>T1</div>
                    <div>{data.teams[0].t1}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg px-4 ml-5">Vs</div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex items-center space-x-6  lg:p-3  text-xs">
                    <div>X</div>
                    <div>25</div>
                  </div>
                </div>

                <div className="flex  justify-between items-start space-x-2">
                  <div className="text-lg mb-auto px-4">
                    {data.teams[1].name}
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg lg:rounded-primary  lg:p-3  text-xs  w-full justify-between text-center ">
                    {data.teams[1].score}
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-full">
                    <div>W% </div>
                    <div>{data.teams[1].winPercentage}</div>
                  </div>
                  <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-full">
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
        })}
      </div>
    </>
  )
}

export default CricketSportsCard

// old code

{
  /* <div className="flex flex-wrap lg:flex-nowrap items-center justify-between  gap-2  p-4  bg-[#290d2f] rounded-lg text-white border border-white/10">
        
        <div className="flex  flex-col justify-between w-full space-y-2 ">

          


         
          <div className="flex  justify-between items-start space-x-2">
            <div className="text-lg mb-auto px-4">Pakistan</div>
            <div className="bg-[#381e3e] p-2 rounded-lg lg:rounded-primary  lg:p-3  text-xs  w-full justify-between text-center ">
              356/10 (50)
            </div>
            <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-full">
              <div>W% </div>
              <div>40%</div>
            </div>
            <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-full">
              <div>T1</div>
              <div>2.5</div>
            </div>
          </div>

      
          <div className="flex justify-between items-center">
            <div className="text-lg px-4 ml-5">Vs</div>
            <div className="bg-[#381e3e] p-2 rounded-lg flex items-center space-x-6  lg:p-3  text-xs">
              <div>X</div>
              <div>25</div>
            </div>
          </div>

         
          <div className="flex  justify-between items-start space-x-2">
            <div className="text-lg mb-auto px-4">England</div>
            <div className="bg-[#381e3e] p-2 rounded-lg lg:rounded-primary  lg:p-3  text-xs  w-full justify-between text-center ">
              356/10 (50)
            </div>
            <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:p-3  text-xs  w-full">
              <div>W% </div>
              <div>40%</div>
            </div>
            <div className="bg-[#381e3e] p-2 rounded-lg flex justify-between text-center items-center space-x-6  lg:rounded-primary  lg:p-3  text-xs  w-full">
              <div>T1</div>
              <div>2.5</div>
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


      </div> */
}
