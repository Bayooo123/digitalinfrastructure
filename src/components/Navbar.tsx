import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(10, 12, 16, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>UNILAG Law Repo</div>
        <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
          <a href="#search">Search</a>
          <a href="#about">About</a>
          <a href="#submit">Submit</a>
          <a href="#login" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
