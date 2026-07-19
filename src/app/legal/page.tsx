import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Legal | Aera",
  description: "Privacy policy, terms of service, and cookie policy.",
};

export default function LegalPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
            Legal
          </h1>
          <div className="prose prose-gray">
            <h3>Privacy Policy</h3>
            <p className="text-gray-600 mb-8">
              We take your privacy seriously. Aera only collects the information necessary to provide you with the best possible service. We never sell your data to third parties.
            </p>
            <h3>Terms of Service</h3>
            <p className="text-gray-600">
              By using Aera, you agree to these terms. Aera is provided &quot;as is&quot; without warranty of any kind.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
