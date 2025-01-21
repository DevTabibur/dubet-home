'use client'
import React from 'react'
import CasinoCard from '../ui/Cards/CasinoCard/CasinoCard'
import { StaticImageData } from 'next/image'

interface BadgeProps {
  title: string
  color: string
}

interface GameData {
  id: number
  title: string
  imageSrc: StaticImageData
  category: string
  badges?: BadgeProps[]
}

interface GamesCardProps {
  games: GameData[]
  searchQuery: string
}

const GamesCard: React.FC<GamesCardProps> = ({ games, searchQuery }) => {
  // Group games by category
  const categorizedGames = games.reduce<Record<string, GameData[]>>(
    (acc, game) => {
      acc[game.category] = acc[game.category] || []
      acc[game.category].push(game)
      return acc
    },
    {}
  )

  return (
    <section className="py-4 space-y-9">
      <section className="py-4 space-y-9">
        {/* Check if there are any games to display */}
        {games.length === 0 ? (
          <p className="text-white">
            No data available for{' '}
            <span className="font-bold">&quot;{searchQuery}&quot;</span>{' '}
          </p>
        ) : (
          Object.entries(categorizedGames).map(([category, categoryGames]) => (
            <section key={category} className="space-y-3">
              <div className=" flex items-center justify-between gap-3 text-white">
                <h1 className="text-xl">{category}</h1>
                <button className="cursor-pointer rounded-full bg-gray-400/10 px-4 py-2 border border-white/20 text-sm max-w-28 w-full shadow shadow-white/20">
                  See all
                </button>
              </div>

              {categoryGames.length > 0 ? (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  {categoryGames.map((game) => (
                    <CasinoCard
                      key={game.id}
                      imageSrc={game.imageSrc}
                      title={game.title}
                      badges={game.badges}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-white">No data available in this category</p>
              )}
            </section>
          ))
        )}
      </section>
    </section>
  )
}

export default GamesCard
