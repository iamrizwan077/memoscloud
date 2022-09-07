import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex py-8">
      <div className=" flex flex-col bg-white  shadow-2xl rounded-3xl  border px-12 justify-center mx-auto">
        <div className="font-semibold text-3xl py-6 ">Sign Up</div>
        <form onSubmit="" className="flex flex-col">
          <input
            className="px-2 py-2 mb-1 border border-gray-400 rounded"
            type="text"
            placeholder="Enter username"
          />
          <input
            className="px-2 mb-1 py-2 border border-gray-400 rounded"
            type="password"
            placeholder="Enter password"
          />
          <input
            className="px-2 mb-1 py-2 border border-gray-400 rounded"
            type="password"
            placeholder="Confirm password"
          />
          <div>
            <input type="checkbox" className="" name="tc" value="tc" />
            <label className="text-sm pl-2" for="tc">
              I accept the terms and conditions
            </label>
          </div>
          <div className="flex">
            <button
              className="bg-red-400 mt-1 text-center w-fit px-6 py-2 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="or text-base my-4">or</div>
        <a className="mb-2 px-2  py-2 border rounded-full justify-center border-gray-400 flex items-center">
          <i className="fa-brands fa-google text-xl mr-4"></i>
          <span>Sign In with Google</span>
        </a>

        <a className="px-2  mb-8 py-2 border rounded-full justify-center border-gray-400 flex items-center">
          <i className="fa-brands fa-facebook-f text-xl mr-4"></i>
          <span>Sign In with Facebook</span>
        </a>
        <div className="text-xs flex justify-center pb-6">
          <span>Already registered?</span>
          <Link className="text-blue-700 pl-2" to="/accounts/signin">
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
