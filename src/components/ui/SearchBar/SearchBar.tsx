// import React from 'react'
// import { FaSearch, FaMicrophone } from 'react-icons/fa'

// const SearchBar: React.FC = () => {
//   return (
//     <div className="relative w-full flex max-w-xl shadow-[#341939] items-center border-[2px] p-2 text-white transition-all shadow-lg duration-800 bg-gradient-to-l from-[#341939] to-fuchsia-950 rounded-full border focus-within:border-white/20 border-white/20 animate-border focus-within:[background:linear-gradient(45deg,#341939,theme(colors.fuchsia.950)_20%,#341939)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.600/.48)_80%,_theme(colors.red.700)_86%,_theme(colors.purple.900)_90%,_theme(colors.pink.700)_94%,_theme(colors.orange.900/.48))_border-box]">
//       <FaSearch className="ml-3 text-xl" />
//       <input
//         type="text"
//         placeholder="Search here"
//         className="flex-grow bg-transparent outline-none px-4 text-gray-300 placeholder-gray-400"
//         aria-label="Search"
//       />
//       <FaMicrophone className="mr-3 text-xl" />
//     </div>
//   )
// }

// export default SearchBar



import React, { useState, useRef } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';

// Sample Games Array
const gamesArray = [
  'Minecraft',
  'Fortnite',
  'Valorant',
  'Roblox',
  'Apex Legends',
  'GTA V',
  'League of Legends',
  'Call of Duty',
  'Among Us',
  'PUBG',
];

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Start Speech Recognition
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      performSearch(transcript);
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  // Stop Speech Recognition
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Perform Search
  const performSearch = (query: string) => {
    const results = gamesArray.filter((game) =>
      game.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    performSearch(searchQuery);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl">
      {/* Search Bar */}
      <div className="relative w-full flex max-w-xl shadow-[#341939] items-center border-[2px] p-2 text-white transition-all shadow-lg duration-800 bg-gradient-to-l from-[#341939] to-fuchsia-950 rounded-full border focus-within:border-white/20 border-white/20 animate-border focus-within:[background:linear-gradient(45deg,#341939,theme(colors.fuchsia.950)_20%,#341939)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.600/.48)_80%,_theme(colors.red.700)_86%,_theme(colors.purple.900)_90%,_theme(colors.pink.700)_94%,_theme(colors.orange.900/.48))_border-box]">
        <FaSearch className="ml-3 text-xl cursor-pointer" onClick={handleSearch} />
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
          className="flex-grow bg-transparent outline-none px-4 text-gray-300 placeholder-gray-400"
          aria-label="Search"
        />
        <button
          onClick={isListening ? stopListening : startListening}
          className="mr-3"
          aria-label="Start/Stop Voice Search"
        >
          <FaMicrophone
            className={`text-xl ${isListening
              ? 'text-purple-400 animate-pulse'
              : 'text-white'
              }`}
          />
        </button>
      </div>

      {/* Modal for Search Results */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 flex items-center justify-center w-full max-w-xl z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#341939] border border-white/10 rounded-primary w-full text-white shadow-lg"
            >
              <div className='flex items-center px-4 justify-between py-2'>
                <h2 className="text-xl font-[500] ">Search Results</h2>
                <button
                  onClick={closeModal}
                  className="text-white "
                >
                  <IoCloseSharp size={30} />
                </button>
              </div>
              {searchResults.length > 0 ? (
                <ul className="pb-2 px-3 max-h-40 overflow-y-auto scroll-container">
                  {searchResults.map((game, index) => (
                    <li key={index} className="p-2 rounded-lg">
                      {game}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No results found</p>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
