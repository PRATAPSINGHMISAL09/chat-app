import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Homepage from './pages/home/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Homepage/>
      </div>
  )
}

export default App
