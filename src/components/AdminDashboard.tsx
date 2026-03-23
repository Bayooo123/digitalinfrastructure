import React, { useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [stats] = useState({ total: 2540, pending: 12 });

  return (
    <section id="admin" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ marginBottom: '3rem' }}>Management Dashboard</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)' }}>Total Research</div>
            <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>{stats.total}</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-secondary)' }}>Pending Review</div>
            <div style={{ fontSize: '2.5rem', color: '#FFD700' }}>{stats.pending}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
