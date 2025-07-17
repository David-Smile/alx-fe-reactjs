function Services() {
  return (
    <div style={{ padding: '40px 20px', background: 'linear-gradient(90deg, #e0ffe0 60%, #b5ffd6 100%)', borderRadius: '16px', margin: '32px auto', maxWidth: '700px', boxShadow: '0 2px 12px rgba(50,205,50,0.07)', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#32cd32', marginBottom: '16px', fontWeight: 700, letterSpacing: '1px' }}>Our Services</h1>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#222', fontWeight: 500 }}>
        <li style={{ margin: '12px 0', background: '#f6fff6', borderRadius: '8px', padding: '10px 0', boxShadow: '0 1px 4px rgba(50,205,50,0.05)' }}>Technology Consulting</li>
        <li style={{ margin: '12px 0', background: '#f6fff6', borderRadius: '8px', padding: '10px 0', boxShadow: '0 1px 4px rgba(50,205,50,0.05)' }}>Market Analysis</li>
        <li style={{ margin: '12px 0', background: '#f6fff6', borderRadius: '8px', padding: '10px 0', boxShadow: '0 1px 4px rgba(50,205,50,0.05)' }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services; 