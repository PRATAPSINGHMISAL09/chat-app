import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Homepage from './pages/home/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
  )
}

export default App;
