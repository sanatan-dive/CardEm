// import WebSocket, { WebSocketServer } from 'ws';
// import { startGame, drawCard, checkWinner } from '../services/gameService';
// import { User } from '../models/userModel';

// const wss = new WebSocketServer({ port: 8080 });

// let users: User[] = [];

// wss.on('connection', (ws: WebSocket) => {
//   console.log('A new player connected');

//   // Send a welcome message
//   ws.send(JSON.stringify({ message: 'Welcome to the Card Game' }));

//   // Handle incoming messages
//   ws.on('message', (message: string) => {
//     const data = JSON.parse(message);

//     switch (data.type) {
//       case 'createUser':
//         const user = createUser(data.name);
//         users.push(user);
//         ws.send(JSON.stringify({ type: 'userCreated', user }));
//         break;

//       case 'startGame':
//         const game = startGame(data.player1, data.player2);
//         ws.send(JSON.stringify({ type: 'gameStarted', game }));
//         break;

//       case 'drawCard':
//         const card = drawCard(data.playerId);
//         ws.send(JSON.stringify({ type: 'cardDrawn', card }));
//         break;

//       case 'checkWinner':
//         const winner = checkWinner();
//         ws.send(JSON.stringify({ type: 'winner', winner }));
//         break;

//       default:
//         ws.send(JSON.stringify({ message: 'Unknown message type' }));
//     }
//   });

//   // Handle closing connection
//   ws.on('close', () => {
//     console.log('Player disconnected');
//   });
// });

// console.log('WebSocket server is running on ws://localhost:8080');
