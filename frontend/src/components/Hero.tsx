import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Simulate game start after clicking the "Play Online" button
  const handlePlayOnlineClick = () => {
    setIsLoading(true);
    setGameStarted(false); // Reset game start state

    // Simulate a delay (like waiting for another player) and then start the game
    setTimeout(() => {
      setGameStarted(true);
      setIsLoading(false);
    }, 3000);  // Simulate a 3-second delay for game start
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-stone-800">
      {/* Main content area */}
      <div className="flex">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center text-white">
          {/* Replace with an actual image */}
          <img
            src="your-image-source.jpg"
            alt="Description of the image"
            className="w-full h-auto object-cover mb-8"
          />
          <h1 className="text-4xl font-extrabold mb-6">Welcome to the CardEm!</h1>
          <p className="text-xl mb-8">Challenge your friends and play now!</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          {/* Play Online Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 text-2xl px-12 rounded-lg mb-4"
            onClick={handlePlayOnlineClick}
            disabled={isLoading || gameStarted} // Disable while loading or if game has started
          >
            Play Online
          </button>

          {/* Rule Book Button */}
          <Link to="/rules">
            <button className="ring-1 ring-white hover:bg-blue-700 text-white font-bold py-6 text-2xl px-12 rounded-lg ">
              Rule Book
            </button>
          </Link>
        </div>

        {/* Loading Screen */}
        {isLoading && (
          <div className="fixed inset-0 bg-stone-900 bg-opacity-70 flex justify-center items-center">
            <div className="text-center text-white">
              <div className="loader border-t-4 border-blue-400 border-solid rounded-full w-16 h-16 mx-auto mb-4 animate-spin"></div>
              <p className="text-2xl">Waiting for other player to join...</p>
            </div>
          </div>
        )}

        {/* Game Started Notification */}
        {gameStarted && (
          <div className="fixed inset-0 bg-green-500 bg-opacity-70 flex justify-center items-center">
            <div className="text-center text-white">
              <p className="text-2xl">Game has started! Get ready to play!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
