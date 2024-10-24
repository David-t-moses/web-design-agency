import Image from "next/image";

const MetricCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => (
  <div className="border border-blue-700 rounded-lg p-6 hover:bg-blue-700 hover:text-white transition-colors duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-3xl font-bold mb-2">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);

const WebsiteAnalyticsBlog = () => {
  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000"
          alt="Website analytics dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-[1200px] md:px-7">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              The Importance of Website Analytics in Website Design
            </h1>
            <p className="text-xl text-white mt-6 max-w-2xl">
              Transform data into design decisions that drive results
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <p className="text-xl text-black leading-relaxed mb-8">
              Website analytics form the backbone of data-driven design
              decisions. With 73% of companies investing in design to
              differentiate their brands, understanding user behavior through
              analytics has become crucial for success.
            </p>

            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Analytics Impact:</h3>
              <ul className="space-y-3">
                <li>• 67% improvement in user experience</li>
                <li>• 52% increase in conversion rates</li>
                <li>• 41% reduction in bounce rates</li>
                <li>• 88% better resource allocation</li>
              </ul>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Essential Analytics Metrics
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000"
              width={800}
              height={400}
              alt="Analytics metrics visualization"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "User Flow",
                  value: "Navigation Patterns",
                  description: "Track how users move through your website",
                },
                {
                  title: "Engagement",
                  value: "Time on Page",
                  description: "Measure content effectiveness and relevance",
                },
                {
                  title: "Conversion",
                  value: "Goal Completion",
                  description: "Monitor user actions and conversions",
                },
                {
                  title: "Performance",
                  value: "Load Times",
                  description: "Analyze technical performance metrics",
                },
              ].map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Data Collection Strategy
            </h2>
            <div className="bg-black p-8 rounded-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-6">Implementation Steps:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-bold mb-2">Define KPIs</h4>
                    <p className="text-sm opacity-90">
                      Identify metrics that align with business goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-bold mb-2">Setup Tracking</h4>
                    <p className="text-sm opacity-90">
                      Implement analytics tools and event tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-bold mb-2">Data Analysis</h4>
                    <p className="text-sm opacity-90">
                      Regular monitoring and insight generation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">04</span>
                  <div>
                    <h4 className="font-bold mb-2">Design Iteration</h4>
                    <p className="text-sm opacity-90">
                      Implement changes based on data insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Essential Analytics Tools
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000"
              width={800}
              height={400}
              alt="Analytics tools showcase"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tool: "Google Analytics",
                  features: "Comprehensive user behavior tracking",
                },
                {
                  tool: "Hotjar",
                  features: "Heatmaps and session recordings",
                },
                {
                  tool: "SEMrush",
                  features: "SEO and content performance analysis",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="bg-blue-700 p-6 rounded-lg text-white"
                >
                  <h4 className="font-bold text-lg mb-2">{tool.tool}</h4>
                  <p className="text-sm">{tool.features}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data-Driven Design Process */}
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Data-Driven Design Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  phase: "Research & Analysis",
                  description:
                    "Gather user behavior data and identify patterns",
                },
                {
                  phase: "Hypothesis Formation",
                  description: "Develop design theories based on data insights",
                },
                {
                  phase: "Testing Implementation",
                  description: "A/B testing and user feedback collection",
                },
                {
                  phase: "Design Optimization",
                  description: "Iterate based on test results and analytics",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="border border-blue-700 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-black">{phase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Metrics */}
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Measuring Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-700 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Quantitative Metrics</h3>
                <ul className="space-y-2">
                  <li>• Conversion rates</li>
                  <li>• Page load times</li>
                  <li>• Bounce rates</li>
                  <li>• Time on site</li>
                </ul>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Qualitative Metrics</h3>
                <ul className="space-y-2">
                  <li>• User feedback</li>
                  <li>• Heatmap analysis</li>
                  <li>• Session recordings</li>
                  <li>• Survey responses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-700 text-white p-8 rounded-lg my-16">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Analytics Journey
            </h2>
            <p className="mb-6">
              Get our comprehensive analytics implementation guide and transform
              your website's performance.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                Download Analytics Guide
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
};

export default WebsiteAnalyticsBlog;
