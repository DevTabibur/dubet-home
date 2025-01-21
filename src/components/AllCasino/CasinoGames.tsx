import React from 'react'
import casino1 from '@/assets/demo/casino-1.png'
import casino2 from '@/assets/demo/casino-2.png'
import casino3 from '@/assets/demo/casino-3.png'
import CasinoCard from '../ui/Cards/CasinoCard/CasinoCard'
const CasinoGames = () => {
  return (
    <section className="py-4 space-y-9">
      <section>
        <div className="pb-3 flex items-center justify-between gap-3 text-white">
          <h1 className="text-xl">Popular Casino</h1>
          <button className="rounded-full bg-gray-400/10 px-4 py-2 border border-white/20 text-sm  max-w-28 w-full shadow shadow-white/20">
            See all
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="pb-3 flex items-center justify-between gap-3 text-white">
          <h1 className="text-xl">New Casino</h1>
          <button className="rounded-full bg-gray-400/10 px-4 py-2 border border-white/20 text-sm  max-w-28 w-full shadow shadow-white/20">
            See all
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="pb-3 flex items-center justify-between gap-3 text-white">
          <h1 className="text-xl">Jackpots</h1>
          <button className="rounded-full bg-gray-400/10 px-4 py-2 border border-white/20 text-sm  max-w-28 w-full shadow shadow-white/20">
            See all
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="pb-3 flex items-center justify-between gap-3 text-white">
          <h1 className="text-xl">Jackpots</h1>
          <button className="rounded-full bg-gray-400/10 px-4 py-2 border border-white/20 text-sm  max-w-28 w-full shadow shadow-white/20">
            Drop & Win
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
          <CasinoCard
            imageSrc={casino1}
            height={700}
            badges={[{ title: 'New', color: 'blue' }]}
          />
          <CasinoCard
            imageSrc={casino2}
            height={700}
            badges={[
              { title: 'Promo', color: 'yellow' },
              { title: 'New', color: 'blue' },
            ]}
          />
          <CasinoCard
            imageSrc={casino3}
            height={700}
            badges={[
              { title: 'Promo', color: 'red' },
              { title: 'Exclusive', color: 'purple' },
            ]}
          />
        </div>
      </section>
    </section>
  )
}

export default CasinoGames
