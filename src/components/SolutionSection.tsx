
import { Card } from "@/components/ui/card";
import { Lightbulb, Shield, ArrowDown, ArrowUp } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            LegisClear: Clarity Powered by AI
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Our AI-powered platform uses advanced RAG technology to transform 
            complex legislation into clear, actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A2F51]">
              How LegisClear Works
            </h3>
            <p className="text-[#0E5A8A] text-lg">
              At a high level, LegisClear ingests complex bills, processes them 
              with our advanced RAG (Retrieval-Augmented Generation) technology, 
              and provides clear, comprehensive insights.
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#178ACB] rounded-full flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Natural Language Questions</h4>
                  <p className="text-[#0E5A8A] text-sm">Ask questions in plain English</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#29A09D] rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Uncover Connections</h4>
                  <p className="text-[#0E5A8A] text-sm">Identify conflicts and relationships</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#43B88C] rounded-full flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Simplified Analysis</h4>
                  <p className="text-[#0E5A8A] text-sm">Get clear summaries and insights</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">
                  Example Query
                </h4>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB]">
                  <p className="text-[#0E5A8A] italic">
                    "How will the new healthcare bill affect small business owners?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#43B88C] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Key Impacts Identified</p>
                    <p className="text-[#0E5A8A] text-sm">Tax implications, compliance requirements, employee coverage mandates</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#29A09D] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Related Legislation</p>
                    <p className="text-[#0E5A8A] text-sm">Connections to existing tax code and labor laws</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#178ACB] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Plain English Summary</p>
                    <p className="text-[#0E5A8A] text-sm">Clear explanation of real-world consequences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
