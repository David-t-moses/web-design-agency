import React from "react";

const ConsultationSection = () => {
  return (
    <section className="bg-blue-700 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">
              Get Your Free Strategy Session
            </h2>
            <p className="text-lg opacity-90">
              Discover how we can transform your digital presence. Book a
              30-minute consultation with our experts - absolutely free.
            </p>
            <ul className="space-y-4">
              {[
                "Website Analysis",
                "Growth Strategy",
                "Custom Solutions",
                "ROI Planning",
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-black font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-black font-medium mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                  placeholder="Your Company"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                Book My Free Consultation
              </button>
            </form>
            <p className="text-sm text-gray-600 text-center mt-4">
              No credit card required. 100% free consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
