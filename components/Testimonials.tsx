const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote:
        "Working with this team transformed our digital presence. They delivered a website that exceeded our expectations in both design and functionality.",
      rating: 5,
    },
    {
      name: "Mark Zhang",
      role: "Founder of Innovate",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote:
        "Their attention to detail and creative approach helped us achieve a 200% increase in user engagement. Best web development decision we've made.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote:
        "From concept to execution, they delivered excellence. Our e-commerce conversions improved significantly after the redesign.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-blue-700 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
