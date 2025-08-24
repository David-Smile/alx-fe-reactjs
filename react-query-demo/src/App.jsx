import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './PostsComponent.jsx'
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App
