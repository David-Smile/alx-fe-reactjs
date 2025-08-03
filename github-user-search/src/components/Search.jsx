import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUser(null);
    setLoading(true);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', width: '250px' }}
        />
        <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h3>{user.name || user.login}</h3>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
