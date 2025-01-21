import FCB from '../../../assets/Footer/FCB.png'
import ParisSaintGerman from '../../../assets/Footer/paris-saint-german.png'
import VolleyBallWorld from '../../../assets/Footer/VolleyBall World.png'
import FootballClub from '../../../assets/Footer/Football Club.svg'
import ManchesterCity from '../../../assets/Footer/Manchester_City.png'
import SportsKing from '../../../assets/Footer/Sport King.png'
import Image from 'next/image'
import Container from '../../shared/Container/Container'

//!===================================================================================>>>
const FooterBottomIcon = () => {
  return (
    <Container className="pb-10 md:pt-48 px-4 mt-4">
      <div className="grid md:grid-cols-2 gap-12 text-white">
        {/* Sports Partners Section */}
        <div className="text-start">
          <h3 className="text-lg font-semibold mb-4">Our Sports Partners</h3>
          <div className="flex flex-wrap md:justify-start justify-between gap-4 md:space-x-6">
            <Image
              src={FCB}
              alt="FCB"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={ParisSaintGerman}
              alt="Paris Saint-German"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={VolleyBallWorld}
              alt="VolleyBall World"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={FootballClub}
              alt="Football Club"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={ManchesterCity}
              alt="Manchester City"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={SportsKing}
              alt="Sports King"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>

        {/* e-Sports Partners Section */}
        <div className="text-start">
          <h3 className="text-lg font-semibold mb-4">Our e-Sports Partners</h3>
          <div className="flex flex-wrap md:justify-start justify-between gap-4 md:space-x-6">
            <Image
              src={FCB}
              alt="FCB"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={ParisSaintGerman}
              alt="Paris Saint-German"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={VolleyBallWorld}
              alt="VolleyBall World"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={FootballClub}
              alt="Football Club"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={ManchesterCity}
              alt="Manchester City"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <Image
              src={SportsKing}
              alt="Sports King"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FooterBottomIcon
