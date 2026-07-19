import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Features | Aera",
  description: "Explore the powerful features of Aera appointment management platform.",
};

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 md:pb-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Everything you need.<br/>Nothing you don&apos;t.
          </h1>
          <p className="text-xl text-gray-500">
            Aera is designed to be invisible when you don&apos;t need it, and incredibly powerful when you do.
          </p>
        </div>
      </div>

      {/* Detail Section Example */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">OTP Login</h2>
          <p className="text-lg text-gray-500 mb-6">
            Passwords are a relic of the past. We use secure OTPs so your clients can book in seconds without friction.
          </p>
        </div>
        <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
           {/* Mockup visual placeholder */}
           <div className="w-full h-full flex items-center justify-center text-gray-400">Mockup Representation</div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
