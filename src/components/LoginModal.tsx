"use client";
import React, { useState } from "react";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("widow");

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg border border-pink-300 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {/* Toggle Login / Signup */}
        <div className="flex justify-center space-x-6 mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l ${
              isLogin
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-600 hover:bg-pink-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r ${
              !isLogin
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-600 hover:bg-pink-200"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="widow"
              checked={role === "widow"}
              onChange={() => setRole("widow")}
              className="accent-pink-500"
            />
            <span className="text-gray-700">Widow</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="volunteer"
              checked={role === "volunteer"}
              onChange={() => setRole("volunteer")}
              className="accent-pink-500"
            />
            <span className="text-gray-700">Volunteer</span>
          </label>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
}
