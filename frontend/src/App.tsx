import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSearch from './components/ProjectSearch';
import ProjectSubmission from './components/ProjectSubmission';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProjectSearch />
        <ProjectSubmission />
        <AdminDashboard />
        
        {/* Statistics Section */}
        <section style={{ padding: '8rem 0', background: 'var(--bg-darker)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>2,500+</h3>
              <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Research Projects</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>150+</h3>
              <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Faculty Members</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>12,000+</h3>
              <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Downloads</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>450+</h3>
              <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Citations</p>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section style={{ padding: '8rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Why UNILAG Law Repository?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="glass-card">
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Digital Preservation</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Securely archiving legal scholarship for future generations of lawyers and researchers.</p>
              </div>
              <div className="glass-card">
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Global Visibility</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Integrated with Google Scholar and Semantic Scholar to amplify the reach of UNILAG Law research.</p>
              </div>
              <div className="glass-card">
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Academic Collaboration</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Facilitating external partnerships and funding opportunities through open-access scholarship.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© 2026 UNILAG Faculty of Law. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
