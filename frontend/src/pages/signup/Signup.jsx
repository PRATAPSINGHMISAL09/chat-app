import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
    const [inputs,setInputs] = useState({
      fullname: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: ''
    })

  return <div className='flex flex-col items-center justify-center min-w-80 mx-auto' >
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Signup
        <span className="text text-teal-300"> Catch-Up</span>
      </h1>

      <form>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-zinc-300">Fullname</span>
            </label>
            <input
              type="text" placeholder="Enter fullname" className="input input-bordered input-info w-full max-w-xs"
              value={inputs.fullname}
               />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-zinc-300">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered input-info w-full max-w-xs"
            value={inputs.username}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-zinc-300">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered input-info w-full max-w-xs"
            value={inputs.password}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-zinc-300">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered input-info w-full max-w-xs"
            value={inputs.confirmPassword}
            />
          </div>
          <GenderCheckbox/>
          <Link to='/login' className='text-sm text-zinc-300 hover:underline hover:text-blue-400 mt-2 inline-block'>
            Already have an account?
           </Link>
           <div>
               <button className='btn btn-block btn-sm mt-2 max-w-xs'>Signup</button>
            </div>
      </form>
      </div>
  </div>
};
export default Signup
