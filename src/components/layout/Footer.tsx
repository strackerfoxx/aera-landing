import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-semibold text-xl tracking-tight">Aera</span>
            </Link>
            <p className="text-gray-500 mb-8 max-w-sm text-sm leading-relaxed">
              Appointments without friction. The modern way to manage your schedule, clients, and business operations seamlessly.
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-gray-900">Subscribe to our newsletter</span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm w-full max-w-[240px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <Button variant="default" className="rounded-lg">Subscribe</Button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Product</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><Link href="/legal" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Aera Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-900 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
