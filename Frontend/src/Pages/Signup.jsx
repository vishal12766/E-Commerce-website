import React, { useState } from "react";


const Signup = () => {
  const [form, setform] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  })

  const handleChange = (e) => {
  const { name, value } = e.target;

  setform((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSignup=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:3000/signup",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form),
    })

    const data=await response.json();
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff99f] px-4 py-8">
      <div className="w-full max-w-md bg-[#541F03] shadow-xl text-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center mt-2">
          Sign up to get started
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={form.confirmPassword}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black"
              required
            />
          </div>

          <button
            type="submit"
            
            className="w-full bg-gray-300 text-black py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer hover:underline">
            <a href="/Gelato/login"></a>
            <a href="/Gelato/login">Log In</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;