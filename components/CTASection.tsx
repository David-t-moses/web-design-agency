import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative bg-blue-700 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute rotate-45 -right-40 -top-40 w-80 h-80 border-[40px] border-white rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-60 h-60 border-[30px] border-white rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Digital Future?
          </h2>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our journey, values, and the passionate team behind
            successful digital transformations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 duration-300 shadow-lg"
            >
              <span className="relative z-10">Learn Our Story</span>
            </Link>

            <p className="text-white/80 text-lg font-medium">
              Join <span className="font-bold text-white">500+</span> Satisfied
              Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
