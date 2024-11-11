// Define types for card and game state
interface Card {
  value: string;
  suit: string;
}

interface Game {
  player1: string;
  player2: string;
  player1Cards: Card[];
  player2Cards: Card[];
  deck: Card[];
}

// This will hold the current game state
let currentGame: Game | null = null;

// Initialize the game with two players
export function initializeGame(player1: string, player2: string): Game {
  currentGame = {
    player1,
    player2,
    player1Cards: [],  // Cards for player 1
    player2Cards: [],  // Cards for player 2
    deck: generateDeck(),  // Generate a shuffled deck
  };

  // Deal half of the deck to each player
  currentGame.player1Cards = currentGame.deck.slice(0, currentGame.deck.length / 2);
  currentGame.player2Cards = currentGame.deck.slice(currentGame.deck.length / 2);

  return currentGame;  // Return the game state
}

// Generate a deck of cards
function generateDeck(): Card[] {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let deck: Card[] = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ value, suit });
    });
  });

  // Shuffle the deck
  return deck.sort(() => Math.random() - 0.5);
}

// Draw a card for a player
export function getCardForPlayer(playerId: 'player1' | 'player2'): Card | null {
  if (!currentGame) {
    throw new Error("No game started");
  }

  let drawnCard: Card | null = null;

  // Draw a card from the player's deck
  if (playerId === 'player1' && currentGame.player1Cards.length > 0) {
    drawnCard = currentGame.player1Cards.pop() || null;
  } else if (playerId === 'player2' && currentGame.player2Cards.length > 0) {
    drawnCard = currentGame.player2Cards.pop() || null;
  }

  return drawnCard;
}

// Determine the winner based on the remaining cards
export function getWinner(): string {
  if (!currentGame) {
    throw new Error("No game started");
  }

  if (currentGame.player1Cards.length === 0 && currentGame.player2Cards.length === 0) {
    return "No cards left to determine a winner";
  }

  if (currentGame.player1Cards.length === 0) {
    return currentGame.player2;
  } else if (currentGame.player2Cards.length === 0) {
    return currentGame.player1;
  } else {
    return "The game is still ongoing";
  }
}
