import express, { Request, Response } from 'express';
import { query, getMockProjects } from '../db';

const router = express.Router();

// Get all projects (with optional filters)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { area, year, search } = req.query;
    
    // In a real scenario, we'd build a dynamic SQL query
    // For now, if DATABASE_URL is missing, return mock data
    if (!process.env.DATABASE_URL) {
      let projects = getMockProjects();
      if (area) projects = projects.filter((p: any) => p.area_of_law === area);
      if (year) projects = projects.filter((p: any) => p.year === parseInt(year as string));
      if (search) {
        const s = (search as string).toLowerCase();
        projects = projects.filter((p: any) => p.title.toLowerCase().includes(s) || p.author.toLowerCase().includes(s));
      }
      return res.json(projects);
    }

    const result = await query('SELECT * FROM projects WHERE status = $1', ['published']);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Submit a project
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, author_id, abstract, year, area_of_law } = req.body;
    
    if (!process.env.DATABASE_URL) {
      return res.status(201).json({ message: 'Project submitted (Mock Mode)', project: req.body });
    }

    const result = await query(
      'INSERT INTO projects (title, author_id, abstract, year, area_of_law, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, author_id, abstract, year, area_of_law, 'pending']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit project' });
  }
});

export default router;
