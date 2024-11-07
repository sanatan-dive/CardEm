import { Server } from 'socket.io';
import { startGame, drawCards, checkWinner } from '../gameLogic';

const io = new Server();

io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle starting a game
  socket.on('startGame', ({ player1, player2 }) => {
    const game = startGame(player1, player2);
    io.emit('gameStarted', game);
  });

  // Handle drawing cards
  socket.on('drawCards', () => {
    const result = drawCards();
    io.emit('roundResult', result);

    const winner = checkWinner();
    if (winner !== 'Game still ongoing') {
      io.emit('gameEnded', winner);
    }
  });
});

io.listen(3000);
