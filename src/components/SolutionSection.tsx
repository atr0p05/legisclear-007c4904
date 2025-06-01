
import { Card } from "@/components/ui/card";
import { Lightbulb, Shield, ArrowDown, Database, Zap, CheckCircle } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The LegisClear Advantage: Precision, Speed, and Insight
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            LegisClear harnesses a vast vector database of legislation and case law, 
            utilizing advanced Retrieval-Augmented Generation (RAG) to streamline paralegal-like 
            research and provide instant, verifiable answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A2F51]">
              Revolutionary AI-Powered Legal Intelligence
            </h3>
            <p className="text-[#0E5A8A] text-lg">
              Imagine reducing research for a complex tax opinion from 12 hours to just 3.5, 
              or drafting standard agreements up to 77% faster. LegisClear's RAG technology 
              ensures these gains come with verifiable accuracy, grounding every insight in source documents.
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#178ACB] rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Lightning-Fast Research</h4>
                  <p className="text-[#0E5A8A] text-sm">AI performs legal tasks 6-80x faster than human baselines</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#29A09D] rounded-full flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Vast Legal Knowledge Base</h4>
                  <p className="text-[#0E5A8A] text-sm">Comprehensive legislation and case law in one searchable platform</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#43B88C] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">RAG-Verified Accuracy</h4>
                  <p className="text-[#0E5A8A] text-sm">Up to 99.99% accuracy with source-grounded insights</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">
                  Real-World Impact
                </h4>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB]">
                  <p className="text-[#0E5A8A] italic">
                    "How will the new healthcare regulations affect our employment contracts?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#43B88C] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Response Time: 3-4 minutes</p>
                    <p className="text-[#0E5A8A] text-sm">vs. 16 hours traditional research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#29A09D] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">ROI Impact: 260%+ monthly</p>
                    <p className="text-[#0E5A8A] text-sm">Some firms report >840% first-year ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#178ACB] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Drafting Time Reduction</p>
                    <p className="text-[#0E5A8A] text-sm">From 2.5 hours to 35 minutes for standard agreements</p>
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
