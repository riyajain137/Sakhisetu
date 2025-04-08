"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What is SakhiSetu?",
    answer:
      "SakhiSetu is a platform that helps rural widows with legal aid, skill training, emotional support, and digital identity tools.",
  },
  {
    question: "Is the platform free to use?",
    answer:
      "Yes, all services offered through SakhiSetu are completely free for the users.",
  },
  {
    question: "How do I join a support group?",
    answer:
      "Click on the Emotional Support service, fill in your details, and our volunteers will connect with you soon.",
  },
  {
    question: "Can I update my information later?",
    answer:
      "Yes, if you receive a SakhiCard, your data can be updated by reaching out to our team through the contact section.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg text-pink-700"
              >
                {faq.question}
                <span className="text-2xl">{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
