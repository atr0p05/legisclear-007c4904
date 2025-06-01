
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Target, TrendingUp, Shield, Users } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#43B88C]" />,
      title: "Reduce Administrative Overhead",
      description: "Slash hours spent on non-billable tasks. AI performs tasks 6-80x faster, significantly cutting operational costs.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#178ACB]" />,
      title: "Accelerate Legal Research",
      description: "Instantly access and analyze legislation and case law. Get answers in minutes, not days.",
      color: "border-[#178ACB]"
    },
    {
      icon: <Target className="w-8 h-8 text-[#29A09D]" />,
      title: "Enhance Accuracy & Mitigate Risk",
      description: "Minimize human error with AI-driven precision (up to 99.99% accuracy) and RAG-verified insights.",
      color: "border-[#29A09D]"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Boost Productivity & Profitability",
      description: "Free up valuable professional time for billable work. Experience significant ROI (firms reporting >840% first-year ROI).",
      color: "border-[#0E5A8A]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
      title: "Empower Data-Driven Decisions",
      description: "Leverage comprehensive legal intelligence for stronger arguments, better compliance, and informed strategies.",
      color: "border-[#43B88C]"
    },
    {
      icon: <Users className="w-8 h-8 text-[#178ACB]" />,
      title: "Streamline Paralegal Workflows",
      description: "Automate routine research, document summarization, and information extraction typically handled by paralegals.",
      color: "border-[#178ACB]"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Unlock Efficiency, Accuracy, and Strategic Advantage
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            LegisClear delivers tangible benefits that transform your practice, 
            reduce costs, and position you at the forefront of legal innovation.
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
              Join the Legal Technology Revolution
            </h3>
            <p className="text-lg opacity-90">
              The Legal Technology Market is projected to reach $60.04 billion by 2032. 
              Position your practice at the forefront of this transformation with LegisClear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
