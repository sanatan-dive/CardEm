// Rules.js

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Rules = () => {
  return (
    <div className="bg-stone-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold mb-8 text-blue-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Card Game Rules
        </motion.h1>
        
        <motion.p
          className="text-xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          A simple yet exciting card game for two players. Here's how it works:
        </motion.p>

        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Objective:</h2>
          <p className="text-lg text-gray-200">
            The goal of the game is to collect all the cards by winning draws against your opponent. The player who collects all cards wins!
          </p>
        </motion.div>

      
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Game Setup:</h2>
          <ul className="list-disc list-inside text-lg text-gray-200">
            <li>The deck of cards is split evenly between the two players.</li>
            <li>Each player starts with half of the deck face-down.</li>
            <li>Each player will draw one card at a time from the top of their deck.</li>
          </ul>
        </motion.div>

        
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">How to Play:</h2>
          <ol className="list-decimal list-inside text-lg text-gray-200">
            <li>Each player draws one card at the same time.</li>
            <li>The player whose card is higher wins that round and adds the card to their deck.</li>
            <li>If the cards are equal, the round is a tie, and both players place their cards aside.</li>
            <li>This continues until either one player runs out of cards or the game reaches the 7-minute time limit.</li>
            <li>The player with the most cards at the end wins the game!</li>
          </ol>
        </motion.div>

     
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-xl mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Game End:</h2>
          <p className="text-lg text-gray-200">
            The game can end in two ways:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-200 mt-4">
            <li>One player runs out of cards (loses the game).</li>
            <li>7 minutes have passed, and the player with the most cards at that point wins.</li>
          </ul>
        </motion.div>

        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-300">
            Ready to start playing? 
            <Link to="/" className="font-bold text-blue-400">
                Good luck!
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Rules;
