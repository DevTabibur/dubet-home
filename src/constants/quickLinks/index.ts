import {
  casinoChips,
  favorite,
  football,
  giftBox,
  liveBetting,
  liveCasino,
} from '@/assets/svg'
import { IQuicLinkProps } from '@/interface/quickLinks'

//!====================================================================================================>>>
export const quickLinks: IQuicLinkProps[] = [
  { id: '1', title: 'Sports Betting', icon: football, href: '/sports-betting' },
  { id: '2', title: 'Live Betting', icon: liveBetting, href: '/live-betting' },
  { id: '3', title: 'Favorites', icon: favorite, href: '/favorites' },
  { id: '4', title: 'Casino', icon: casinoChips, href: '/casino' },
  { id: '5', title: 'Live Casino', icon: liveCasino, href: '/live-casino' },
  { id: '6', title: 'Promotions', icon: giftBox, href: '/promotions' },
]
