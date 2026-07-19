export default function TrustedBy() {
  const logos = [
    "Linear", "Stripe", "Vercel", "Notion", "Arc", "Raycast"
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-wider">
          Powering modern businesses everywhere
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 opacity-60 grayscale">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl md:text-2xl font-bold text-gray-800 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
