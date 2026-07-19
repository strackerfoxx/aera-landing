"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    "Clients abandon booking due to required account creation.",
    "Constant phone calls interrupting your professional workflow.",
    "High no-show rates because of missing or clunky reminders.",
    "Complex interfaces confusing your team and your customers."
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 max-w-2xl">
          Traditional booking is broken.
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mb-16">
          Every extra step is a lost customer. Current solutions prioritize software features over the human experience, creating friction where there should be flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 text-left"
            >
              <div className="mt-1 flex-shrink-0 text-red-500">
                <XCircle className="w-6 h-6" />
              </div>
              <p className="text-gray-700 font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
