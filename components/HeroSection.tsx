import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_0.5px,transparent_0.5px),linear-gradient(to_bottom,#3b82f6_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white/70"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-8">
            Crafting Digital Excellence
          </h1>

          {/* Owner's Image */}
          <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden ring-4 ring-blue-700 ring-offset-4">
            <Image
              src="/founder.jpg"
              alt="Agency Owner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Owner's Name */}
          <h2 className="text-2xl font-bold text-black mb-3">John Anderson</h2>

          {/* Title */}
          <p className="text-lg text-blue-700 font-medium mb-6">
            Founder & Lead Developer
          </p>

          {/* Description */}
          <p className="text-lg text-black/80 max-w-2xl mb-12">
            With over a decade of experience in crafting exceptional digital
            experiences, we transform your vision into powerful, elegant
            solutions that drive real business growth.
          </p>

          {/* CTA Button */}
          <button
            className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold 
            hover:bg-blue-800 transition-colors duration-300 shadow-lg"
          >
            Let's Build Something Amazing
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/10 rounded-tr-full"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/10 rounded-bl-full"></div>
    </div>
  );
};

export default HeroSection;
