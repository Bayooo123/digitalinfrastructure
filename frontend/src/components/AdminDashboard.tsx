import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  const [pendingProjects, setPendingProjects] = useState<any[]>([]);
  const [stats] = useState({
    total: 2540,
    pending: 12,
    published: 2528,
    topArea: 'Constitutional Law'
  });

  useEffect(() => {
    // In a real app, fetch pending projects from API
    setPendingProjects([
      { id: 101, title: 'Land Use Act and Urban Development', author: 'Bose Afolayan', area: 'Property Law', date: '2026-03-20' },
      { id: 102, title: 'Intellectual Property in Nigerian Music', author: 'Emeka Obi', area: 'IP Law', date: '2026-03-21' },
      { id: 103, title: 'Environmental Liability in Oil Sector', author: 'Zainab Musa', area: 'Environmental Law', date: '2026-03-22' },
    ]);
  }, []);

  return (
    <section id="admin" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Management Dashboard</h2>
        
        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Research</div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>{stats.total}</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Pending Review</div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#FFD700' }}>{stats.pending}</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Top Area</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{stats.topArea}</div>
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Pending Submissions
            <span style={{ fontSize: '0.9rem', fontWeight: '400', color: 'var(--text-secondary)' }}>Requires your attention</span>
          </h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Title</th>
                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Author</th>
                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Area</th>
                <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Date</th>
                <th style={{ padding: '1rem', color: 'var(--text-secondary)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingProjects.map(project => (
                <tr key={project.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>{project.title}</td>
                  <td style={{ padding: '1rem' }}>{project.author}</td>
                  <td style={{ padding: '1rem' }}><span style={{ fontSize: '0.8rem', background: 'rgba(212,175,55,0.1)', color: 'var(--primary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{project.area}</span></td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{project.date}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <button style={{ color: '#4CAF50', marginRight: '1rem', fontWeight: '600' }}>Approve</button>
                    <button style={{ color: '#F44336', fontWeight: '600' }}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
