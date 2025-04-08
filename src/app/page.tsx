"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQS";
import Blog from "@/components/Blog";
export default function HomePage() {
  return (
    <main className="bg-pink-50 text-gray-800 font-sans">
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <FAQs />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

