import { useState } from "react";

export default function AuthForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(true);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isSignUp ? "Sign Up" : "Sign In"} Submitted`, form);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#1E3A5F] to-[#0F172A]">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96 transition-all duration-500 hover:shadow-2xl hover:bg-[#f7fafc] cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            required
          />
          {isSignUp && (
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#1E3A5F] text-white p-3 rounded-lg font-bold hover:bg-[#0F172A] transition-all duration-300 transform hover:scale-105"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-[#1E3A5F] font-semibold hover:text-[#0F172A] transition"
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
