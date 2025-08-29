import { ArrowRight } from "lucide-react";

interface WorkTogetherSectionProps {
  onCtaClick: () => void;
}

export default function WorkTogetherSection({ onCtaClick }: WorkTogetherSectionProps) {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">Let's Work Together</h1>
        <p className="text-lg text-gray-500 mb-12">
          From our first conversation to achieving your goals — here's how we make it happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {[
            {
              step: 1,
              title: "Schedule Discovery Call",
              desc: "Book a call to discuss your needs and challenges.",
            },
            {
              step: 2,
              title: "Receive Tailored Proposal",
              desc: "We craft a plan that aligns with your goals.",
            },
            {
              step: 3,
              title: "Begin Transformation",
              desc: "Start your journey with our expert guidance.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="space-y-4 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 bg-white"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto shadow-md">
                <span className="text-xl font-bold text-white">{step}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onCtaClick}
          className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
        >
          Schedule Your Call
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
}
