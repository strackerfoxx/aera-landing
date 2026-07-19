import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Industries | Aera",
  description: "Aera solutions tailored for Barbershops, Salons, Clinics, and more.",
};

export default function IndustriesPage() {
  const industries = ["Barbershops", "Beauty Salons", "Clinics", "Dentists", "Veterinarians", "Spas", "Gyms", "Consultants"];

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Built for your business.
          </h1>
          <p className="text-xl text-gray-500">
            No matter your industry, Aera adapts to your workflow.
          </p>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div key={ind} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{ind}</h3>
              <p className="text-gray-500 text-sm">Perfectly tailored workflows and terminology for {ind.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
