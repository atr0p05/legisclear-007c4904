
import { Card } from "@/components/ui/card";
import { MessageSquare, Share2, FileText, Zap, Database, CheckCircle, Shield } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Our Advanced RAG AI Platform: Where Precision Meets Intelligence
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            LegisClear's proprietary RAG (Retrieval-Augmented Generation) technology combines the power of AI 
            with verified legal knowledge, delivering accuracy and reliability that traditional AI simply cannot match.
          </p>
        </div>

        {/* The RAG Difference */}
        <div className="mb-20 bg-white p-8 rounded-lg shadow-lg border max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#0A2F51] text-center mb-8">
            The RAG Difference: AI with an Expert Legal Library & Built-in Fact-Checker
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#0A2F51] flex items-center">
                <Shield className="w-6 h-6 text-red-500 mr-3" />
                Traditional AI Limitations
              </h4>
              <ul className="space-y-2 text-[#0E5A8A]">
                <li>• Generates responses from training data (may be outdated)</li>
                <li>• No real-time access to current legal developments</li>
                <li>• Cannot verify accuracy against source documents</li>
                <li>• Risk of "hallucinated" or fabricated legal citations</li>
                <li>• Limited transparency in reasoning process</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-[#0A2F51] flex items-center">
                <CheckCircle className="w-6 h-6 text-[#43B88C] mr-3" />
                LegisClear's RAG Advantage
              </h4>
              <ul className="space-y-2 text-[#0E5A8A]">
                <li>• Retrieves information from live, comprehensive legal database</li>
                <li>• Always current with latest legislation and case law</li>
                <li>• Every insight verified against actual source documents</li>
                <li>• Provides transparent citations and references</li>
                <li>• Combines retrieval precision with generative intelligence</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-6 rounded-lg text-center">
            <p className="text-lg font-medium">
              RAG = The reliability of a legal library + The intelligence of AI + The speed of instant search
            </p>
          </div>
        </div>

        {/* How RAG Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#0A2F51] text-center mb-4">
            How Our RAG Technology Transforms Legal Research
          </h3>
          <p className="text-lg text-[#0E5A8A] text-center mb-12 max-w-4xl mx-auto">
            Think of RAG as having an AI assistant with perfect recall of every legal document, 
            instant access to the most current information, and the ability to cross-reference 
            everything to give you verified, accurate answers.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#178ACB] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Natural Language Questions</h4>
                  <p className="text-[#0E5A8A]">Ask complex legal questions in plain English - RAG understands context and nuance</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#29A09D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Intelligent Retrieval</h4>
                  <p className="text-[#0E5A8A]">Our smart legal knowledge base instantly finds the most relevant information from comprehensive legal databases</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#43B88C] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Verified Generation</h4>
                  <p className="text-[#0E5A8A]">AI generates responses based only on retrieved, verified sources with full citations</p>
                </div>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-4">
                RAG in Action: Real Query Example
              </h4>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB] mb-6">
                <p className="text-[#0E5A8A] italic">
                  "How do recent GDPR updates affect SaaS contract liability clauses for EU clients?"
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#43B88C]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">RAG Retrieves</p>
                    <p className="text-[#0E5A8A] text-sm">Latest GDPR amendments, relevant court decisions, contract precedents</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#29A09D]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">AI Analyzes & Synthesizes</p>
                    <p className="text-[#0E5A8A] text-sm">Cross-references updates with liability implications</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#178ACB]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">Verified Response with Citations</p>
                    <p className="text-[#0E5A8A] text-sm">Actionable guidance with exact regulatory references</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RAG Technology Impact */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A2F51]">
              Why RAG Delivers Superior Legal Intelligence
            </h3>
            <p className="text-[#0E5A8A] text-lg">
              Our comprehensive legal knowledge base combined with RAG's retrieval-first approach ensures 
              every insight is current, accurate, and verifiable. Experience the confidence that comes 
              from AI that never guesses - it knows.
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#178ACB] rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">6-80x Faster Research</h4>
                  <p className="text-[#0E5A8A] text-sm">RAG enables instant access to relevant legal information</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#29A09D] rounded-full flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Always Current Knowledge Base</h4>
                  <p className="text-[#0E5A8A] text-sm">Live access to latest legislation, cases, and regulatory updates</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#43B88C] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">99.99% Verified Accuracy</h4>
                  <p className="text-[#0E5A8A] text-sm">Source-grounded responses eliminate AI hallucinations</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">
                  RAG-Powered Results
                </h4>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB]">
                  <p className="text-[#0E5A8A] italic">
                    "What compliance requirements apply to our new fintech partnership under current banking regulations?"
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#43B88C] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Response Time: 45 seconds</p>
                    <p className="text-[#0E5A8A] text-sm">vs. 12+ hours traditional research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#29A09D] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">15 Verified Regulatory Sources</p>
                    <p className="text-[#0E5A8A] text-sm">With direct citations and current status</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#178ACB] rounded-full mt-2"></div>
                  <div>
                    <p className="text-[#0A2F51] font-medium">Actionable Compliance Checklist</p>
                    <p className="text-[#0E5A8A] text-sm">Ready for immediate implementation</p>
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
