import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center py-10">
        <div className="flex max-w-lg flex-col justify-center ">
          <div className="flex items-center justify-center">
            <div className="font-poppins text-4xl font-black">Login</div>
          </div>
          <div className="mt-10 flex flex-col">
            <input
              type="text"
              placeholder="username"
              className="rounded border-2 border-black p-2 outline-none"
            />
            <input
              type="text"
              placeholder="password"
              className="mt-5 rounded border-2 border-black p-2 outline-none"
            />
          </div>
          <button className="mt-5 rounded bg-violet-600 p-2 capitalize text-white hover:bg-violet-900">
            login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
