"use client";
import React from "react";

const testimonials = [
  {
    name: "Sunita Devi",
    feedback:
      "SakhiSetu helped me get legal support when I needed it the most. The volunteers were kind and patient.",
    location: "Uttar Pradesh",
  },
  {
    name: "Kamla Bhandari",
    feedback:
      "I learned stitching from the training videos and now earn from home. Thank you SakhiSetu!",
    location: "Rajasthan",
  },
  {
    name: "Anita Kumari",
    feedback:
      "The emotional support group gave me a new sense of belonging. I don’t feel alone anymore.",
    location: "Bihar",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
          What Our Users Say
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <div className="font-semibold text-pink-700">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
