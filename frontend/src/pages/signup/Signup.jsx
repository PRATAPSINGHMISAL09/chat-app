import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.gender) {
      alert("Please select a gender!");
      return;
    }
    console.log("Form submitted:", inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup<span className="text-teal-300"> Catch-Up</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text text-zinc-300">Fullname</span>
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter fullname"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.fullname}
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="username" className="label">
              <span className="text-base label-text text-zinc-300">Username</span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className="label">
              <span className="text-base label-text text-zinc-300">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="label">
              <span className="text-base label-text text-zinc-300">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <p className="text-sm text-zinc-300 mb-2">Select Gender:</p>
            <GenderCheckbox
              oncheckboxchange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <Link
            to="/login"
            className="text-sm text-zinc-300 hover:underline hover:text-blue-400 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-4 max-w-xs">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
