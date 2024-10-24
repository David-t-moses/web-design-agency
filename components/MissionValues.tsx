import {
  IconBrain,
  IconTarget,
  IconHeart,
  IconAward,
} from "@tabler/icons-react";

const MissionValues = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/5 rounded-full blur-2xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              To empower businesses with innovative digital solutions that drive
              growth, enhance user experiences, and create lasting impact in the
              digital world.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-blue-700/10 text-blue-700 rounded-xl group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    <value.icon size={32} stroke={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const values = [
  {
    icon: IconBrain,
    title: "Innovation First",
    description:
      "We push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.",
  },
  {
    icon: IconTarget,
    title: "Results Driven",
    description:
      "Our focus is on delivering measurable outcomes that contribute to your business success.",
  },
  {
    icon: IconHeart,
    title: "Client Commitment",
    description:
      "We build lasting partnerships through transparent communication and dedicated support.",
  },
  {
    icon: IconAward,
    title: "Excellence",
    description:
      "Quality is non-negotiable. We maintain the highest standards in everything we create.",
  },
];

const stats = [
  { number: "98%", label: "Client Satisfaction" },
  { number: "250+", label: "Projects Delivered" },
  { number: "15+", label: "Industry Awards" },
  { number: "24/7", label: "Support Available" },
];

export default MissionValues;
