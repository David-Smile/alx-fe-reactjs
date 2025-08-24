import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      backgroundColor: '#343a40',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link 
          to="/" 
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          React Router Demo
        </Link>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link
            to="/"
            style={{
              color: isActive('/') ? '#ffc107' : 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: isActive('/') ? '#495057' : 'transparent'
            }}
          >
            Home
          </Link>
          
          {isAuthenticated && (
            <Link
              to="/profile"
              style={{
                color: location.pathname.startsWith('/profile') ? '#ffc107' : 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                backgroundColor: location.pathname.startsWith('/profile') ? '#495057' : 'transparent'
              }}
            >
              Profile
            </Link>
          )}
          
          <Link
            to="/blog/post-1"
            style={{
              color: location.pathname.startsWith('/blog') ? '#ffc107' : 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: location.pathname.startsWith('/blog') ? '#495057' : 'transparent'
            }}
          >
            Blog
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {isAuthenticated ? (
          <>
            <span style={{ color: 'white' }}>Welcome, {user?.username}</span>
            <button
              onClick={logout}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
