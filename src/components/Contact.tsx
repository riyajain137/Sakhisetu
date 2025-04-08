import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="bg-pink-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-6">Contact Us</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-pink-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-pink-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-pink-300 p-3 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-700">
          <p className="mb-2">📞 Phone: +91 9876543210</p>
          <p>📧 Email: sakhisetu.support@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
