import { Request, Response } from 'express';
import { openDb } from '../db';

export const getRandomJoke = async (req: Request, res: Response) => {
    try {
        const db = await openDb();
        const joke = await db.get('SELECT id, setup, punchline FROM jokes ORDER BY RANDOM() LIMIT 1');
        res.json(joke);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
