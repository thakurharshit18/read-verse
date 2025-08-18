import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleregister = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
     const res =  await axios.post("https://read-verse.onrender.com/api/users/login", {
        
        Email: email,
        Password:password
      });
      console.log("User registered successfully");
      localStorage.setItem("token",res.data.token);
      navigate('/'); // ✅ redirect to Home page
    } catch (error) {
      console.log("Registration error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Login</h1>

      <form onSubmit={handleregister} className="flex flex-col gap-4 border p-6 w-80 shadow-lg">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
       
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      <p className="mt-4">
        Don't have an account? <Link to={('/Signup')} className="text-blue-500">Register Here!</Link>
      </p>
    </div>
  );
};

export default Login;
