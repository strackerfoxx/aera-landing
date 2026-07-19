"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Enter Phone Number",
      description: "Client enters their phone number to receive a secure OTP. No password required."
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-primary" />,
      title: "Select Time",
      description: "They choose an available slot that works for them, instantly synced with your calendar."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Confirmed",
      description: "Appointment is booked. Automated WhatsApp/SMS reminders are scheduled instantly."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            The 60-second booking experience.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We removed everything that slows down booking. The result is a seamless flow that converts visitors into confirmed appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-blue-50 border-8 border-white flex items-center justify-center mb-6 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
