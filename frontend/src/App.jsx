import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Homepage from './pages/home/Homepage.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'
function App() {
  const {authUser} = useAuthContext();
  return (
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Homepage /> : <Navigate to="/login" />}/>
          <Route path='/home' element={authUser ? <Homepage /> : <Navigate to="/login" />}/>
          <Route path='/signup' element={authUser ? <Navigate to ="/" />: <Signup/>}/>
          <Route path='/login' element={authUser ? <Navigate to ="/" />:<Login/>}/>
        </Routes>
        <Toaster/>
      </div>
  )
}

export default App;
