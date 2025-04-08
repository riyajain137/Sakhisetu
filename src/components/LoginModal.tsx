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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-pink-600 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form className="space-y-4">
          {/* Signup-only field */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-pink-300 p-3 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-pink-300 p-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-pink-300 p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span
              className="text-pink-600 font-semibold cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
