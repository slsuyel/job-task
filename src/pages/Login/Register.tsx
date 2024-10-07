import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { Eye, EyeOff } from "lucide-react"; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
const navigate = useNavigate()
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    const user = {
      name,
      phone: phoneNumber,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuccess("User registered successfully!");
        setError("");
  
        // Store the token in localStorage
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        navigate('/profile');

        console.log("Registration Success:", data);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong!");
        setSuccess("");
        console.error("Registration Error:", errorData);
      }
    } catch (error) {
      setError("Failed to connect to the server.");
      setSuccess("");
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

        {/* Show success message */}
        {success && <p className="text-green-500 text-center">{success}</p>}

        {/* Show error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <EyeOff className=" mt-6"  size={20} /> : <Eye className=" mt-6"  size={20} />}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
