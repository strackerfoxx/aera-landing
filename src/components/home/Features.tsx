"use client";

import { motion } from "framer-motion";
import { Users, Calendar, LayoutDashboard, Smartphone } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Business Dashboard",
      description: "Get a complete overview of your daily appointments, revenue, and staff performance in a beautiful, easy-to-read interface.",
      icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
      colSpan: "md:col-span-2",
    },
    {
      title: "Client Management",
      description: "Automatically build a database of your clients, their history, and preferences.",
      icon: <Users className="w-6 h-6 text-primary" />,
      colSpan: "md:col-span-1",
    },
    {
      title: "Mobile Experience",
      description: "Manage your business on the go with a fully responsive interface that feels like a native app.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      colSpan: "md:col-span-1",
    },
    {
      title: "Professional Calendar",
      description: "Advanced scheduling with buffers, specific service times, and multi-staff availability management.",
      icon: <Calendar className="w-6 h-6 text-primary" />,
      colSpan: "md:col-span-2",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Everything you need. <br />Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            Aera provides powerful tools behind a simple interface, allowing you to focus on your clients, not on managing software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group ${feature.colSpan}`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
