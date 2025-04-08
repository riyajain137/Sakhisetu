"use client";
import React from "react";

const blogPosts = [
  {
    title: "Government Schemes Every Widow Should Know",
    excerpt:
      "Explore key government schemes offering financial aid, training, and pensions for widows across India...",
    author: "Team SakhiSetu",
    date: "March 10, 2025",
  },
  {
    title: "5 Skills That Can Help You Start Earning From Home",
    excerpt:
      "Discover practical skills like tailoring, agri-jobs, and digital literacy that can help you earn independently...",
    author: "Skill Trainers Network",
    date: "March 25, 2025",
  },
  {
    title: "Mental Health Support for Rural Women",
    excerpt:
      "Learn why emotional support matters and how SakhiSetu creates safe spaces for rural women to open up...",
    author: "Emotional Health India",
    date: "April 3, 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Latest Blogs</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-pink-700">{post.title}</h4>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                <span>{post.author}</span> • <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
