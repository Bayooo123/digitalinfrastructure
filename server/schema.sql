-- UNILAG Law Repository Database Schema

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'guest', -- admin, faculty, student, guest
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author_id INTEGER REFERENCES users(id),
    supervisor_id INTEGER REFERENCES users(id),
    abstract TEXT,
    keywords TEXT[],
    year INTEGER,
    degree_type VARCHAR(50), -- LLB, LLM, PhD
    area_of_law VARCHAR(100),
    status VARCHAR(50) DEFAULT 'draft', -- draft, pending, published
    file_url VARCHAR(255),
    views INTEGER DEFAULT 0,
    citations INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Access Requests Table
CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id),
    user_id INTEGER REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    request_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for Search
CREATE INDEX idx_projects_title ON projects(title);
CREATE INDEX idx_projects_year ON projects(year);
CREATE INDEX idx_projects_area ON projects(area_of_law);
