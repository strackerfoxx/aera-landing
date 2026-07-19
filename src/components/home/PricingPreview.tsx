import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPreview() {
  const features = [
    "Unlimited appointments",
    "OTP client login",
    "Automated reminders",
    "Business dashboard",
    "Multi-staff management"
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Simple, transparent pricing.
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Start for free, upgrade when you need to grow.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/40 text-left max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="text-9xl font-black italic">$</span>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</h3>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">$29</span>
              <span className="text-gray-500 mb-1">/month</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-600 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Button className="w-full rounded-xl h-14 text-base font-semibold bg-gray-900 hover:bg-gray-800 text-white">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
