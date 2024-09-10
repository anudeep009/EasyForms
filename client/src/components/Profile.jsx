"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [apiError, setApiError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    try {
      // Assuming you have an endpoint to update the user profile
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("fullName", data.fullname);
      formData.append("profileImage", profileImage);

      const response = await axios.put("http://localhost:8002/api/users/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      if (error.response) {
        setApiError(error.response.data.message || "An error occurred during profile update.");
      } else {
        setApiError("Network error, please try again.");
      }
      console.error("Profile update error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-6">
          Profile
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-center">
            <label htmlFor="profileImage" className="relative cursor-pointer">
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img
                src={profileImage ? URL.createObjectURL(profileImage) : "/default-avatar.png"}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-4 border-teal-400"
              />
              <span className="text-teal-400 underline mt-2 cursor-pointer">Change Photo</span>
            </label>
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

          {apiError && <p className="text-red-400 text-xs">{apiError}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
