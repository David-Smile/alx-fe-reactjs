// src/components/UserCard.jsx
const UserCard = ({ user }) => {
    if (!user) return null;
  
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        <img src={user.avatar_url} alt={user.login} width="100" />
        <h2>{user.name || user.login}</h2>
        <p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </p>
      </div>
    );
  };
  
  export default UserCard;
  