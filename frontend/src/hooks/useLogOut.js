import React from 'react'
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useState } from 'react';

const useLogOut = () => {
  const [loading , setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }); 
      const text = await res.text(); 
      const data = JSON.parse(text); 
      
      if (!res.ok) {
        throw new Error(data.message || 'Logout failed');
      }
      toast.success('Logout successful!');
      localStorage.removeItem('chat-user');
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally { 
      setLoading(false);
    }
  }

  return {logout , loading};
}

export default useLogOut
