import './App.css'
import UserProfile from './components/UserProfile.jsx'
function App() {
  return (
    <div>
      <UserProfile name="John" age={25} bio="I am a software engineer" />
    </div>
  )
}

export default App
