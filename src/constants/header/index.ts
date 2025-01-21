import { MenuItem } from '@/interface/header'

export const moreMenuTablet = ['liveSports', 'upcomingEvent', 'affiliate']

export const menuConfig: MenuItem[] = [
  {
    key: 'allSports',
    path: '/all-sports',
    title: 'nav.allSports',
    icon: 'sports',
    subMenu: [
      {
        key: 'item1',
        path: '/item1',
        title: 'Item 1',
        items : []
      },
      {
        key: 'item2',
        path: '/item2',
        title: 'Item 2',
        items : []
      },
      {
        key: 'item3',
        path: '/item3',
        title: 'Item 3',
      },
    ],
  },
  {
    key: 'liveSports',
    path: '/live-sports',
    title: 'nav.liveSports',
    icon: 'live',
    subMenu: [
      {
        key: 'item1',
        path: '/item1',
        title: 'Item 1',
      },
      {
        key: 'item2',
        path: '/item2',
        title: 'Item 2',
      },
      {
        key: 'item3',
        path: '/item3',
        title: 'Item 3',
      },
    ],
  },

  {
    key: 'allGames',
    path: '/all-games',
    title: 'nav.allGames',
    icon: 'games',
    subMenu: [
      {
        key: 'item1',
        path: '/item1',
        title: 'Item 1',
      },
      {
        key: 'item2',
        path: '/item2',
        title: 'Item 2',
      },
      {
        key: 'item3',
        path: '/item3',
        title: 'Item 3',
      },
    ],
  },
  {
    key: 'upcomingEvent',
    path: '/upcoming-event',
    title: 'nav.upcomingEvent',
    icon: 'event',
    subMenu: [
      {
        key: 'item1',
        path: '/item1',
        title: 'event Item 1',
      },
      {
        key: 'item2',
        path: '/item2',
        title: 'event Item 2',
      },
      {
        key: 'item3',
        path: '/item3',
        title: 'event Item 3',
      },
    ],
  },
]
