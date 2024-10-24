import Image from "next/image";

const CompanyStory = () => {
  return (
    <section className="relative bg-white py-20">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/70 to-white"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-700 mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              From humble beginnings to digital excellence - discover how we've
              grown into a leading web development agency.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <span className="text-blue-700 font-bold">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-black mt-2 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-black/80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const timelineEvents = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Started as a freelance developer with a vision to create impactful digital solutions for businesses.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2019",
    title: "First Team Assembly",
    description:
      "Expanded our capabilities by bringing together talented developers and designers.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2021",
    title: "Major Breakthrough",
    description:
      "Completed our first enterprise project and established ourselves as a trusted agency.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Now serving clients worldwide with a team of 50+ digital experts.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
];

export default CompanyStory;
