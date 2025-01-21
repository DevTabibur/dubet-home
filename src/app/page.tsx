'use client'
import React from 'react'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import BetSlip from '@/components/ui/BetSlip/BetSlip'
import Hero from '@/components/Sliders/Hero'
import LiveBetting from '@/sections/LiveBetting/LiveBetting'
import PopularGames from '@/sections/PopularGames/PopularGames'
import OtherBetting from '@/sections/OtherBetting/OtherBetting'
import PopularCasino from '@/sections/PopularCasino/PopularCasino'
import QuickLinks from '@/sections/QuickLinks/QuickLinks'
import StickyNavigator from '@/components/ui/Sidebars/StickyNavigator/StickyNavigator'
import cricket from '@/assets/svg/cricket.svg'
import { casinoChips, favorite, football, liveCasino } from '@/assets/svg'
import UpcomingEvents from '@/sections/UpcomingEvents/UpcomingEvents'
import IconGrid from '@/components/ui/IconGrid/IconGrid'
import UpcomingTournament from '@/components/UpcomingTournament/UpcomingTournament'
import LiveTournament from '@/components/LiveTournament/LiveTournament'

const page = () => {
  const menuItems = [
    { icon: football, href: '/football' },
    { icon: liveCasino, href: '/live' },
    { icon: favorite, href: '/favorites' },
    { icon: cricket, href: '/love' },
    { icon: casinoChips, href: '/casino' },
  ]

  return (
    <>
      <HomeWrapper>
        <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
          <section className="lg:w-[25%] md:w-[100%] lg:block hidden">
            <div className="max-w-md space-y-10">
              <BetSlip />
              <QuickLinks />
              <PopularCasino />
              <LiveTournament/>
              <UpcomingTournament/>
            </div>
          </section>
          <section className="lg:w-[75%] md:w-[100%] w-full">
            <div>
              <Hero />
              <IconGrid />
            </div>
            <div className="flex w-[100%] items-start gap-5">
              <section className="md:w-[33%] w-auto hidden md:block lg:hidden">
                <div className="max-w-md">
                  <BetSlip />
                  <QuickLinks />
                  <PopularCasino />
                </div>
              </section>
              <div className="lg:w-[100%]  md:w-[67%] w-[100%]">
                <LiveBetting />
                <UpcomingEvents />
                <PopularGames />
                <OtherBetting />
              </div>
            </div>
          </section>
        </section>
        <StickyNavigator items={menuItems} />
      </HomeWrapper>
    </>
  )
}

export default page
