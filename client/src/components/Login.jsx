"use client";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      await axios.post("http://localhost:8002/api/users/login", { 
        email: data.email,
        password: data.password,
      });
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Failed to login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-6">
          Login
        </h1>
        {errorMessage && <p className="text-red-400 text-center mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-teal-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.email && (
              <span className="text-red-400 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-teal-400 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.password && (
              <span className="text-red-400 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              isLoading ? "bg-teal-500 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-teal-300 mt-4">
          Don't have an account?{" "}
          <span
            onClick={handleNavigate}
            className="underline cursor-pointer text-teal-200 hover:text-teal-100"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
