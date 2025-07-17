import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '40px 20px', background: 'linear-gradient(90deg, #e0e7ff 60%, #f0f8ff 100%)', borderRadius: '16px', margin: '32px auto', maxWidth: '700px', boxShadow: '0 2px 12px rgba(30,144,255,0.07)', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#1e90ff', marginBottom: '16px', fontWeight: 700, letterSpacing: '1px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #b0c4de', fontSize: '1rem' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #b0c4de', fontSize: '1rem' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #b0c4de', fontSize: '1rem', minHeight: '80px' }}
        />
        <button type="submit" style={{ padding: '12px', borderRadius: '6px', border: 'none', background: '#1e90ff', color: '#fff', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.2s' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact; 