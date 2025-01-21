import React from 'react';
import { motion } from 'framer-motion';
import tournament2 from "@/assets/demo/up-tournament-2.jpg";
import { StaticImageData } from 'next/image';
import { CiStopwatch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

// Define a Tournament type
type Tournament = {
    id: number;
    title: string;
    date: string;
    location: string;
    image: StaticImageData;
};

// Tournament Data
const tournaments: Tournament[] = [
    {
        id: 1,
        title: 'Football Tournament',
        date: '23 Oct 2024 - 01 Dec 2024',
        location: 'Paris, France',
        image: tournament2,
    },
    {
        id: 2,
        title: 'Golf Tournament',
        date: '23 Oct 2024 - 01 Dec 2024',
        location: 'Paris, France',
        image: tournament2,
    },
    {
        id: 3,
        title: 'Basketball Tournament',
        date: '23 Oct 2024 - 01 Dec 2024',
        location: 'Paris, France',
        image: tournament2,
    },
    {
        id: 4,
        title: 'E-sports Tournament',
        date: '23 Oct 2024 - 01 Dec 2024',
        location: 'Paris, France',
        image: tournament2,
    },
    {
        id: 5,
        title: 'Dart Tournament',
        date: '23 Oct 2024 - 01 Dec 2024',
        location: 'Paris, France',
        image: tournament2,
    },
];

// Tournament Card Component
const TournamentCard: React.FC<{ tournament: Tournament }> = ({ tournament }) => {
    return (
        <motion.div
            className="bg-[#280d2d] border border-white/10 flex rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <img
                src={tournament.image.src}
                alt={tournament.title}
                className="w-40 h-full rounded-lg object-cover"
            />
            <div className="p-3 space-y-3">
                <h3 className="text-md font-[500]">{tournament.title}</h3>
                <p className="text-xs mt-2 flex gap-2"><CiStopwatch />
                    {tournament.date}</p>
                <p className="text-xs flex gap-2"><CiLocationOn />
                    {tournament.location}</p>
            </div>
        </motion.div>
    );
};

// Main UpcomingTournament Component
const UpcomingTournament: React.FC = () => {
    return (
        <div className="text-white cursor-pointer">
            <h2 className="mb-10 text-white text-3xl font-semibold">
                Upcoming Tournament</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                {tournaments.map((tournament) => (
                    <TournamentCard key={tournament.id} tournament={tournament} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingTournament;
