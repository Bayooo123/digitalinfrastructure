import React, { useState, useEffect } from 'react';

const ProjectSearch: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [areaFilter, setAreaFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [areaFilter]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const url = new URL('http://localhost:5000/api/projects');
      if (areaFilter) url.searchParams.append('area', areaFilter);
      const res = await fetch(url.toString());
      const data = await res.json();
      setProjects(data);
    } catch {
      // Mock data if server is down
      setProjects([
        { id: 1, title: 'Constitutional Law in Digital Age', author: 'Adebayo Smith', area_of_law: 'Constitutional Law', year: 2023, degree_type: 'LLB', abstract: 'Digital rights protection.' },
        { id: 2, title: 'Maritime Regulations', author: 'Chidi Njoku', area_of_law: 'Maritime Law', year: 2022, degree_type: 'LLM', abstract: 'Maritime security.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="search" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Explore the Repository</h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div className="glass-card" style={{ width: '300px', flexShrink: 0 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Filters</h3>
            <select value={areaFilter} onChange={e => setAreaFilter(e.target.value)} style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.75rem', borderRadius: '8px' }}>
              <option value="">All Areas</option>
              <option value="Constitutional Law">Constitutional Law</option>
              <option value="Maritime Law">Maritime Law</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            {loading ? <p>Loading...</p> : (
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {projects.map(p => (
                  <div key={p.id} className="glass-card">
                    <h3 style={{ marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>By {p.author} | {p.year}</p>
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
