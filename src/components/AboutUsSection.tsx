
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Target } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const AboutUsSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Accuracy & Reliability",
      description: "Every response is grounded in verifiable legal sources with complete audit trails, ensuring you can trust the intelligence you receive."
    },
    {
      icon: Users,
      title: "Legal Professional Focus",
      description: "Built by legal professionals, for legal professionals. We understand the unique challenges and requirements of modern legal practice."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We leverage cutting-edge RAG technology not for its own sake, but to solve real problems facing today's legal professionals."
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Our solutions deliver quantifiable results: faster research, improved accuracy, and significant cost savings for our clients."
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            About LegisClear: Pioneering RAG-Powered Legal Intelligence
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            LegisClear is at the forefront of legal technology innovation, specializing in 
            Retrieval-Augmented Generation (RAG) solutions that transform how legal professionals 
            access, analyze, and apply legal intelligence. We're dedicated to making legal research 
            faster, more accurate, and completely verifiable.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-4 text-center">Our Mission</h3>
          <p className="text-lg text-[#0E5A8A] text-center leading-relaxed">
            To revolutionize legal intelligence through RAG technology, providing legal professionals 
            with instant access to verified, source-grounded insights that enhance decision-making, 
            reduce research time, and improve client outcomes. We believe that by eliminating the 
            hallucination problems of traditional AI and grounding every response in verifiable sources, 
            we can help the legal profession embrace AI with confidence.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-[#43B88C] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#43B88C] p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">
                        {value.title}
                      </h4>
                      <p className="text-[#0E5A8A]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-8 text-center">
            Leadership Team
          </h3>
          <div className="flex justify-center">
            <Card className="text-center hover:shadow-lg transition-all duration-300 max-w-md">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-[#178ACB] to-[#29A09D] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AP</span>
                </div>
                <h4 className="text-xl font-bold text-[#0A2F51] mb-2">Andre Profitt</h4>
                <p className="text-[#178ACB] font-medium mb-3">CEO & Founder</p>
                <p className="text-[#0E5A8A] text-sm">
                  Andre Profitt is a highly accomplished business leader with 9 years of experience 
                  driving significant ARR growth and operational efficiencies through strategic process 
                  optimization and innovative AI solutions. At SimCorp, he spearheaded contracting for 
                  deals securing up to $25M ARR and developed proprietary AI solutions delivering 
                  approximately $450,000 in annual productivity savings. Fueled by a passion for 
                  cutting-edge technologies like RAG and Azure AI, Andre applies his advanced technical 
                  skills and data-driven expertise to achieve impactful results for LegisClear.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience RAG-Powered Legal Intelligence?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join the growing community of legal professionals who trust LegisClear 
              for verified, actionable legal insights. Discover how RAG technology 
              can transform your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedCTAButton variant="contact" className="bg-white text-[#178ACB] hover:bg-gray-100">
                Schedule a Consultation
              </EnhancedCTAButton>
              <EnhancedCTAButton variant="demo" className="border-2 border-white text-white hover:bg-white hover:text-[#178ACB]">
                Request a Demo
              </EnhancedCTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
