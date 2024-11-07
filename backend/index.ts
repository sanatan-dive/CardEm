import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import gameRoutes from './src/routes/gameRoutes';

const app = express();
app.use(express.json());
app.use('/game', gameRoutes);

const server = http.createServer(app);
const io = new Server(server);

let currentGame: any = null; // Store the current game instance

// WebSocket logic to handle connections
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('startGame', (data) => {
    const { player1, player2 } = data;
    currentGame = { player1, player2, deck: [] }; // Initialize game here
    socket.emit('gameStarted', { player1, player2 });
  });

  socket.on('drawCard', (playerId) => {
    if (!currentGame) {
      socket.emit('error', 'No game started');
      return;
    }
    const card = { value: Math.floor(Math.random() * 13) + 2, suit: 'Hearts' }; // Example random card logic
    socket.emit('cardDrawn', card);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});