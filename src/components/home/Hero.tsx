"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-xs font-medium text-blue-700">Introducing Aera 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Appointments. <br />
            <span className="text-gray-400">Without friction.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
            The modern appointment management platform. Customers book in seconds using just their phone number. No passwords, no generic forms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-medium bg-primary hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all group">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-medium border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100" />
              ))}
            </div>
            <p>Trusted by 10,000+ professionals</p>
          </div>
        </motion.div>

        {/* Mockup Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 hidden lg:block"
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-gray-200/50 bg-white/50 backdrop-blur-sm shadow-2xl p-4 transform perspective-1000 rotateY-[-5deg] rotateX-[5deg]">
             <div className="w-full h-full rounded-xl bg-gray-900 overflow-hidden relative shadow-inner flex flex-col">
                <div className="h-8 bg-gray-800 w-full flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {/* Abstract UI representation */}
                <div className="flex-1 p-6 flex gap-6">
                  <div className="w-48 flex flex-col gap-4">
                    <div className="h-8 w-full bg-gray-800 rounded-md" />
                    <div className="h-4 w-3/4 bg-gray-800 rounded-md" />
                    <div className="h-4 w-1/2 bg-gray-800 rounded-md" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-24 w-full bg-blue-600/20 border border-blue-500/30 rounded-xl" />
                    <div className="h-64 w-full bg-gray-800 rounded-xl" />
                  </div>
                </div>
             </div>

             {/* Floating elements */}
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -right-12 top-12 bg-white rounded-xl shadow-xl p-4 border border-gray-100 flex items-center gap-4"
             >
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                 ✓
               </div>
               <div>
                 <p className="text-sm font-semibold text-gray-900">New Appointment</p>
                 <p className="text-xs text-gray-500">Alex Muñoz - 10:00 AM</p>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
