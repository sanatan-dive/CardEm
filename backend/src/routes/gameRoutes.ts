import { Router } from 'express';
import { initializeGame, getCardForPlayer, getWinner } from '../services/gameService';

const router = Router();

router.post('/start', (req, res) => {
  const { player1, player2 } = req.body;
  const game = initializeGame(player1, player2);
  res.json(game);
});

router.post('/draw', (req, res) => {
  const { playerId } = req.body;
  const card = getCardForPlayer(playerId);
  res.json(card);
});

router.get('/winner', (req, res) => {
  const winner = getWinner();
  res.json({ winner });
});

export default router;
