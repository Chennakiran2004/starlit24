import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the Dress code?",
    answer: "Starlit Event dress code is inspired by Tollywood trends from 2010 to 2024.",
  },
  {
    question: "What is the event duration?",
    answer: "Total duration of the event will be 6 hours starting from 2PM to 8PM.",
  },
  {
    question: "Can you participate in multiple activities?",
    answer: "No, a single student can only participate in only one activity.",
  },
  {
    question: "Is there an entry fee?",
    answer: "No, The event is conducted for students.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-20 bg-gradient-to-b from-purple-100 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-800" style={{fontSize:"33px"}}>
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Got questions? We've got answers! Check out the details below.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold text-purple-800 flex justify-between items-center">
                {faq.question}
                <motion.span
                  className="text-gray-600 text-2xl transform transition-transform duration-300"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {activeIndex === index ? "−" : "+"}
                </motion.span>
              </h3>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  height: activeIndex === index ? "auto" : 0,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  height: { duration: 0.3, ease: "easeInOut" },
                }}
                className="overflow-hidden mt-3"
              >
                {activeIndex === index && <p className="text-gray-700">{faq.answer}</p>}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
