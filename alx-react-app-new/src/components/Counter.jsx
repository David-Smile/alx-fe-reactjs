import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '32px auto', padding: '24px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '300px', background: '#f9f9f9', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem', borderRadius: '4px', border: 'none', background: '#1e90ff', color: '#fff', cursor: 'pointer' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem', borderRadius: '4px', border: 'none', background: '#ff6347', color: '#fff', cursor: 'pointer' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 8px', padding: '8px 16px', fontSize: '1rem', borderRadius: '4px', border: 'none', background: '#888', color: '#fff', cursor: 'pointer' }}>Reset</button>
    </div>
  );
}

export default Counter; 