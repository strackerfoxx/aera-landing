import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingPreview from "@/components/home/PricingPreview";
import FAQ from "@/components/home/FAQ";

export const metadata = {
  title: "Pricing | Aera",
  description: "Transparent pricing with no hidden fees.",
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Invest in your time.
          </h1>
        </div>
      </div>

      <PricingPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
