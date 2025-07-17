function Header() {
    return (
        <header style={{ backgroundColor: 'linear-gradient(90deg, navy 60%, #1e90ff 100%)', color: 'white', textAlign: 'center', padding: '32px 0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', letterSpacing: '2px' }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700, textShadow: '1px 2px 8px rgba(0,0,0,0.12)' }}>My Favorite Cities</h1>
        </header>
    );
}

export default Header;