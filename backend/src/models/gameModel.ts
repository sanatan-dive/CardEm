export interface Card {
    value: number; // Numeric value for comparison
    suit: 'hearts' | 'diamonds' | 'clubs' | 'spades'; // Suit of the card
  }
  
  
  export interface Game {
    player1: string;
    player2: string;
    player1Cards: Card[];
    player2Cards: Card[];
    deck: Card[];
  }
  
  export const createGameModel = (player1: string, player2: string): Game => ({
    player1,
    player2,
    player1Cards: [],
    player2Cards: [],
    deck: [],
  });
  