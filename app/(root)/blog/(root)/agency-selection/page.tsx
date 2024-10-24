import Image from "next/image";

const ChecklistItem = ({ text }) => (
  <div className="flex items-center space-x-3 text-black">
    <svg
      className="w-5 h-5 text-blue-700"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
    <span>{text}</span>
  </div>
);

export default function ChoosingAgencyBlog() {
  return (
    <article className="min-h-screen bg-white">
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2000"
          alt="Professional web design team at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-700 bg-opacity-70">
          <div className="container mx-auto max-w-[1200px] h-full flex flex-col justify-center px-7">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              How to Choose the Right Web Design Agency for Your Business
            </h1>
            <p className="text-xl text-white mt-6 max-w-2xl">
              A comprehensive guide to making an informed decision that aligns
              with your business goals
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-16">
            <p className="text-xl text-black leading-relaxed mb-8">
              Selecting the right web design agency is crucial for your
              business's digital success. With over 31,000 web design agencies
              in the US alone, making the right choice requires careful
              consideration and a structured approach.
            </p>

            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Statistics:</h3>
              <ul className="space-y-3">
                <li>
                  • 75% of users judge business credibility based on website
                  design
                </li>
                <li>• 94% of first impressions are design-related</li>
                <li>
                  • 89% of consumers shop with competitors after poor website
                  experiences
                </li>
              </ul>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Essential Criteria for Evaluation
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2000"
              width={800}
              height={400}
              alt="Agency evaluation process"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Portfolio Analysis",
                  points: [
                    "Industry-specific experience",
                    "Design style variety",
                    "Technical capabilities",
                    "Results achieved",
                  ],
                },
                {
                  title: "Client Testimonials",
                  points: [
                    "Long-term relationships",
                    "Problem-solving ability",
                    "Communication quality",
                    "Project management",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border border-blue-700 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.points.map((point, idx) => (
                      <ChecklistItem key={idx} text={point} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Budget Planning & ROI
            </h2>
            <div className="bg-black p-8 rounded-lg text-white mb-8">
              <h3 className="text-xl font-bold mb-4">
                Average Investment Ranges:
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Small Business Website</span>
                  <span>$5,000 - $15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Medium Business Website</span>
                  <span>$15,000 - $50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Enterprise Solutions</span>
                  <span>$50,000+</span>
                </div>
              </div>
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Evaluating Communication Process
            </h2>
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000"
              width={800}
              height={400}
              alt="Agency communication process"
              className="rounded-lg mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  phase: "Initial Contact",
                  expectations:
                    "Clear discovery process and requirement gathering",
                },
                {
                  phase: "Project Planning",
                  expectations: "Detailed timeline and milestone definition",
                },
                {
                  phase: "Development",
                  expectations: "Regular updates and progress reports",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="bg-blue-700 p-6 rounded-lg text-white"
                >
                  <h4 className="font-bold mb-2">{phase.phase}</h4>
                  <p className="text-sm">{phase.expectations}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Red Flags to Watch For
            </h2>
            <div className="space-y-4">
              {[
                "Vague or unrealistic promises",
                "Lack of clear process documentation",
                "Poor communication during initial contacts",
                "Unwillingness to provide references",
                "Extremely low pricing compared to market rates",
              ].map((flag, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-black"
                >
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{flag}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="my-16">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">
              Decision-Making Framework
            </h2>
            <div className="bg-blue-700 p-8 rounded-lg text-white">
              <ol className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="font-bold">1.</span>
                  <span>
                    Define clear project objectives and success metrics
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-bold">2.</span>
                  <span>Research and shortlist potential agencies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-bold">3.</span>
                  <span>Evaluate portfolios and case studies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-bold">4.</span>
                  <span>Contact references and review testimonials</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="font-bold">5.</span>
                  <span>Assess communication and cultural fit</span>
                </li>
              </ol>
            </div>
          </section>
          <section className="bg-blue-700 text-white p-8 rounded-lg my-16">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Make Your Choice?
            </h2>
            <p className="mb-6">
              Download our comprehensive agency evaluation checklist to make an
              informed decision.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                Download Checklist
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
}
