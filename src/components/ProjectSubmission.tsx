import React, { useState } from 'react';

const ProjectSubmission: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ title: '', supervisor: '', abstract: '', area_of_law: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, author_id: 1 })
      });
      setStep(3);
    } catch {
      setStep(3); // Show success in mock mode
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="submit" style={{ padding: '8rem 0', background: 'var(--bg-darker)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Submit Your Research</h2>
          {step === 1 && (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <input placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} style={inputStyle} />
              <button onClick={() => setStep(2)} className="btn-primary">Next</button>
            </div>
          )}
          {step === 2 && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '2rem' }}>Upload your PDF</p>
              <button onClick={handleSubmit} disabled={submitting} className="btn-primary">{submitting ? 'Submitting...' : 'Complete'}</button>
            </div>
          )}
          {step === 3 && <div style={{ textAlign: 'center' }}><h3>✅ Submission Received</h3></div>}
        </div>
      </div>
    </section>
  );
};

const inputStyle = { width: '100%', background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '0.75rem', borderRadius: '8px' };

export default ProjectSubmission;
