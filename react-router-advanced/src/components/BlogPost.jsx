import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  // Sample blog post data
  const blogPosts = {
    'post-1': {
      title: 'Getting Started with React Router',
      content: 'React Router is a powerful routing library for React applications. It allows you to handle navigation, nested routes, and dynamic routing with ease. In this post, we\'ll explore the basics of setting up React Router in your project.',
      author: 'John Doe',
      date: 'January 15, 2024'
    },
    'post-2': {
      title: 'Advanced Routing Techniques',
      content: 'Beyond basic routing, React Router offers advanced features like protected routes, nested routes, and dynamic parameter handling. These features help create complex, user-friendly navigation structures in your applications.',
      author: 'Jane Smith',
      date: 'February 3, 2024'
    },
    'post-3': {
      title: 'Authentication and Route Protection',
      content: 'Securing your routes is crucial for many applications. Learn how to implement protected routes that require authentication, handle redirects, and manage user sessions with React Router.',
      author: 'Mike Johnson',
      date: 'March 10, 2024'
    }
  };

  const post = blogPosts[postId];

  if (!post) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block',
            marginTop: '1rem'
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link 
        to="/" 
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          display: 'inline-block',
          marginBottom: '2rem'
        }}
      >
        ← Back to Home
      </Link>

      <article>
        <h1>{post.title}</h1>
        <div style={{ color: '#666', marginBottom: '2rem' }}>
          <span>By {post.author}</span> • <span>{post.date}</span>
        </div>
        
        <div style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
          <p>{post.content}</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>About Dynamic Routing</h3>
          <p>
            This blog post demonstrates dynamic routing in React Router. The URL contains a parameter 
            (<code>:postId</code>) that is extracted using the <code>useParams</code> hook.
          </p>
          <p>
            Current post ID: <strong>{postId}</strong>
          </p>
          <p>
            Try visiting different post URLs:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <Link 
              to="/blog/post-1"
              style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: '#17a2b8',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}
            >
              Post 1
            </Link>
            <Link 
              to="/blog/post-2"
              style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: '#17a2b8',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}
            >
              Post 2
            </Link>
            <Link 
              to="/blog/post-3"
              style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: '#17a2b8',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}
            >
              Post 3
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
