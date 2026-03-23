import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>FACULTY OF LAW</h1>
        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem', fontWeight: '400' }}>Digital Research Repository</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Explore and showcase the distinguished legal scholarships of the University of Lagos.
        </p>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', width: '100%', padding: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder="Search research, authors, area of law..." 
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
            <button className="btn-primary">Search Repository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
