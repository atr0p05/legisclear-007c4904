
import { Card } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Ingest",
      description: "New legislation enters our system",
      detail: "Bills and legal documents are automatically processed and indexed",
      color: "bg-[#178ACB]"
    },
    {
      number: "2",
      title: "Analyze (RAG)",
      description: "AI intelligently processes and connects information",
      detail: "Our RAG technology identifies patterns, relationships, and potential conflicts",
      color: "bg-[#29A09D]"
    },
    {
      number: "3",
      title: "Reveal",
      description: "Get instant answers, deep insights, and clear relationships",
      detail: "Access simplified summaries, impact analysis, and actionable insights",
      color: "bg-[#43B88C]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The LegisClear Journey: From Bill to Brilliance
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Our streamlined process transforms complex legislation into clear, 
            actionable insights in three simple steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0A2F51] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-[#0E5A8A] mb-2">
                        {step.description}
                      </p>
                      <p className="text-[#0E5A8A] opacity-80">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-6 h-6 text-[#178ACB]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[#0A2F51] mb-4">
              Experience the Power of AI-Driven Analysis
            </h3>
            <p className="text-[#0E5A8A] mb-6">
              See how complex legislation becomes clear, actionable insights with LegisClear's 
              advanced RAG technology.
            </p>
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-4 rounded text-center">
              <p className="font-medium">Ready to explore? Try our platform today.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
