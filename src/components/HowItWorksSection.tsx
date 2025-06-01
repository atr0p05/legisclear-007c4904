
import { Card } from "@/components/ui/card";
import { ArrowDown, Database, Brain, CheckCircle, Search, Zap, FileText } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Smart Legal Knowledge Base",
      description: "Comprehensive, continuously updated legal database",
      detail: "Our intelligent legal knowledge base continuously ingests and indexes the latest legislation, case law, regulations, and legal precedents. Every document is processed and organized for instant, precise retrieval.",
      color: "bg-[#178ACB]",
      icon: <Database className="w-6 h-6 text-white" />
    },
    {
      number: "2",
      title: "RAG-Powered Retrieval & Analysis",
      description: "Your question triggers precise legal information retrieval",
      detail: "Ask your question in natural language. Our RAG system understands legal context and semantically searches our knowledge base to retrieve the most relevant, current information. No guessing - only verified legal sources.",
      color: "bg-[#29A09D]",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      number: "3",
      title: "Verified Intelligence Generation",
      description: "AI creates responses based only on retrieved sources",
      detail: "Our AI generates clear, comprehensive responses using only the retrieved legal information. Every answer includes full citations and reasoning, ensuring complete transparency and verifiability.",
      color: "bg-[#43B88C]",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            How RAG Technology Transforms Legal Research
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Unlike traditional AI that generates responses from static training data, RAG first retrieves 
            current, verified legal information, then generates intelligent responses. This retrieval-first 
            approach is why our AI delivers 6-80x faster research with unmatched accuracy.
          </p>
        </div>

        {/* RAG vs Traditional AI Comparison */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg border max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0A2F51] text-center mb-8">
            Traditional AI vs. RAG: The Critical Difference
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-600 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Traditional AI Approach
              </h4>
              <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                <ol className="space-y-2 text-sm">
                  <li>1. User asks question</li>
                  <li>2. AI generates response from training data</li>
                  <li>3. No verification against current sources</li>
                  <li>4. Risk of outdated or incorrect information</li>
                </ol>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#43B88C] flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                LegisClear's RAG Approach
              </h4>
              <div className="bg-green-50 p-4 rounded border-l-4 border-[#43B88C]">
                <ol className="space-y-2 text-sm">
                  <li>1. User asks question</li>
                  <li>2. RAG retrieves relevant legal sources</li>
                  <li>3. AI generates response from retrieved sources</li>
                  <li>4. Response includes citations and verification</li>
                </ol>
              </div>
            </div>
          </div>
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
              Experience the Power of RAG-Driven Legal Intelligence
            </h3>
            <p className="text-[#0E5A8A] mb-6">
              Join law firms achieving 840%+ ROI with technology that combines the reliability 
              of expert legal research with the speed and intelligence of advanced AI.
            </p>
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-6 rounded">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Source-Verified</p>
                  <p className="text-sm opacity-90">Every insight backed by legal sources</p>
                </div>
                <div>
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Lightning Fast</p>
                  <p className="text-sm opacity-90">6-80x faster than traditional research</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Always Current</p>
                  <p className="text-sm opacity-90">Real-time legal knowledge updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
