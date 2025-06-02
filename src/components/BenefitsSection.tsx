
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Target, TrendingUp, Shield, Users } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#43B88C]" />,
      title: "Eliminate Admin Bottlenecks: Reclaim Billable Time",
      description: "Reclaim up to 48% of billable time with RAG automation. LegisClear's intelligent retrieval eliminates time-consuming manual searches, freeing legal professionals for high-value strategic work.",
      ragBenefit: "RAG's instant, semantic retrieval and automated cross-referencing transforms hours of administrative overhead into minutes of focused insight generation.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#178ACB]" />,
      title: "Accelerate Legal Intelligence: From Days to Minutes",
      description: "Transform 16-hour research marathons into 3-4 minute intelligent briefings. RAG-powered analysis delivers comprehensive legal insights 6-80x faster than traditional methods.",
      ragBenefit: "RAG's dynamic knowledge base and contextual understanding provide instant access to relevant precedents and current law with complete source verification.",
      color: "border-[#178ACB]"
    },
    {
      icon: <Target className="w-8 h-8 text-[#29A09D]" />,
      title: "Achieve Unshakeable Accuracy: Eliminate AI Hallucinations",
      description: "Minimize risk with RAG-verified insights that reduce errors by up to 96%. Every response grounded in verifiable legal sources with complete audit trails.",
      ragBenefit: "Unlike generic AI models that can invent facts, RAG grounds every insight in actual legal documents from our authoritative database, ensuring legally defensible information.",
      color: "border-[#29A09D]"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Drive Exponential ROI: 840%+ First-Year Returns",
      description: "Experience transformative profitability through RAG-powered efficiency. Handle 3x more complex matters with the same resources while improving service quality.",
      ragBenefit: "RAG's speed and accuracy enable lawyers to deliver premium services faster, directly impacting firm profitability and client satisfaction through verifiable excellence.",
      color: "border-[#0E5A8A]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
      title: "Empower Strategic Decisions: Always Current Intelligence",
      description: "Build stronger cases with comprehensive legal intelligence. RAG technology leverages continuously updated datasets for informed, confident decision-making.",
      ragBenefit: "RAG overcomes the 'knowledge cut-off' problem of static AI models by connecting to a dynamic legal knowledge base that's constantly updated with the latest legislation and case law.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Users className="w-8 h-8 text-[#178ACB]" />,
      title: "Elevate Team Performance: Junior Staff, Senior-Level Insights",
      description: "Democratize legal expertise across your entire team. RAG-powered intelligence enables junior staff to access senior-level insights instantly while maintaining quality standards.",
      ragBenefit: "RAG's contextual understanding and source verification ensures that even complex legal queries receive expert-level responses, complete with transparent reasoning and citations.",
      color: "border-[#178ACB]"
    }
  ];

  const scrollToROI = () => {
    const element = document.getElementById("roi-calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The RAG Advantage: Transformative Impact on Legal Practice
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Experience the revolutionary power of Retrieval-Augmented Generation technology designed specifically for legal professionals. 
            Every benefit below is enabled by RAG's unique ability to combine AI intelligence 
            with verified legal knowledge—delivering results that generic AI simply cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`border-t-4 ${benefit.color} hover:shadow-lg transition-shadow duration-300 group`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#0E5A8A] mb-4">
                  {benefit.description}
                </p>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-[#43B88C]">
                  <p className="text-sm text-[#0A2F51] font-medium">How RAG Powers This Advantage:</p>
                  <p className="text-sm text-[#0E5A8A]">{benefit.ragBenefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why RAG Technology Delivers Superior Results vs. Generic AI
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Traditional AI generates responses from static training data that may be outdated or fabricated. 
              LegisClear's RAG retrieves information from live, authoritative legal databases, ensuring every insight is current, 
              accurate, and verifiable—a critical advantage for legal practice where precision is non-negotiable.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Source-Verified</div>
                <p className="text-sm opacity-90">Every response grounded in verifiable legal sources with full citations and audit trails</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Always Current</div>
                <p className="text-sm opacity-90">Real-time access to latest legal developments—no knowledge cut-off limitations</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Contextually Intelligent</div>
                <p className="text-sm opacity-90">Deep understanding of legal nuances and relationships, not just keyword matching</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold text-[#0A2F51] mb-4">
              Ready to Experience These RAG-Powered Advantages?
            </h4>
            <p className="text-[#0E5A8A] mb-4">
              Join forward-thinking law firms achieving 840%+ ROI with technology that combines the reliability 
              of expert legal research with the speed and intelligence of advanced AI—all backed by complete verifiability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedCTAButton
                variant="demo"
                onClick={scrollToROI}
                stage="decision"
              >
                Experience RAG Innovation
              </EnhancedCTAButton>
              <EnhancedCTAButton
                variant="download"
                stage="consideration"
              >
                Download RAG Advantage Guide
              </EnhancedCTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
