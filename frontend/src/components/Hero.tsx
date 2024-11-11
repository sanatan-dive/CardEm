import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';

// Define the data shape for gameStarted event
interface GameStartedData {
  player1: string;
  player2: string;
}

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket | null>(null); // Type for socket connection

  // Establish socket connection on component mount
  useEffect(() => {
    const newSocket = io('http://localhost:3000'); // Ensure this points to your backend
    setSocket(newSocket);
  
    newSocket.on('gameStarted', (data: GameStartedData) => {
      setGameStarted(true);
      setIsLoading(false);
      console.log(`Game started with players: ${data.player1} and ${data.player2}`);
    });
  
    return () => {
      newSocket.disconnect();
    };
  }, []);
  

  // Handle play online button click
  const handlePlayOnlineClick = () => {
    if (!socket) return;
    setIsLoading(true);
    setGameStarted(false); // Reset the game start state

    const player1 = 'Player 1'; // Replace with dynamic player data
    const player2 = 'Player 2'; // Replace with dynamic player data

    // Emit the startGame event with player data
    socket.emit('startGame', { player1, player2 });

    // After emitting, we will wait for the 'gameStarted' event from the server
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center text-white bg-stone-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
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
}

export default Hero;
