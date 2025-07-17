const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid #d1d5db', boxShadow: '0 2px 8px rgba(30,144,255,0.08)', borderRadius: '12px', padding: '24px', margin: '24px auto', maxWidth: '350px', background: '#fff', textAlign: 'center', transition: 'box-shadow 0.3s', cursor: 'pointer' }}>
            <h2 style={{ color: '#1e90ff', fontSize: '2rem', margin: '0 0 12px 0', fontWeight: 600 }}>{props.name}</h2>
            <p style={{ fontSize: '1.1rem', margin: '8px 0' }}>Age: <span style={{ fontWeight: 'bold', color: '#222' }}>{props.age}</span></p>
            <p style={{ color: '#444', fontStyle: 'italic', margin: '8px 0 0 0' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;