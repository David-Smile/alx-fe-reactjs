import './App.css'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx'
function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter />
    </div>
  )
}

export default App
