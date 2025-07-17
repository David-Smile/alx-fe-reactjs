function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(90deg, #222 60%, #1e90ff 100%)', color: '#fff', textAlign: 'center', padding: '18px 0', marginTop: '40px', boxShadow: '0 -2px 8px rgba(30,144,255,0.10)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '1.5px' }}>
      &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
    </footer>
  );
}

export default Footer; 