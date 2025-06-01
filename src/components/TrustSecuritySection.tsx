
import { Shield, Lock, CheckCircle, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TrustSecuritySection = () => {
  return (
    <section id="trust-security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Trust & Security: RAG Built for Legal Standards
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            LegisClear's RAG platform is engineered with security, compliance, and ethical AI at its foundation. 
            Experience verifiable legal intelligence with complete confidence in data protection and professional compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-t-4 border-[#43B88C] text-center">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-[#43B88C] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2F51] mb-3">
                Enterprise Security
              </h3>
              <p className="text-[#0E5A8A] text-sm">
                Bank-grade encryption, secure infrastructure, and comprehensive access controls protect your sensitive legal data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-[#178ACB] text-center">
            <CardContent className="p-6">
              <Lock className="w-12 h-12 text-[#178ACB] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2F51] mb-3">
                Data Privacy
              </h3>
              <p className="text-[#0E5A8A] text-sm">
                GDPR, CCPA compliant with local deployment options. Your confidential data never leaves your control.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-[#29A09D] text-center">
            <CardContent className="p-6">
              <CheckCircle className="w-12 h-12 text-[#29A09D] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2F51] mb-3">
                Ethical RAG
              </h3>
              <p className="text-[#0E5A8A] text-sm">
                Source-grounded responses eliminate AI hallucinations, ensuring ethical and responsible AI use in legal practice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-[#0E5A8A] text-center">
            <CardContent className="p-6">
              <FileCheck className="w-12 h-12 text-[#0E5A8A] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2F51] mb-3">
                Professional Compliance
              </h3>
              <p className="text-[#0E5A8A] text-sm">
                Designed to support professional conduct rules with full audit trails and verifiable source citations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-6 text-center">
            Why RAG Technology Ensures Trustworthy Legal AI
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Eliminates AI Hallucinations</h4>
              <p className="text-[#0E5A8A] mb-4">
                Unlike generic AI models that can generate plausible but incorrect information, RAG grounds every response 
                in verified legal sources, providing the accuracy and reliability essential for legal practice.
              </p>
              
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Complete Transparency</h4>
              <p className="text-[#0E5A8A]">
                Every insight includes full source citations, creating an auditable trail that meets the highest 
                professional standards and enables confident decision-making.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Always Current Information</h4>
              <p className="text-[#0E5A8A] mb-4">
                RAG accesses real-time legal databases, ensuring your decisions are based on the most current 
                legislation, case law, and regulatory updates available.
              </p>
              
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Secure by Design</h4>
              <p className="text-[#0E5A8A]">
                Built with security and privacy as core principles, supporting local deployment and maintaining 
                strict data separation to protect client confidentiality.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Experience Secure, Verifiable RAG Intelligence
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join leading legal professionals who trust LegisClear's RAG platform for critical legal research and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Security & Compliance Demo
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Security Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
