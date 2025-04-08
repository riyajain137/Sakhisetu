"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import React from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">SakhiSetu</h1>

        <nav className="flex items-center space-x-6 relative">
          <Link href="#services" className="hover:text-pink-500 transition">Services</Link>
          <Link href="#about" className="hover:text-pink-500 transition">About</Link>
          <Link href="#contact" className="hover:text-pink-500 transition">Contact</Link>
          <Link href="/volunteer" className="hover:text-pink-500 transition">Volunteer</Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-pink-500 focus:outline-none"
            >
              More ▾
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-pink-200 rounded-md shadow-lg z-50">
                <Link href="#testimonials" className="block px-4 py-2 hover:bg-pink-100">Testimonials</Link>
                <Link href="#faqs" className="block px-4 py-2 hover:bg-pink-100">FAQs</Link>
                <Link href="#blog" className="block px-4 py-2 hover:bg-pink-100">Blog</Link>
              </div>
            )}
          </div>

          {/* Modal Trigger */}
          <button
            onClick={() => setShowModal(true)}
            className="ml-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Login / Signup
          </button>
        </nav>
      </div>

      {/* Login / Signup Modal */}
      <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
