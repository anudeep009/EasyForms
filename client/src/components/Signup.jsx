"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Signup data:", data);
    // Implement signup logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-teal-400 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.username && (
              <span className="text-red-400 text-xs">
                {errors.username.message}
              </span>
            )}
          </div>

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
            <label htmlFor="fullname" className="block text-teal-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              {...register("fullname", { required: "Full name is required" })}
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white"
            />
            {errors.fullname && (
              <span className="text-red-400 text-xs">{errors.fullname.message}</span>
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
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-teal-300 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="underline cursor-pointer text-teal-200 hover:text-teal-100"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
