/* eslint-disable @typescript-eslint/no-explicit-any */
import { callApi } from "@/utils/functions";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import { Eye, EyeOff } from "lucide-react"; // Import Eye and EyeOff icons
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'; // Import PhoneInput and validation
import 'react-phone-number-input/style.css'; // Import styles for PhoneInput

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(""); // Set phoneNumber as string or undefined
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setError(""); 

    // Validate the phone number format
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const loginData = { phone: phoneNumber, password };
    try {
      const response = await callApi("POST", "/login", loginData); 
      console.log(response);
      if (response.token) {
        localStorage.setItem("token", response.token); 
        navigate("/home");
      } else {
        setError(response.message || "Login failed. Please check your credentials.");
      }
    } catch (error: any) {
      console.log(error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {/* Show error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Phone Number Input using react-phone-number-input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <PhoneInput
              international
              defaultCountry="BD"
              countryCallingCodeEditable={false}
              value={phoneNumber}
              onChange={setPhoneNumber} // This should be a string or undefined
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password Input with Eye Icon */}
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
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <EyeOff className="mt-6" size={20} /> : <Eye className="mt-6" size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Don't have an account? Register link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
