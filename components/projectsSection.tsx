import Image from "next/image";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    client: "StyleHub Fashion",
    description:
      "Complete redesign and development of a high-traffic fashion e-commerce platform",
    image: "/projects/stylehub.jpg",
    tech: ["Next.js", "Tailwind CSS", "Shopify"],
    stats: "150% increase in conversions",
    link: "#",
  },
  {
    title: "Financial Dashboard",
    client: "WealthWise Analytics",
    description:
      "Real-time financial analytics dashboard with advanced data visualization",
    image: "/projects/dashboard.jpg",
    tech: ["React", "D3.js", "Node.js"],
    stats: "Processing $2M daily transactions",
    link: "#",
  },
  {
    title: "Mobile Fitness App",
    client: "FitLife Pro",
    description: "Cross-platform fitness tracking app with social features",
    image: "/projects/fitlife.jpg",
    tech: ["React Native", "Firebase", "TypeScript"],
    stats: "500K+ active users",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Transforming ideas into impactful digital solutions. Here's a
            selection of our recent success stories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-blue-700 font-semibold mb-2">
                  {project.client}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-black/70 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-700/10 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="text-sm text-blue-700 font-medium mb-4">
                  {project.stats}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 
                            transition-colors duration-300"
                >
                  View Project
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
