import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../Contexts/UserContext'


const Signup = () => {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(form),
      })

      const data = await response.json();
      if (response.ok && (data.message === 'Signup successful' || data.msg === 'Signup successful')) {
        setUser(data.user);
        navigate('/');
      } else {
        setError(data.message || data.msg || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
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

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-500/20 text-sm text-red-200 text-center border border-red-400/50">
            {error}
          </div>
        )}

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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#fff99f] focus:ring-2 focus:ring-[#fff99f]/50"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#fff99f] focus:ring-2 focus:ring-[#fff99f]/50"
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
              placeholder="Create a password (min 6 chars)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#fff99f] focus:ring-2 focus:ring-[#fff99f]/50"
              required
              minLength={6}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none text-black focus:border-[#fff99f] focus:ring-2 focus:ring-[#fff99f]/50"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full  bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-500 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline text-[#fff99f]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
