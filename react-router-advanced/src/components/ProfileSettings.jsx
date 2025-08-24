import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h2>Profile Settings</h2>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Account Settings</h3>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              style={{ marginRight: '0.5rem' }}
            />
            Enable email notifications
          </label>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Theme:
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>User Information</h3>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Username:</strong> {user?.username}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>User ID:</strong> {user?.username ? user.username.toLowerCase().replace(' ', '-') : 'N/A'}
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h3>About Nested Routes</h3>
        <p>
          This settings page is a nested route under the Profile route. The URL structure is 
          <code>/profile/settings</code>, demonstrating how nested routes work in React Router.
        </p>
        <p>
          Each nested route maintains its own component state while being rendered within the 
          parent route's layout.
        </p>
      </div>
    </div>
  );
};

export default ProfileSettings;
