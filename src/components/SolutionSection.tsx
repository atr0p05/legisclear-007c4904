
import { Card } from "@/components/ui/card";
import { MessageSquare, Database, CheckCircle, Shield, Zap, FileText, Brain } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            LegisClear's Advanced RAG AI Platform: Where Precision Meets Intelligence
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
                <Brain className="w-6 h-6 text-red-500 mr-3" />
                Traditional AI Limitations
              </h4>
              <ul className="space-y-2 text-[#0E5A8A]">
                <li>• Generates responses from training data (may be outdated)</li>
                <li>• No real-time access to current legal developments</li>
                <li>• Cannot verify accuracy against source documents</li>
                <li>• Risk of "hallucinated" or fabricated legal citations</li>
                <li>• Limited transparency in reasoning process</li>
                <li>• No ability to access proprietary firm knowledge</li>
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
                <li>• Securely integrates with your proprietary legal data</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-6 rounded-lg text-center">
            <p className="text-lg font-medium">
              RAG = The reliability of a legal library + The intelligence of AI + The speed of instant search + The transparency of verified sources
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
            everything to give you verified, accurate answers with full source citations.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#178ACB] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Natural Language Legal Queries</h4>
                  <p className="text-[#0E5A8A]">Ask complex legal questions in plain English—RAG understands context, nuance, and legal terminology</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#29A09D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Intelligent Legal Knowledge Retrieval</h4>
                  <p className="text-[#0E5A8A]">Our smart legal knowledge base instantly finds the most relevant information from comprehensive, verified legal sources</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#43B88C] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">Verified Generation with Citations</h4>
                  <p className="text-[#0E5A8A]">AI generates responses based only on retrieved, verified sources with full citations and reasoning transparency</p>
                </div>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-4">
                RAG in Action: Complex Legal Query Example
              </h4>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-[#178ACB] mb-6">
                <p className="text-[#0E5A8A] italic font-medium">
                  "How do recent GDPR amendments affect SaaS liability clauses for EU clients, and what contract modifications should we implement?"
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-[#178ACB]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">RAG Retrieves</p>
                    <p className="text-[#0E5A8A] text-sm">Latest GDPR amendments, relevant court decisions, contract precedents</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-[#29A09D]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">AI Analyzes & Synthesizes</p>
                    <p className="text-[#0E5A8A] text-sm">Cross-references updates with liability implications and industry standards</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#43B88C]" />
                  <div>
                    <p className="text-[#0A2F51] font-medium">Verified Response with Implementation Guide</p>
                    <p className="text-[#0E5A8A] text-sm">Actionable contract modifications with exact regulatory references and risk assessments</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-[#43B88C]/10 p-4 rounded">
                <p className="text-[#0A2F51] font-medium text-sm">
                  <strong>Result:</strong> 45-second response vs. 12+ hours traditional research, with 15 verified regulatory sources and ready-to-implement compliance checklist.
                </p>
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
              from AI that never guesses—it knows, because it retrieves and verifies first.
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#178ACB] rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">6-80x Faster RAG-Powered Research</h4>
                  <p className="text-[#0E5A8A] text-sm">RAG enables instant access to precisely relevant legal information from vast databases</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#29A09D] rounded-full flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">Always-Current Legal Knowledge Base</h4>
                  <p className="text-[#0E5A8A] text-sm">Live access to latest legislation, cases, regulatory updates, and your proprietary data</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#43B88C] rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A2F51]">99.99% Source-Verified Accuracy</h4>
                  <p className="text-[#0E5A8A] text-sm">RAG's source-grounded responses eliminate AI hallucinations and provide audit trails</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0A2F51] mb-2">
                  Traditional AI vs. RAG: Side-by-Side Comparison
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Capability</th>
                        <th className="text-center py-2 text-red-600">Traditional AI</th>
                        <th className="text-center py-2 text-[#43B88C]">LegisClear RAG</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2 font-medium">Data Currency</td>
                        <td className="text-center py-2">Static Training Data</td>
                        <td className="text-center py-2">Real-Time Sources</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Source Verification</td>
                        <td className="text-center py-2">None</td>
                        <td className="text-center py-2">Full Citations</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Hallucination Risk</td>
                        <td className="text-center py-2">High</td>
                        <td className="text-center py-2">Eliminated</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Proprietary Data</td>
                        <td className="text-center py-2">Cannot Access</td>
                        <td className="text-center py-2">Secure Integration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Experience the RAG Advantage: Schedule Your Personalized Demo
            </h3>
            <p className="text-lg opacity-90 mb-6">
              See how RAG technology transforms complex legal research into precise, 
              verifiable insights that you can trust and act upon with complete confidence.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Source-Verified Responses</p>
                <p className="text-sm opacity-90">Every insight backed by verifiable legal sources</p>
              </div>
              <div>
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Lightning-Fast Intelligence</p>
                <p className="text-sm opacity-90">6-80x faster than traditional research methods</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">Always Current & Accurate</p>
                <p className="text-sm opacity-90">Real-time legal knowledge with transparent citations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
