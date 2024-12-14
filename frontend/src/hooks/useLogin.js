import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
const useLogin = () => {
  const [loading ,setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username , password) => {

    const isValid = handleInputErrors(username , password);
    if (!isValid) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ username, password })
      });
      const text = await res.text();
      const data = JSON.parse(text);
      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }
      toast.success('Login successful!');
      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }

  return {login , loading};
}

export default useLogin


function handleInputErrors(username, password) {    
    if (!username || !password) {
        toast.error('Please fill all the fields');
        return false;
    }
   
    return true;
}
