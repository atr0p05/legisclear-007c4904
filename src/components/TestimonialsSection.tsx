
import { TestimonialCard } from "@/components/TestimonialCard";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "LegisClear's RAG didn't just speed up our research; it gave us a level of confidence in our findings we've never had before. Knowing every insight is backed by a verifiable source is a game-changer for our litigation practice.",
      author: "Sarah Chen",
      title: "Senior Partner",
      company: "Morrison & Associates",
      highlight: "Reduced research time by 75% while improving accuracy"
    },
    {
      quote: "The ability to analyze thousands of contracts in minutes with RAG-verified accuracy has transformed our M&A due diligence process. We're completing deals faster and with greater confidence in our risk assessments.",
      author: "Michael Rodriguez",
      title: "General Counsel",
      company: "TechCorp Industries",
      highlight: "840% ROI in first year through improved efficiency"
    },
    {
      quote: "As legal educators, we needed a platform that could handle complex research while teaching students about responsible AI. LegisClear's transparent, source-grounded RAG is perfect for both advancing scholarship and preparing the next generation of lawyers.",
      author: "Dr. Amanda Foster",
      title: "Professor of Law & Technology",
      company: "Harvard Law School",
      highlight: "Enhanced research capabilities for faculty and students"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Trusted by Leading Legal Professionals
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Discover how legal professionals across law firms, corporations, and universities 
            are achieving exceptional results with LegisClear's RAG-powered intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-4">
              Join the RAG Revolution in Legal Tech
            </h3>
            <p className="text-[#0E5A8A] mb-6">
              Experience the measurable impact that verifiable, source-grounded AI can have on your legal practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Your RAG Success Demo
              </button>
              <button className="border border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Read More Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
