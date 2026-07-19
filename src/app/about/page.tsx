import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | Aera",
  description: "Our mission to remove friction from the world&apos;s appointments.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="pt-32 pb-24 md:pt-48 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Removing friction from everyday life.
          </h1>
          <div className="prose prose-lg prose-gray text-gray-600">
            <p>
              We believe that software should get out of the way. When a customer wants to book a service, the tool facilitating that transaction should be invisible.
            </p>
            <p>
              Aera was built because we were tired of abandoning bookings due to forced account creations, forgotten passwords, and clunky interfaces.
            </p>
            <p>
              Our product philosophy is simple: Do the hard work on the backend so the user doesn&apos;t have to on the frontend.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
