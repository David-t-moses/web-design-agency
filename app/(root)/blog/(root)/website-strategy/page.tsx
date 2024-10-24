import Image from "next/image";

const StrategyPoint = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="border border-blue-700 rounded-lg p-6 hover:bg-blue-700 hover:text-white transition-colors duration-300">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p>{description}</p>
  </div>
);

export default function WebsiteStrategyBlog() {
  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=2000"
          alt="Strategic website planning session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-70 ">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center max-w-[1200px] md:px-7">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              Why You Need a Clear Website Strategy Before Starting Development
            </h1>
            <p className="text-xl text-white mt-6 max-w-2xl">
              Transform your web project from a digital presence into a powerful
              business asset
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <p className="text-xl text-black leading-relaxed mb-8">
              Studies show that 85% of web projects exceed their budgets and
              timelines due to poor planning. A clear website strategy isn't
              just a roadmap—it's your blueprint for success in the digital
              landscape.
            </p>

            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Strategic Planning Impact:
              </h3>
              <ul className="space-y-3">
                <li>• 64% reduction in development revisions</li>
                <li>• 47% faster time to market</li>
                <li>• 83% higher user satisfaction rates</li>
                <li>• 92% better alignment with business goals</li>
              </ul>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Core Components of Website Strategy
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=2000"
              width={800}
              height={400}
              alt="Website strategy components visualization"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Business Objectives",
                  description:
                    "Clear alignment between website functionality and business goals",
                },
                {
                  title: "User Research",
                  description:
                    "Deep understanding of target audience needs and behaviors",
                },
                {
                  title: "Content Strategy",
                  description:
                    "Planned content hierarchy and information architecture",
                },
                {
                  title: "Technical Requirements",
                  description:
                    "Defined technical specifications and integration needs",
                },
              ].map((point, index) => (
                <StrategyPoint key={index} {...point} />
              ))}
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              The Strategic Planning Process
            </h2>
            <div className="bg-black p-8 rounded-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-6">Phase Breakdown:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">01</span>
                  <div>
                    <h4 className="font-bold mb-2">Discovery & Research</h4>
                    <p className="text-sm opacity-90">
                      Market analysis, competitor research, user personas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">02</span>
                  <div>
                    <h4 className="font-bold mb-2">Strategic Planning</h4>
                    <p className="text-sm opacity-90">
                      Goals definition, KPI setting, resource allocation
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">03</span>
                  <div>
                    <h4 className="font-bold mb-2">Content Strategy</h4>
                    <p className="text-sm opacity-90">
                      Content mapping, SEO planning, user journey mapping
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-blue-700 font-bold text-xl">04</span>
                  <div>
                    <h4 className="font-bold mb-2">Technical Planning</h4>
                    <p className="text-sm opacity-90">
                      Technology stack, integration requirements, security
                      planning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              ROI Impact of Strategic Planning
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000"
              width={800}
              height={400}
              alt="ROI visualization"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "Development Costs",
                  impact: "32% Reduction",
                  description:
                    "Through clear specifications and reduced revisions",
                },
                {
                  metric: "Time to Market",
                  impact: "47% Faster",
                  description: "With streamlined development processes",
                },
                {
                  metric: "User Engagement",
                  impact: "58% Increase",
                  description: "Through targeted user experience design",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-blue-700 p-6 rounded-lg text-white"
                >
                  <h4 className="font-bold text-lg mb-2">{stat.metric}</h4>
                  <p className="text-2xl font-bold mb-2">{stat.impact}</p>
                  <p className="text-sm opacity-90">{stat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common Pitfalls */}
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Common Pitfalls to Avoid
            </h2>
            <div className="space-y-4">
              {[
                "Skipping user research phase",
                "Undefined success metrics",
                "Insufficient content planning",
                "Unclear technical requirements",
                "No mobile strategy",
                "Ignoring SEO requirements",
              ].map((pitfall, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-black"
                >
                  <svg
                    className="w-5 h-5 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{pitfall}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Strategic Tools */}
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Essential Strategic Planning Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  tool: "User Journey Mapping",
                  description: "Visualize how users interact with your website",
                },
                {
                  tool: "Content Matrix",
                  description: "Plan and organize your content structure",
                },
                {
                  tool: "Technical Specification Template",
                  description: "Document all technical requirements",
                },
                {
                  tool: "Analytics Framework",
                  description: "Track and measure website performance",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="border border-blue-700 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {tool.tool}
                  </h3>
                  <p className="text-black">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-700 text-white p-8 rounded-lg my-16">
            <h2 className="text-2xl font-bold mb-4">
              Start Your Strategic Planning
            </h2>
            <p className="mb-6">
              Download our comprehensive website strategy toolkit and transform
              your web development process.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                Download Strategy Toolkit
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">
                Schedule Strategy Session
              </button>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
}
