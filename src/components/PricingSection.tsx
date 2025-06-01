
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Mail, Zap, Shield } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Choose Your RAG-Powered Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect RAG solution for your legal intelligence needs. 
            Start with our Solo Professional plan or scale up with Enterprise for unlimited RAG-powered research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Solo Professional Plan */}
          <Card className="relative border-2 border-[#43B88C] hover:border-[#29A09D] transition-colors flex flex-col h-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#43B88C] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Perfect for Solo Practice
              </span>
            </div>
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-[#0A2F51] mb-2">
                Solo Professional
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#43B88C]">$5</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Essential RAG-powered legal intelligence for individual practitioners</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex flex-col flex-grow">
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>20 RAG-powered queries per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Instant bill summaries & legislative analysis</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Natural language legal Q&A with citations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Basic conflict detection & cross-referencing</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Source-verified responses with audit trails</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Email support within 24 hours</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded mb-6">
                <p className="text-sm text-[#0A2F51] font-medium mb-2">Fair Usage Policy:</p>
                <p className="text-sm text-gray-600">
                  Designed for individual research needs. Queries reset monthly. 
                  Automated or high-volume usage may require Enterprise plan.
                </p>
              </div>
              <Button className="w-full bg-[#43B88C] hover:bg-[#29A09D] text-white py-3 flex items-center justify-center gap-2 mt-auto">
                Start RAG Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-2 border-[#178ACB] hover:border-[#0E5A8A] transition-colors flex flex-col h-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#178ACB] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Trusted by Leading Firms
              </span>
            </div>
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-[#0A2F51] mb-2">
                Enterprise RAG Platform
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#178ACB]">$1,000</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Unlimited RAG intelligence for organizations and power users</p>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex flex-col flex-grow">
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Unlimited RAG API access & queries</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Advanced analytics & usage insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Priority RAG processing & faster responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Custom RAG integrations & API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Secure proprietary data integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Dedicated RAG specialist support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>White-label RAG deployment options</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-4 rounded mb-6">
                <p className="text-sm text-[#0A2F51] font-medium mb-2">Enterprise Scalability:</p>
                <p className="text-sm text-gray-600">
                  Designed for extensive organizational use with generous, scalable thresholds. 
                  Specific usage parameters tailored to your needs will be defined during consultation.
                </p>
              </div>
              <Button className="w-full bg-[#178ACB] hover:bg-[#0E5A8A] text-white py-3 flex items-center justify-center gap-2 mt-auto">
                Connect with RAG Specialist
                <Mail className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
              Why Choose LegisClear's RAG Platform?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#43B88C] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0A2F51] mb-2">Source-Verified Accuracy</h4>
                <p className="text-sm text-gray-600">Every response grounded in verifiable legal sources with full audit trails</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-[#178ACB] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0A2F51] mb-2">Lightning-Fast Intelligence</h4>
                <p className="text-sm text-gray-600">6-80x faster than traditional research with real-time legal updates</p>
              </div>
              <div className="text-center">
                <Check className="w-12 h-12 text-[#29A09D] mx-auto mb-3" />
                <h4 className="font-semibold text-[#0A2F51] mb-2">Proven ROI</h4>
                <p className="text-sm text-gray-600">Firms report 840%+ first-year ROI through efficiency gains</p>
              </div>
            </div>
            <p className="text-lg text-[#0E5A8A] mb-6">
              Experience the difference RAG technology makes in legal intelligence. 
              Join leading law firms, corporate legal departments, and universities 
              who trust LegisClear for verified, actionable legal insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule RAG Demo
              </button>
              <button className="border border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Compare Plans Detail
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            All plans include enterprise-grade security, data privacy protection, and ethical AI compliance. 
            Need a custom RAG solution for your organization? 
            <a href="#" className="text-[#178ACB] hover:underline ml-1">Contact our RAG specialists</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
