function MainContent() {
    return (
        <main style={{ background: 'linear-gradient(90deg, #f0f8ff 60%, #e0e7ff 100%)', padding: '32px', borderRadius: '16px', margin: '32px auto', textAlign: 'center', maxWidth: '600px', boxShadow: '0 2px 12px rgba(30,144,255,0.07)' }}>
            <p style={{ fontSize: '1.3rem', color: '#222', margin: '0', fontWeight: 500, letterSpacing: '1px' }}>I love to visit <span style={{ color: '#1e90ff', fontWeight: 700 }}>New York</span>, <span style={{ color: '#ff69b4', fontWeight: 700 }}>Paris</span>, and <span style={{ color: '#32cd32', fontWeight: 700 }}>Tokyo</span>.</p>
        </main>
    );
}

export default MainContent;