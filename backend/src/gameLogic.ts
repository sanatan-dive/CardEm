import { Game, createGameModel } from './models/gameModel';
import { shuffleDeck, generateDeck } from './utils/deckUtils';

let currentGame: Game | null = null;

// Start the game with both players
export const startGame = (player1: string, player2: string): Game => {
  currentGame = createGameModel(player1, player2);
  currentGame.deck = generateDeck();
  currentGame.deck = shuffleDeck(currentGame.deck);

  // Deal the cards to both players
  currentGame.player1Cards = currentGame.deck.splice(0, 26);
  currentGame.player2Cards = currentGame.deck.splice(0, 26);

  return currentGame;
};

// Draw a card for each player, compare and determine the winner
export const drawCards = (): string => {
  if (!currentGame) throw new Error('No game started');

  if (currentGame.player1Cards.length === 0 || currentGame.player2Cards.length === 0) {
    return currentGame.player1Cards.length === 0 ? 'Player 2 wins!' : 'Player 1 wins!';
  }

  // Draw one card for each player
  const player1Card = currentGame.player1Cards.pop()!;
  const player2Card = currentGame.player2Cards.pop()!;

  // Compare the card values
  let roundResult: string;
  if (player1Card.value > player2Card.value) {
    // Player 1 wins the round
    currentGame.player1Cards.unshift(player1Card, player2Card);
    roundResult = `Player 1 wins the round with ${player1Card.value} of ${player1Card.suit} over ${player2Card.value} of ${player2Card.suit}`;
  } else if (player1Card.value < player2Card.value) {
    // Player 2 wins the round
    currentGame.player2Cards.unshift(player1Card, player2Card);
    roundResult = `Player 2 wins the round with ${player2Card.value} of ${player2Card.suit} over ${player1Card.value} of ${player1Card.suit}`;
  } else {
    // It's a tie, both cards go back to the deck (optional, can change this behavior)
    currentGame.player1Cards.unshift(player1Card);
    currentGame.player2Cards.unshift(player2Card);
    roundResult = `It's a tie, both cards go back to the players: ${player1Card.value} of ${player1Card.suit} vs ${player2Card.value} of ${player2Card.suit}`;
  }

  return roundResult;
};

// Check the winner
export const checkWinner = (): string => {
  if (!currentGame) throw new Error('No game started');

  if (currentGame.player1Cards.length === 0) {
    return 'Player 2 wins!';
  } else if (currentGame.player2Cards.length === 0) {
    return 'Player 1 wins!';
  }
  return 'Game still ongoing';
};
