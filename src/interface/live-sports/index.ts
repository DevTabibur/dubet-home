// // CardData.ts
// export interface MatchData {
//   tournament?: string
//   team1: string
//   team2: string
//   score1: string
//   score2: string
//   winPercentage1: string
//   winPercentage2: string
//   odds1: string
//   oddsDraw: string
//   odds2: string
//   starred?: boolean
// }


// CardData.ts
export interface MatchData {
  tournament?: string;
  team1: string;
  team2: string;
  stats: {
    odds: string;
    winChance: string;
    T1: string;
    T2: string;
  };
  star: boolean;
}
