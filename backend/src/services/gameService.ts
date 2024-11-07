import { startGame, drawCards, checkWinner } from '../gameLogic';
import { Game } from '../models/gameModel';

export const initializeGame = (player1: string, player2: string): Game => {
  return startGame(player1, player2);
};

export const getCardForPlayer = (playerId: string) => {
  return drawCards();
};

export const getWinner = () => {
  return checkWinner();
};
