import React, { useState } from 'react'


const Login = () => {
  const [form, setform] = useState({
    email:"",
    password:"",
  })

  const handleChange = (e)=> {
    const {name,value}=e.target;
    setform((prev)=>({
      ...prev,
      [name]:value,
    }));
  };

  const handleLogin=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);
  };

  

  return (
     <div className="min-h-screen flex items-center justify-center bg-[#fff99f] px-4">
      <div className="w-full max-w-md bg-[#541F03] shadow-xl text-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-white mt-2">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#541F03]"
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
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#541F03]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[gray] text-black py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 ">
          Don't have an account?{" "}
          <span className=" font-semibold cursor-pointer hover:underline">
            <a href="/Gelato/signup">Sign Up</a>
          </span>
        </p>
      </div>    
    </div>
  );
}

 
export default Login