
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Target, TrendingUp, Shield, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#43B88C]" />,
      title: "Drastically Reduce Administrative Overhead",
      description: "Cut non-billable admin time by up to 48%. AI performs tasks 6-80x faster than manual methods, significantly cutting operational costs.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#178ACB]" />,
      title: "Accelerate Legal Research & Analysis",
      description: "Access and understand complex case law and legislation in minutes, not days. Reduce research time from 16 hours to 3-4 minutes.",
      color: "border-[#178ACB]"
    },
    {
      icon: <Target className="w-8 h-8 text-[#29A09D]" />,
      title: "Enhance Accuracy & Minimize Risk",
      description: "Improve accuracy with RAG-verified insights and reduce errors inherent in manual processes by up to 96% with automated systems.",
      color: "border-[#29A09D]"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Boost Productivity & Profitability",
      description: "Reclaim billable hours and achieve significant ROI. Some firms experience over 840% ROI in the first year with AI implementation.",
      color: "border-[#0E5A8A]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
      title: "Empower Data-Driven Decisions",
      description: "Build stronger cases and strategies with comprehensive legal intelligence. Leverage vast datasets for informed decision-making.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Users className="w-8 h-8 text-[#178ACB]" />,
      title: "Streamline Paralegal & Support Workflows",
      description: "Automate routine document review, summarization, and information extraction typically handled by support staff.",
      color: "border-[#178ACB]"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The LegisClear Advantage: Measurable Impact on Your Practice
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            LegisClear delivers quantifiable benefits that transform your practice, 
            reduce costs by up to 50%, and position you at the forefront of legal innovation.
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
                <p className="text-[#0E5A8A]">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Leading the Legal Technology Revolution
            </h3>
            <p className="text-lg opacity-90 mb-4">
              The Legal Technology Market is projected to reach $60.04 billion by 2032. 
              Position your practice at the forefront of this transformation with LegisClear.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">48%</div>
                <p className="text-sm opacity-90">Time saved on admin tasks</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">6-80x</div>
                <p className="text-sm opacity-90">Faster than manual processes</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">840%+</div>
                <p className="text-sm opacity-90">First-year ROI potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
