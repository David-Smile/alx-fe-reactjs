// src/App.jsx
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>GitHub User Search</h1>
      <SearchBar setUser={setUser} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
