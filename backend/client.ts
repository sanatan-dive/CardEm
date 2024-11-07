import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

// Start the game
socket.emit('startGame', { player1: 'Player1', player2: 'Player2' });

// Listen for game started event
socket.on('gameStarted', (data) => {
  console.log('Game started:', data);
});

// Draw a card
socket.emit('drawCard', 'Player1');

// Listen for card drawn event
socket.on('cardDrawn', (card) => {
  console.log('Card drawn:', card);
});

