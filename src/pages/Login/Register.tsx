import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import { callApi } from "@/utils/functions";
import Swal from "sweetalert2";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'; 
import 'react-phone-number-input/style.css'; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'Please enter a valid phone number.',
      });
      return;
    }

    const user = {
      name,
      phone: phoneNumber,
      password,
    };

    try {
      const response = await callApi('Post', '/register', user);
      console.log(response);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You have registered successfully.',
        });
        navigate('/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Something went wrong!',
        });
        console.error("Registration Error");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Failed to connect to the server.',
      });
      console.error("Error:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

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
              onChange={setPhoneNumber}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
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
              {showPassword ? <EyeOff className=" mt-6" size={20} /> : <Eye className=" mt-6" size={20} />}
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
