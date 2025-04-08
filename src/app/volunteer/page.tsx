"use client";
import React from "react";

export default function VolunteerDashboard() {
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-8">
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-2">
          Welcome, Volunteer! 💕
        </h1>
        <p className="text-gray-600">
          Thank you for being a changemaker. Here's your dashboard overview.
        </p>
      </section>

      {/* Tasks Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">📋 Assigned Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Card */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-pink-100">
            <h3 className="text-lg font-semibold text-pink-700">Community Workshop</h3>
            <p className="text-gray-600 mt-1">Date: April 10, 2025</p>
            <p className="text-gray-600">Location: Village Center</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
              View Details
            </button>
          </div>

          {/* Another Card */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-pink-100">
            <h3 className="text-lg font-semibold text-pink-700">Legal Aid Support</h3>
            <p className="text-gray-600 mt-1">Date: April 12, 2025</p>
            <p className="text-gray-600">Location: Online</p>
            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <h2 className="text-xl font-semibold text-pink-600 mb-4">📊 Your Impact</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100 flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="text-pink-700 font-bold text-2xl">12</p>
            <p className="text-gray-600">Widows Helped</p>
          </div>
          <div>
            <p className="text-pink-700 font-bold text-2xl">22 hrs</p>
            <p className="text-gray-600">Hours Volunteered</p>
          </div>
          <div>
            <p className="text-pink-700 font-bold text-2xl">4</p>
            <p className="text-gray-600">Events Participated</p>
          </div>
        </div>
      </section>
    </div>
  );
}
