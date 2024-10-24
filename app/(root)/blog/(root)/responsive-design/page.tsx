import TransitionWrapper from "@/components/TransitionWrapper";
import Image from "next/image";

const TechniqueCard = ({
  title,
  description,
  code,
}: {
  title: string;
  description: string;
  code: string;
}) => (
  <div className="border border-blue-700 rounded-lg p-6 mb-8">
    <h3 className="text-xl font-bold text-blue-700 mb-4">{title}</h3>
    <p className="text-black mb-4">{description}</p>
    {code && (
      <div className="bg-black p-4 rounded-md">
        <code className="text-white text-sm">{code}</code>
      </div>
    )}
  </div>
);

export default function ResponsiveDesignBlog() {
  return (
    <article className="min-h-screen bg-white py-20">
      <TransitionWrapper className="w-full ">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5 max-w-3xl">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-700">Responsive Design:</span> Why Your
            Website Needs to be Mobile-Friendly
          </h1>
          <p className="flex flex-col md:text-sm text-[10px] ">
            Importance of responsive design and how catering to mobile users
            enhances SEO and increases user retention and conversions.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper>
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <section className="mb-16">
              <p className="text-xl text-black leading-relaxed mb-6">
                In 2024, mobile devices generate 63.7% of all website traffic.
                This staggering statistic underscores why responsive design
                isn't just a technical choice—it's a business imperative that
                directly impacts your bottom line.
              </p>
              <div className="bg-blue-700 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  Impact on Business Metrics:
                </h3>
                <ul className="space-y-2">
                  <li>
                    • 74% higher conversion rates on mobile-optimized sites
                  </li>
                  <li>
                    • 61% of users never return to a non-mobile-friendly site
                  </li>
                  <li>
                    • 57% of users won't recommend a business with poor mobile
                    design
                  </li>
                  <li>
                    • Google prioritizes mobile-friendly sites in search
                    rankings
                  </li>
                </ul>
              </div>
            </section>

            {/* New Section: Responsive Design Evolution */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">
                The Evolution of Responsive Design
              </h2>
              <Image
                src="/evolution.jpg"
                width={800}
                height={400}
                alt="Evolution of responsive design"
                className="rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    era: "2010-2015",
                    highlight: "Mobile Revolution",
                    description:
                      "Introduction of media queries and fluid grids",
                  },
                  {
                    era: "2015-2020",
                    highlight: "Mobile-First Design",
                    description:
                      "Progressive enhancement and performance focus",
                  },
                  {
                    era: "2020+",
                    highlight: "Context-Aware Design",
                    description:
                      "AI-driven adaptability and device-specific optimizations",
                  },
                ].map((era, index) => (
                  <div
                    key={index}
                    className="bg-white border border-blue-700 p-6 rounded-lg"
                  >
                    <h4 className="font-bold text-blue-700">{era.era}</h4>
                    <h5 className="font-semibold text-black my-2">
                      {era.highlight}
                    </h5>
                    <p className="text-black text-sm">{era.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* New Section: Technical Implementation */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">
                Technical Implementation Guide
              </h2>

              <TechniqueCard
                title="1. Viewport Configuration"
                description="Proper viewport setup ensures correct scaling across devices."
                code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
              />

              <TechniqueCard
                title="2. Fluid Typography"
                description="Scale text smoothly across different screen sizes using CSS clamp."
                code={`font-size: clamp(1rem, 2.5vw, 2rem);`}
              />

              <TechniqueCard
                title="3. CSS Grid Layout"
                description="Create responsive layouts that automatically adjust to available space."
                code={`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`}
              />
            </section>

            {/* New Section: Performance Optimization */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">
                Performance Optimization Strategies
              </h2>
              <div className="space-y-6">
                <div className="bg-black p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Image Optimization</h3>
                  <code className="block whitespace-pre">
                    {`// Next.js Image component example
  <Image
    src="/hero-1.jpg"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    width={800}
    height={400}
    loading="lazy"
  />`}
                  </code>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-700 p-6 rounded-lg text-white">
                    <h4 className="font-bold mb-2">Resource Loading</h4>
                    <ul className="space-y-2">
                      <li>• Lazy loading for images</li>
                      <li>• Conditional loading for heavy components</li>
                      <li>• Critical CSS extraction</li>
                      <li>• Responsive asset loading</li>
                    </ul>
                  </div>
                  <div className="bg-blue-700 p-6 rounded-lg text-white">
                    <h4 className="font-bold mb-2">Performance Metrics</h4>
                    <ul className="space-y-2">
                      <li>• First Contentful Paint (FCP)</li>
                      <li>• Largest Contentful Paint (LCP)</li>
                      <li>• Cumulative Layout Shift (CLS)</li>
                      <li>• Time to Interactive (TTI)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* New Section: Testing Methodology */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">
                Comprehensive Testing Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    Device Testing
                  </h3>
                  <ul className="text-black space-y-2">
                    <li>• Physical mobile devices</li>
                    <li>• Tablets and iPads</li>
                    <li>• Desktop browsers</li>
                    <li>• Different screen resolutions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    Browser Testing
                  </h3>
                  <ul className="text-black space-y-2">
                    <li>• Chrome, Firefox, Safari</li>
                    <li>• Edge and legacy browsers</li>
                    <li>• Mobile browsers</li>
                    <li>• WebView implementations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* New Section: Future Trends */}
            <section className="my-16">
              <h2 className="text-3xl font-bold text-blue-700 mb-8">
                Future of Responsive Design
              </h2>
              <Image
                src="/future.jpg"
                width={800}
                height={400}
                alt="Future of responsive design"
                className="rounded-lg mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-blue-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Emerging Technologies
                  </h3>
                  <ul className="text-black space-y-2">
                    <li>• Container Queries</li>
                    <li>• CSS Subgrid</li>
                    <li>• Variable Fonts</li>
                    <li>• CSS Houdini</li>
                  </ul>
                </div>
                <div className="border border-blue-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Future Considerations
                  </h3>
                  <ul className="text-black space-y-2">
                    <li>• Foldable Devices</li>
                    <li>• AR/VR Compatibility</li>
                    <li>• AI-Driven Layouts</li>
                    <li>• Progressive Web Apps</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Enhanced Call to Action */}
            <section className="bg-blue-700 text-white p-8 rounded-lg my-16">
              <h2 className="text-2xl font-bold mb-4">
                Transform Your Website Today
              </h2>
              <p className="mb-6">
                Don't let poor mobile optimization hold your business back.
                Implement these responsive design principles and watch your user
                engagement soar.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </section>
          </div>
        </main>
      </TransitionWrapper>
    </article>
  );
}
