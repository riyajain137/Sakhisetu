'use client';
import React from 'react';
export default function HeroSection() {
    return (
      <section className="text-center py-20 bg-gradient-to-r from-pink-100 to-white">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Empowering Rural Widows Through Technology
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Legal aid, skill training, emotional support & financial independence — all in one platform.
        </p>
        <a href="#services" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Explore Services
        </a>
      </section>
    );
  }
  