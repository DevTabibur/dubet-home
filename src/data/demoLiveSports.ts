import { MatchData } from '@/interface/live-sports'

export const demoData: MatchData[] = [
  {
    tournament: 'World Cup 2026 Qualification',
    team1: 'Pakistan',
    team2: 'England',
    stats: {
      odds: '35%',
      winChance: '40%',
      T1: '2.5',
      T2: '3',
    },
    star: true,
  },
  {
    tournament: 'UEFA Champions League',
    team1: 'Atalanta',
    team2: 'Celtic',
    stats: {
      odds: '60%',
      winChance: '50%',
      T1: '1.5',
      T2: '2.8',
    },
    star: false,
  },
  {
    tournament: 'UEFA Champions League',
    team1: 'Man City',
    team2: 'Burnley',
    stats: {
      odds: '70%',
      winChance: '55%',
      T1: '1.3',
      T2: '2.1',
    },
    star: false,
  },
]
