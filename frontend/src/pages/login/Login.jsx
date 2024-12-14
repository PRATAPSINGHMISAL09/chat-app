import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'
const Login = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {loading , login} = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username , password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-teal-300'> Catch-Up</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-zinc-300'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='input input-bordered input-info w-full max-w-xs'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-zinc-300'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='input input-bordered input-info w-full max-w-xs'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/signup' className='text-sm text-zinc-300 hover:underline hover:text-blue-400 mt-2 inline-block'>
                        Don't have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 max-w-xs'
                        disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'Login'}
                        </button>
                    </div>
                </form>
        </div> 
    </div>
  )
}

export default Login
