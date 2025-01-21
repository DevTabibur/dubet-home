/* eslint-disable @typescript-eslint/no-unused-vars */
import { footerLinksData } from '@/constants/footer'
import FooterBottomIcon from './FooterBottomIcon'
import FooterLinkSection from './FooterLinkSection'
import Container from '../../shared/Container/Container'
import FooterRightBottomCurveImage from '../../../assets/Footer/dot.png'
// import './Footer.css'

// primary color : #341939
// secondary color : #C52EE1

const Footer: React.FC = () => {
  return (
    <>
      <footer
        // id="footer"
        className="bg-[#341939] bg-gradient-to-tr from-[#c62ee163] via-[#34193900] to-transparent rounded-tl-[100px] py-12 relative overflow-hidden"
        // className="  rounded-tl-[100px] py-12 relative overflow-hidden"
      >
        <Container className="px-8">
          <div className="md:grid md:grid-cols-12 hidden lg:hidden md:gap-4 md:items-center mb-11">
            <div className="col-span-3">
              <h2 className="text-4xl font-bold text-white my-4">DUBET</h2>
            </div>
            <div className="col-span-9">
              <p className=" text-gray-300 ">
                Experience a wide range of betting options, live odds, and
                real-time updates on your favorite sports. Play responsibly, win
                big, and enjoy a safe and secure gaming environment.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 gap-4 z-50">
            <div className="col-span-1 hidden lg:block">
              <div className="">
                <h2 className="text-4xl font-bold text-white my-4">DUBET</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-300 max-w-sm pr-6">
                  Experience a wide range of betting options, live odds, and
                  real-time updates on your favorite sports. Play responsibly,
                  win big, and enjoy a safe and secure gaming environment.
                </p>
              </div>
            </div>

            {footerLinksData.map((section) => (
              <FooterLinkSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </Container>
        <FooterBottomIcon />
        <div
          className="absolute -bottom-[150px] -right-[200px] w-[600px] h-[500px] overflow-hidden z-10"
          style={{
            backgroundImage: `url(${FooterRightBottomCurveImage.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            opacity: 0.2,
            clipPath: 'circle(80% at 10% 10%)',
          }}
        />
        <div />
      </footer>
    </>
  )
}

export default Footer
