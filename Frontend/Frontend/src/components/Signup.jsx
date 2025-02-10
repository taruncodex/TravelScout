import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${isSignUp ? "Sign Up" : "Sign In"} Submitted`, form);

    try {
      const url = isSignUp
        ? "https://travelscout.onrender.com/signup"
        : "https://travelscout.onrender.com/login";
      
      const payload = isSignUp ? form : { email: form.email, password: form.password };

      const response = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message || "Success!");
      console.log("Server Response:", response.data);

      setForm({ name: "", email: "", phone: "", password: "" }); // Reset form after success
      
      if (!isSignUp) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setIsAuthenticated(true);
        navigate("/"); // Redirect to homepage after successful login
      }
    } catch (error) {
      console.error("Error Response:", error.response?.data);
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#1E3A5F] to-[#0F172A]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 transition-all duration-500 hover:shadow-2xl hover:bg-[#f7fafc] cursor-pointer">
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
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
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