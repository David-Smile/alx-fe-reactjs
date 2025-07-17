import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: 'linear-gradient(90deg, #1e90ff 60%, #32cd32 100%)', padding: '18px 0', marginBottom: '32px', boxShadow: '0 2px 12px rgba(30,144,255,0.10)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#fff', letterSpacing: '2px', marginRight: '32px' }}>MyCompany</span>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '6px 14px', borderRadius: '4px', transition: 'background 0.2s' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '6px 14px', borderRadius: '4px', transition: 'background 0.2s' }}>About</Link>
        <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '6px 14px', borderRadius: '4px', transition: 'background 0.2s' }}>Services</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '6px 14px', borderRadius: '4px', transition: 'background 0.2s' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar; 