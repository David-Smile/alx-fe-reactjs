import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to React Router Advanced Demo</h1>
      <p>This application demonstrates advanced routing techniques with React Router.</p>
      
      <div style={{ margin: '2rem 0' }}>
        <h2>Features:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Nested Routes</li>
          <li>✅ Dynamic Routing</li>
          <li>✅ Protected Routes</li>
          <li>✅ Authentication Simulation</li>
        </ul>
      </div>

      {isAuthenticated ? (
        <div style={{ margin: '2rem 0' }}>
          <p>Welcome back, {user?.username}!</p>
          <button
            onClick={logout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{ margin: '2rem 0' }}>
          <p>Please login to access protected routes.</p>
          <Link
            to="/login"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              display: 'inline-block'
            }}
          >
            Login
          </Link>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h3>Navigation:</h3>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/profile"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Profile (Protected)
          </Link>
          <Link
            to="/blog/post-1"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#17a2b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Blog Post 1
          </Link>
          <Link
            to="/blog/post-2"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#17a2b8',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            Blog Post 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
