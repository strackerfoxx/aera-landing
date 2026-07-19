import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Blog | Aera",
  description: "Insights, updates, and thoughts from the Aera team.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 bg-white min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Latest insights
          </h1>
          <p className="text-xl text-gray-500 mb-16">
            Product updates, company news, and thoughts on the future of work.
          </p>

          <div className="grid gap-8">
            {/* Placeholder Post */}
            <div className="group cursor-pointer">
              <p className="text-sm text-primary font-medium mb-2">Product Update • April 12, 2024</p>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                Introducing Advanced Staff Availability Management
              </h2>
              <p className="text-gray-500 max-w-2xl">
                We&apos;ve completely rebuilt how availability works for multi-staff locations, bringing unprecedented flexibility to complex schedules.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
