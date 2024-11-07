import { Card } from '../models/gameModel';

// Card suits
const suits: Card['suit'][] = ['hearts', 'diamonds', 'clubs', 'spades'];
const values: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // Jack=11, Queen=12, King=13, Ace=14

export const generateDeck = (): Card[] => {
  const deck: Card[] = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push({ value, suit });
    }
  }
  return deck;
};

export const shuffleDeck = (deck: Card[]): Card[] => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
  }
  return deck;
};
