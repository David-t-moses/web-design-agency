import {
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconChartLine,
  IconShoppingCart,
  IconApps,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconCode,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
  },
  {
    icon: IconPalette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create memorable digital experiences and drive engagement.",
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    icon: IconChartLine,
    title: "Digital Strategy",
    description:
      "Data-driven strategies to enhance your digital presence and achieve business objectives.",
  },
  {
    icon: IconShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Scalable online stores that drive sales and provide excellent shopping experiences.",
  },
  {
    icon: IconApps,
    title: "Custom Software",
    description:
      "Tailored software solutions that automate processes and solve complex business challenges.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Our Services & Expertise
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business
            and drive growth in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-blue-700/10 rounded-xl hover:border-blue-700 
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 bg-blue-700/10 rounded-lg flex items-center justify-center 
                            group-hover:bg-blue-700 transition-colors duration-300 mb-6"
              >
                <service.icon
                  className="w-6 h-6 text-blue-700 group-hover:text-white 
                            transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-black/70 mb-6">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 
                          transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
