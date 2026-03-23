import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  author: string;
  supervisor: string;
  year: number;
  area_of_law: string;
  degree_type: string;
  abstract: string;
}

const ProjectSearch: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [areaFilter, setAreaFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [areaFilter]);

  const fetchProjects = async (search = '') => {
    setLoading(true);
    try {
      const url = new URL('http://localhost:5000/api/projects');
      if (search) url.searchParams.append('search', search);
      if (areaFilter) url.searchParams.append('area', areaFilter);
      
      const response = await fetch(url.toString());
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProjects(searchTerm);
  };

  return (
    <section id="search" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Explore the Repository</h2>
        
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', alignItems: 'flex-start' }}>
          {/* Filters Sidebar */}
          <div className="glass-card" style={{ width: '300px', flexShrink: 0 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Filters</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Area of Law</label>
              <select 
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '8px'
                }}
              >
                <option value="">All Areas</option>
                <option value="Constitutional Law">Constitutional Law</option>
                <option value="Maritime Law">Maritime Law</option>
                <option value="Commercial Law">Commercial Law</option>
                <option value="Criminal Law">Criminal Law</option>
              </select>
            </div>
            {/* Additional filters can be added here */}
          </div>

          {/* Search Results */}
          <div style={{ flex: 1 }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <input 
                type="text" 
                placeholder="Search by title, author, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '1rem',
                  borderRadius: '8px'
                }}
              />
              <button type="submit" className="btn-primary">Search</button>
            </form>

            {loading ? (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading scholarship...</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {projects.map(project => (
                  <div key={project.id} className="glass-card" style={{ transition: 'var(--transition)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase' }}>{project.area_of_law}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{project.year} | {project.degree_type}</span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {project.abstract}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem' }}>By <span style={{ color: '#fff' }}>{project.author}</span></span>
                      <button style={{ color: 'var(--primary)', fontWeight: '600' }}>View Details →</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSearch;
