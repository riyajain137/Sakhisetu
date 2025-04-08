"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const servicesData = [
  {
    id: "legal",
    title: "🧾 Legal & Scheme Help",
    description: "Find eligible schemes, auto-filled forms, and rights info in your language.",
    formFields: ["Full Name", "Region", "Issue Type"],
  },
  {
    id: "skills",
    title: "🎓 Skill Training",
    description: "Short training videos in tailoring, agri-work, and microgigs. Start earning today!",
    formFields: ["Full Name", "Interested Skill"],
  },
  {
    id: "support",
    title: "🫂 Emotional Support",
    description: "Join a safe support group, share voice diaries, or speak to a volunteer.",
    formFields: ["Full Name", "Preferred Language"],
  },
  {
    id: "card",
    title: "🪪 SakhiCard",
    description: "Your digital identity: training history, pension status & skill certificates.",
    formFields: ["Full Name", "Aadhaar Number"],
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-pink-600">What We Offer</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map(service => (
            <motion.div
              key={service.id}
              onClick={() => handleToggle(service.id)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-pink-100 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
            >
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p>{service.description}</p>

              <AnimatePresence>
                {activeCard === service.id && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 space-y-2 overflow-hidden"
                    onClick={(e) => e.stopPropagation()} // Prevent collapse on typing
                  >
                    {service.formFields.map((field, idx) => (
                      <input
                        key={idx}
                        type="text"
                        placeholder={field}
                        className="w-full border border-pink-300 p-2 rounded-md"
                      />
                    ))}
                    <button
                      className="mt-2 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
                      type="button"
                      onClick={() => alert("Form submitted!")}
                    >
                      Submit
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
