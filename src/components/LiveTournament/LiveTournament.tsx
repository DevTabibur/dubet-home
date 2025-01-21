import React from 'react';
import { motion } from 'framer-motion';
import ttwenty1 from "@/assets/demo/t-twenty-1.png"
import ttwenty2 from "@/assets/demo/t-twenty-2.jpg";
import { StaticImageData } from 'next/image';
// Define the Tournament type
type LiveTournament = {
    id: number;
    title: string;
    image: StaticImageData;
    live: boolean;
};

// Sample Data for Live Tournaments
const liveTournaments: LiveTournament[] = [
    {
        id: 1,
        title: 'T20 Cricket',
        image: ttwenty1,
        live: true,
    },
    {
        id: 2,
        title: 'Football League',
        image: ttwenty2,
        live: true,
    },
    {
        id: 3,
        title: 'T20 Cricket',
        image: ttwenty1,
        live: true,
    },
    {
        id: 4,
        title: 'Football League',
        image: ttwenty2,
        live: true,
    }
];

// LiveTournamentCard Component
const LiveTournamentCard: React.FC<{ tournament: LiveTournament }> = ({ tournament }) => (
    <motion.div
        className="relative rounded-lg overflow-hidden shadow-lg bg-cover bg-center h-40 flex items-end"
        style={{ backgroundImage: `url(${tournament.image.src})` }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 p-4 w-full">
            {/* <h3 className="text-lg font-semibold text-white">{tournament.title}</h3> */}
            {tournament.live && (
                <span className="flex text-white items-center gap-2 text-xs px-2 rounded-md">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span> 
                    <span className='bg-red-500 text-lg px-1 font-semibold'>LIVE</span>
                </span>
            )}
        </div>
    </motion.div>
);

// Main LiveTournament Component
const LiveTournament: React.FC = () => {
    return (
        <div className="text-white">
            <h2 className="mb-10 text-white text-3xl font-semibold">Live Tournament</h2>
            <div className="flex flex-col gap-4">
                {liveTournaments.map((tournament) => (
                    <LiveTournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default LiveTournament;
