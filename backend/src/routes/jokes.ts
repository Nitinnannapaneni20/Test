import express from 'express';
import { getRandomJoke } from '../controllers/jokesController';

const router = express.Router();

router.get('/random', getRandomJoke);

export default router;
