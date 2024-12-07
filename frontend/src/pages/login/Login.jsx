import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-80 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-teal-300'> Catch-Up</span>
                </h1>
                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-zinc-300'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='input input-bordered input-info w-full max-w-xs'/>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-zinc-300'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='input input-bordered input-info w-full max-w-xs' />
                    </div>

                    <a href='#' className='text-sm text-zinc-300 hover:underline hover:text-blue-400 mt-2 inline-block'>
                        Don't have an account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 max-w-xs'>Login</button>
                    </div>
                </form>
        </div> 
    </div>
  )
}

export default Login
