"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8002/api/users/Profile');
        const { fullName, email, image } = response.data;

        setProfileImage(image);
        setUserData({ email, fullName });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-300 text-center mb-6">
          Profile
        </h1>
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <label className="relative cursor-default">
              <img
                src={profileImage ? URL.createObjectURL(profileImage) : "/avatar.png"}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-full border-4 border-teal-400"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email" className="block text-teal-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              readOnly
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="fullname" className="block text-teal-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={userData.fullName}
              readOnly
              className="w-full p-2 border border-gray-700 bg-gray-900 rounded-md text-white cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
