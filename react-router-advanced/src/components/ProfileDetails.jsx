import { useAuth } from '../hooks/useAuth';

const ProfileDetails = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile Details</h2>
      <div style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Username:</strong> {user?.username || 'Not available'}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Email:</strong> {user?.username ? `${user.username}@example.com` : 'Not available'}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Member Since:</strong> January 2024
        </div>
        <div>
          <strong>Status:</strong> <span style={{ color: 'green' }}>Active</span>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>About Nested Routes</h3>
        <p>
          This section demonstrates nested routing. The Profile component acts as a parent route 
          that contains child routes for different profile sections (Details and Settings).
        </p>
        <p>
          The <code>Outlet</code> component in the parent route renders the matched child route component.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
