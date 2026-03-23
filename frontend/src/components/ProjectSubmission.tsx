import React, { useState } from 'react';

const ProjectSubmission: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    supervisor: '',
    abstract: '',
    year: new Date().getFullYear(),
    area_of_law: '',
    degree_type: 'LLB',
    keywords: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // In a real app, we'd use FormData to upload the file + metadata
      const response = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, author_id: 1 }) // Mock author_id
      });
      
      if (response.ok) {
        setStep(3);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="submit" style={{ padding: '8rem 0', background: 'var(--bg-darker)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Submit Your Research</h2>
          
          {/* Progress Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ color: step >= 1 ? 'var(--primary)' : 'var(--text-secondary)' }}>1. Metadata</div>
            <div style={{ color: step >= 2 ? 'var(--primary)' : 'var(--text-secondary)' }}>2. Document</div>
            <div style={{ color: step >= 3 ? 'var(--primary)' : 'var(--text-secondary)' }}>3. Success</div>
          </div>

          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Project Title</label>
                  <input name="title" required value={formData.title} onChange={handleChange} type="text" placeholder="Title of your research" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Supervisor</label>
                  <input name="supervisor" required value={formData.supervisor} onChange={handleChange} type="text" placeholder="e.g. Prof. Okoro" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Area of Law</label>
                  <select name="area_of_law" value={formData.area_of_law} onChange={handleChange} style={inputStyle}>
                    <option value="">Select Area</option>
                    <option value="Constitutional Law">Constitutional Law</option>
                    <option value="Maritime Law">Maritime Law</option>
                    <option value="Commercial Law">Commercial Law</option>
                  </select>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Abstract</label>
                  <textarea name="abstract" required value={formData.abstract} onChange={handleChange} rows={4} placeholder="Brief summary of your research..." style={inputStyle}></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Continue to Upload</button>
            </form>
          )}

          {step === 2 && (
            <div>
              <div style={{ 
                border: '2px dashed rgba(212, 175, 55, 0.3)', 
                borderRadius: '12px', 
                padding: '4rem 2rem', 
                textAlign: 'center',
                marginBottom: '2rem',
                background: 'rgba(255, 255, 255, 0.02)'
              }}>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Upload your research project (PDF preferred)</p>
                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
                <label htmlFor="file-upload" className="btn-primary" style={{ display: 'inline-block', cursor: 'pointer' }}>
                  {file ? file.name : 'Select File'}
                </label>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', color: '#fff' }}>Back</button>
                <button onClick={handleSubmit} disabled={!file || submitting} className="btn-primary" style={{ flex: 2 }}>
                  {submitting ? 'Submitting...' : 'Complete Submission'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ marginBottom: '1rem' }}>Submission Received!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Your research project has been submitted for faculty review. You will receive an email once it is approved and published.</p>
              <button onClick={() => { setStep(1); setFormData({ ...formData, title: '', abstract: '' }); setFile(null); }} className="btn-primary">Submit Another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none'
};

export default ProjectSubmission;
