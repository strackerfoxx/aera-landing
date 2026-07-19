import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact | Aera",
  description: "Get in touch with the Aera team.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 bg-gray-50 flex-grow">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Talk to sales
          </h1>
          <p className="text-gray-500 mb-8">Tell us about your business and we&apos;ll get you set up.</p>

          <form className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Work Email</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Company Size</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>50+ employees</option>
              </select>
            </div>
            <Button className="w-full h-12 text-base rounded-xl bg-primary hover:bg-blue-600">
              Request Demo
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
