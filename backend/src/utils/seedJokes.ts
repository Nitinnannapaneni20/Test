import { openDb } from '../db';
import jokes from './jokes.json';

async function seed() {
    const db = await openDb();
    await db.exec(`CREATE TABLE IF NOT EXISTS jokes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        setup TEXT,
        punchline TEXT
    )`);

    const insertStmt = await db.prepare('INSERT INTO jokes (type, setup, punchline) VALUES (?, ?, ?)');
    for (const joke of jokes) {
        await insertStmt.run(joke.type, joke.setup, joke.punchline);
    }
    await insertStmt.finalize();

    console.log("Seeding completed.");
    await db.close();
}

seed();
