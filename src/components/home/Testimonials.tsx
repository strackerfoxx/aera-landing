export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
          Loved by professionals.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-left flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {"★★★★★"}
                </div>
                <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">
                  &quot;Aera completely changed how we handle appointments. Our no-show rate dropped to near zero, and clients love the OTP login instead of remembering passwords.&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-semibold text-gray-900">Sarah Jenkins</p>
                  <p className="text-sm text-gray-500">Owner, Lumiere Salon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
