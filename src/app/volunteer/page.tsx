"use client";
import React from "react";

export default function VolunteerDashboard() {
  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Volunteer Dashboard</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">📋 My Assigned Cases</h3>
          <p className="text-gray-600">You haven’t been assigned any cases yet.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">📢 New Requests</h3>
          <p className="text-gray-600">No new volunteer requests currently.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">💬 Messages</h3>
          <p className="text-gray-600">You don’t have any messages yet.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">⚙️ Profile Settings</h3>
          <p className="text-gray-600">Update your name, email, and more here.</p>
        </div>
      </div>
    </main>
  );
}
