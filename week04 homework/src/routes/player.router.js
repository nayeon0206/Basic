import express from 'express';
import {
  createPlayer,
  deletePlayer,
  getPlayers,
  updatePlayer,
} from '../controllers/player.controller.js';

const playerRouter = express.Router();

playerRouter.get('/players', getPlayers);

playerRouter.post('/players', createPlayer);

playerRouter.delete('/players/:name', deletePlayer);

playerRouter.patch('/players/:name', updatePlayer);

export default playerRouter;
