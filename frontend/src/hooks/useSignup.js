import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullname, username, password, confirmpassword, gender }) => {
        const isValid = handleInputErrors({ fullname, username, password, confirmpassword, gender });
        if (!isValid) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ fullname, username, password, confirmpassword, gender })
              });
            
            const text = await res.text(); 
            const data = JSON.parse(text); 
            
            if (!res.ok) {
                throw new Error(data.message || 'Signup failed');
            }
            toast.success('Signup successful!');

            localStorage.setItem('chat-user', JSON.stringify(data));

            setAuthUser(data);

        } catch (error) {
            console.error('Signup Error:', error); 
            toast.error(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullname, username, password, confirmpassword, gender }) {
    if (!fullname || !username || !password || !confirmpassword || !gender) {
        console.log('Debugging Inputs:', { fullname, username, password, confirmpassword, gender }); // Debug
        toast.error('Please fill all the fields');
        return false;
    }
    if (password !== confirmpassword) {
        toast.error('Passwords do not match');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }
    return true;
}
