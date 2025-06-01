
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Target, TrendingUp, Shield, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#43B88C]" />,
      title: "Drastically Reduce Administrative Overhead",
      description: "Cut non-billable admin time by up to 48%. RAG AI performs complex legal tasks 6-80x faster than manual methods, significantly reducing operational costs.",
      ragBenefit: "RAG's instant retrieval eliminates time-consuming document searches and manual cross-referencing.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#178ACB]" />,
      title: "Accelerate Legal Research & Analysis",
      description: "Access and understand complex case law and legislation in minutes, not days. RAG technology reduces research time from 16 hours to 3-4 minutes.",
      ragBenefit: "RAG's comprehensive knowledge base provides instant access to relevant legal precedents and current law.",
      color: "border-[#178ACB]"
    },
    {
      icon: <Target className="w-8 h-8 text-[#29A09D]" />,
      title: "Enhance Accuracy & Minimize Risk",
      description: "Improve accuracy with RAG-verified insights and reduce errors inherent in manual processes by up to 96% with source-verified responses.",
      ragBenefit: "RAG eliminates AI hallucinations by grounding every response in verified legal sources.",
      color: "border-[#29A09D]"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Boost Productivity & Profitability",
      description: "Reclaim billable hours and achieve significant ROI. RAG-powered efficiency helps firms experience over 840% ROI in the first year.",
      ragBenefit: "RAG's speed and accuracy enable lawyers to handle more complex matters in less time.",
      color: "border-[#0E5A8A]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
      title: "Empower Data-Driven Decisions",
      description: "Build stronger cases and strategies with comprehensive legal intelligence. RAG technology leverages vast datasets for informed decision-making.",
      ragBenefit: "RAG ensures decisions are based on the most current and comprehensive legal information available.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Users className="w-8 h-8 text-[#178ACB]" />,
      title: "Streamline Team Workflows",
      description: "Automate routine document review, summarization, and information extraction with RAG-powered intelligence that supports your entire legal team.",
      ragBenefit: "RAG enables junior staff to access senior-level legal insights instantly, improving team productivity.",
      color: "border-[#178ACB]"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The RAG Advantage: Measurable Impact on Your Practice
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Experience the transformative power of Retrieval-Augmented Generation technology. 
            Every benefit below is enabled by RAG's unique ability to combine AI intelligence 
            with verified legal knowledge, delivering results traditional AI simply cannot match.
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
                  <p className="text-sm text-[#0A2F51] font-medium">Enabled by RAG:</p>
                  <p className="text-sm text-[#0E5A8A]">{benefit.ragBenefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              The RAG Difference: Why Our AI Delivers Superior Benefits
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Traditional AI generates responses from static training data. RAG retrieves information 
              from live, comprehensive legal databases, ensuring every insight is current, accurate, 
              and verifiable. This is why RAG-powered legal intelligence delivers measurably superior results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Source-Verified</div>
                <p className="text-sm opacity-90">Every response grounded in legal sources</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Always Current</div>
                <p className="text-sm opacity-90">Real-time access to latest legal developments</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Transparent</div>
                <p className="text-sm opacity-90">Full citations and reasoning provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
