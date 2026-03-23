import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export const query = async (text: string, params?: any[]) => {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// Mock data for initial development if DB is not connected
export const getMockProjects = () => [
  {
    id: 1,
    title: 'Constitutional Law in Digital Age',
    author: 'Adebayo Smith',
    supervisor: 'Prof. Okoro',
    year: 2023,
    area_of_law: 'Constitutional Law',
    degree_type: 'LLB',
    abstract: 'An exploration of how digital rights are protected under the Nigerian constitution.'
  },
  {
    id: 2,
    title: 'Maritime Regulations in West Africa',
    author: 'Chidi Njoku',
    supervisor: 'Dr. Mensah',
    year: 2022,
    area_of_law: 'Maritime Law',
    degree_type: 'LLM',
    abstract: 'A comparative study of maritime security frameworks in Nigeria and Ghana.'
  }
];
