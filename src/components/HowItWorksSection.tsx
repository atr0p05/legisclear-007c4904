
import { Card } from "@/components/ui/card";
import { ArrowDown, Database, Brain, CheckCircle } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Ingest & Index",
      description: "Continuous processing of vast legal databases",
      detail: "LegisClear continuously ingests and processes vast amounts of legislation and case law into our secure vector database, ensuring comprehensive coverage of legal precedents and current law",
      color: "bg-[#178ACB]",
      icon: <Database className="w-6 h-6 text-white" />
    },
    {
      number: "2",
      title: "Understand & Analyze (RAG)",
      description: "Advanced AI semantic understanding and retrieval",
      detail: "Ask your question in natural language. Our advanced RAG AI semantically understands your query and retrieves the most relevant information from the depths of legal data with contextual precision",
      color: "bg-[#29A09D]",
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      number: "3",
      title: "Deliver & Verify",
      description: "Instant, accurate, and verifiable legal insights",
      detail: "Receive clear, concise answers, document summaries, and identified connections instantly. All insights are verifiable against source documents, ensuring reliability and accuracy in your legal work",
      color: "bg-[#43B88C]",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            From Complex Data to Clear Decisions in Record Time
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Our streamlined process transforms overwhelming legal research into instant, 
            actionable insights through advanced AI and comprehensive data processing that works 6-80x faster than traditional methods.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 relative`}>
                      <span className="absolute inset-0 flex items-center justify-center text-xl">
                        {step.number}
                      </span>
                      <div className="absolute -bottom-1 -right-1">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0A2F51] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-[#0E5A8A] mb-2 font-medium">
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
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-[#0A2F51] mb-4">
              Experience the Power of AI-Driven Legal Intelligence
            </h3>
            <p className="text-[#0E5A8A] mb-6">
              Transform your legal practice with technology that understands context, 
              delivers precision, and saves time on every query. Join firms achieving 840%+ ROI.
            </p>
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-6 rounded">
              <p className="font-medium text-lg">Ready to revolutionize your legal workflow?</p>
              <p className="opacity-90 mt-2">Experience research that's 6-80x faster with RAG-verified accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
