import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projects';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'UNILAG Law Repo API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
