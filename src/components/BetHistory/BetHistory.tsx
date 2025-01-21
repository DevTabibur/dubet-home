"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const BetHistory = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#290d2f] text-white p-6 rounded-xl shadow-lg w-full"
        >
            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Bet history</h1>
            <p className="text-gray-400 mb-6">
                Here you can find your detailed history of bets from across the various sections of our website!
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button className="bg-buttonPurple text-white px-4 py-2 rounded-md">Withdraw Request</button>
                <button className="border border-purple-700 px-4 py-2 text-sm rounded-md">TOTO</button>
                <button className="border border-purple-700 px-4 py-2 text-sm rounded-md">Betting Shop</button>
                <button className="border border-purple-700 px-4 py-2 text-sm rounded-md">Unsettled Bets</button>
                <button className="border border-purple-700 px-4 py-2 text-sm rounded-md">Baseline Odds</button>
                <button className="border border-purple-700 px-4 py-2 text-sm rounded-md">Casino</button>
            </div>

            {/* Date Pickers */}
            <div className="flex gap-4 items-center mb-6">
                <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md">
                    <input type="date" className="outline-none" />
                    <FaCalendarAlt />
                </div>
                <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md">
                    <input type="date" className="outline-none" />
                    <FaCalendarAlt />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
                <button className="bg-buttonGreen text-white px-4 py-2 rounded-md">Show</button>
                <button className="bg-buttonPurple text-white px-4 py-2 rounded-md">Request History</button>
                <button className="bg-buttonRed text-white px-4 py-2 rounded-md">Delete</button>
            </div>

            {/* Checkbox Filters */}
            <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Sports
                </label>
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Live
                </label>
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-3 gap-4">
                <select className="bg-white text-black px-4 py-2 rounded-md outline-none">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Completed</option>
                </select>
                <select className="bg-white text-black px-4 py-2 rounded-md outline-none">
                    <option>All Types</option>
                    <option>Betting</option>
                    <option>Casino</option>
                </select>
                <select className="bg-white text-black px-4 py-2 rounded-md outline-none">
                    <option>Time Bet Placed</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                </select>
            </div>
        </motion.div>
    );
};

export default BetHistory;
