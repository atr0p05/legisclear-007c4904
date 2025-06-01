
import { Card } from "@/components/ui/card";
import { MessageSquare, Share2, FileText, Zap, Database, CheckCircle } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            LegisClear: AI-Powered Clarity & Efficiency for the Legal Sector
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Our advanced RAG AI platform transforms complex legislation and case law into clear, 
            actionable insights, streamlining workflows and reducing overhead by up to 80%.
          </p>
        </div>

        {/* How LegisClear Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#0A2F51] text-center mb-4">
            How LegisClear Works
          </h3>
          <p className="text-lg text-[#0E5A8A] text-center mb-12 max-w-4xl mx-auto">
            At a high level, LegisClear ingests complex legal documents (legislation and case law), 
            processes them with our advanced RAG (Retrieval-Augmented Generation) technology, 
            and provides clear, comprehensive insights.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#178ACB] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Natural Language Questions</h4>
                  <p className="text-[#0E5A8A]">Ask questions in plain English about legislation and case law</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#29A09D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Uncover Connections</h4>
                  <p className="text-[#0E5A8A]">Identify conflicts, relationships, and precedents across a vast legal dataset</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#43B88C] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Simplified Analysis</h4>
                  <p className="text-[#0E5A8A]">Get clear summaries, key impact identification, and actionable insights</p>
                </div>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-4">
                Example Query
              </h4>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB] mb-6">
                <p className="text-[#0E5A8A] italic">
                  "Summarize recent appellate court rulings relevant to data privacy in SaaS contracts."
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#43B88C]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">Key Rulings Identified</p>
                    <p className="text-[#0E5A8A] text-sm">Relevant case precedents and statutory references</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29A09D]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">Impact on Contractual Obligations</p>
                    <p className="text-[#0E5A8A] text-sm">Clear explanation of real-world consequences</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#178ACB]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">Risk Mitigation Checklist</p>
                    <p className="text-[#0E5A8A] text-sm">Actionable steps for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RAG Technology Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A2F51]">
              Revolutionary RAG Technology & Vector Database
            </h3>
            <p className="text-[#0E5A8A] text-lg">
              Our vast vector database and RAG technology ensure precision, contextual understanding, 
              and verifiable results. Experience research that's 6-80x faster than traditional methods 
              with up to 99.99% accuracy in automated processes.
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
                    <p className="text-[#0E5A8A] text-sm">Some firms report {'>'}840% first-year ROI</p>
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
