import express from 'express';
import cors from 'cors';
import jokesRouter from './routes/jokes';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/joke', jokesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
