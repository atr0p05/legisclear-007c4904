
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Award, Brain, Shield } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const AboutUsSection = () => {
  const teamExpertise = [
    {
      icon: <Brain className="w-8 h-8 text-[#43B88C]" />,
      area: "AI & RAG Technology",
      description: "Deep expertise in retrieval-augmented generation, natural language processing, and AI system architecture"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#178ACB]" />,
      area: "Legal Technology",
      description: "Extensive experience in legal workflow optimization, compliance systems, and professional practice requirements"
    },
    {
      icon: <Users className="w-8 h-8 text-[#29A09D]" />,
      area: "Legal Domain Expertise",
      description: "Former practitioners and legal scholars who understand the nuanced challenges of modern legal practice"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Established with a mission to bring verifiable AI intelligence to legal professionals"
    },
    {
      year: "2024",
      title: "RAG Platform Launch",
      description: "Deployed first-generation RAG technology specifically designed for legal research and analysis"
    },
    {
      year: "2025",
      title: "Enterprise Adoption",
      description: "Leading law firms and corporate legal departments achieve 840%+ ROI with LegisClear RAG"
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            About LegisClear: Pioneering RAG for Legal Excellence
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            We're not just another AI company. We're legal technology specialists who recognized 
            that the legal profession deserves better than generic AI. That's why we built the first 
            RAG platform specifically designed for legal professionals.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-t-4 border-[#43B88C]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#0A2F51] mb-6 flex items-center">
                <Lightbulb className="w-6 h-6 mr-3 text-[#43B88C]" />
                Why LegisClear & Why RAG?
              </h3>
              <div className="space-y-6 text-[#0E5A8A] leading-relaxed">
                <p>
                  LegisClear was born from a simple but critical observation: legal professionals 
                  were being promised AI solutions that couldn't deliver the accuracy, verifiability, 
                  and reliability that legal practice demands. Generic AI models, prone to hallucinations 
                  and lacking source attribution, posed unacceptable risks in a profession where precision 
                  is paramount.
                </p>
                <p>
                  Our founding team—comprising AI researchers, former legal practitioners, and legal 
                  technology specialists—recognized that Retrieval-Augmented Generation (RAG) represented 
                  the breakthrough the legal industry needed. Unlike traditional AI that generates responses 
                  from training data alone, RAG grounds every answer in verifiable, current sources, 
                  eliminating hallucinations and providing complete audit trails.
                </p>
                <p>
                  We made a deliberate choice to focus exclusively on RAG technology because we understood 
                  that legal professionals don't just need fast answers—they need <em>verifiable</em> answers. 
                  They need to know exactly where information comes from, when it was last updated, and 
                  whether they can stake their professional reputation on its accuracy.
                </p>
                <p>
                  Today, LegisClear stands as the premier RAG platform for legal professionals, trusted by 
                  leading law firms, Fortune 500 legal departments, and top-tier academic institutions. 
                  Our commitment to source-grounded intelligence has delivered measurable results: 840%+ ROI, 
                  75% time savings, and 99.9% accuracy rates that legal professionals can depend on.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Expertise */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] text-center mb-8">
            Deep Expertise Where AI Meets Law
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamExpertise.map((expertise, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{expertise.icon}</div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">{expertise.area}</h4>
                  <p className="text-[#0E5A8A] text-sm">{expertise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] text-center mb-8">
            Our Journey: Milestones in RAG Innovation
          </h3>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="bg-[#43B88C] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">{milestone.title}</h4>
                  <p className="text-[#0E5A8A]">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Target className="w-12 h-12 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90 mb-6">
                We envision a legal profession where AI enhances human expertise without compromising 
                the trust, accuracy, and verifiability that justice demands. Through RAG technology, 
                we're making that vision a reality—one verifiable insight at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EnhancedCTAButton variant="contact" className="bg-white text-[#178ACB] hover:bg-gray-100">
                  Meet Our Team
                </EnhancedCTAButton>
                <EnhancedCTAButton variant="demo" className="border-white text-white hover:bg-white hover:text-[#178ACB]">
                  See Our RAG Vision in Action
                </EnhancedCTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
