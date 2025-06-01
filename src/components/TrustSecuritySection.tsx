
import { Shield, Lock, CheckCircle, FileCheck, Server, Users, Globe, Award } from "lucide-react";
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
            Experience verifiable legal intelligence with complete confidence in data protection, regulatory compliance, and professional standards.
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
                Bank-grade encryption, secure infrastructure, SOC 2 compliance, and comprehensive access controls protect your sensitive legal data.
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
                GDPR, CCPA, and PIPEDA compliant with local deployment options and data residency controls. Your confidential data never leaves your control.
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
                Source-grounded responses eliminate AI hallucinations, ensuring ethical and responsible AI use with complete transparency and auditability.
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
                Designed to support professional conduct rules including ABA Model Rules and SRA Standards with full audit trails and verifiable source citations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Expanded Security Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-[#0A2F51] mb-6 flex items-center">
                <Server className="w-6 h-6 mr-3 text-[#43B88C]" />
                Data Security & Infrastructure
              </h3>
              <ul className="space-y-3 text-[#0E5A8A]">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">End-to-end encryption with AES-256 for data at rest and TLS 1.3 for data in transit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">SOC 2 Type II certified infrastructure with regular third-party security audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">Multi-factor authentication, role-based access controls, and zero-trust architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">Local deployment options with client-controlled LLMs and private cloud hosting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">Data residency controls ensuring compliance with jurisdictional requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-[#0A2F51] mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-[#178ACB]" />
                Regulatory Compliance
              </h3>
              <ul className="space-y-3 text-[#0E5A8A]">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">GDPR compliance with data subject rights, privacy by design, and EU data residency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">CCPA compliance with California consumer privacy rights and data transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">PIPEDA compliance for Canadian legal professionals and organizations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">ISO 27001 information security management framework implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-sm">Regular compliance audits and certifications by independent third parties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-6 text-center">
            Why RAG Technology Ensures Trustworthy Legal AI
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#43B88C]" />
                Eliminates AI Hallucinations
              </h4>
              <p className="text-[#0E5A8A] mb-4">
                Unlike generic AI models that can generate plausible but incorrect information, RAG grounds every response 
                in verified legal sources. This retrieval-first approach ensures accuracy and reliability essential for 
                legal practice, completely eliminating the risk of AI-generated misinformation.
              </p>
              
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#29A09D]" />
                Professional Standards Compliance
              </h4>
              <p className="text-[#0E5A8A]">
                RAG's transparent architecture supports compliance with professional conduct rules including ABA Model Rules 
                (particularly Rule 1.1 on competence and Rule 5.5 on technology), SRA Standards, and other jurisdictional 
                requirements by providing auditable research trails and verifiable source citations.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Always Current Information</h4>
              <p className="text-[#0E5A8A] mb-4">
                RAG accesses real-time legal databases and continuously updated sources, ensuring your decisions are based 
                on the most current legislation, case law, and regulatory updates available. This dynamic knowledge base 
                eliminates the staleness common in traditional AI training approaches.
              </p>
              
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">Complete Transparency & Auditability</h4>
              <p className="text-[#0E5A8A]">
                Every RAG response includes full source citations, creating an auditable trail that meets the highest 
                professional standards. Legal professionals can verify, review, and cite the exact sources used, 
                enabling confident decision-making and supporting due diligence requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Experience Secure, Compliant RAG Intelligence
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join leading legal professionals who trust LegisClear's RAG platform for critical legal research and analysis 
              while maintaining the highest standards of security, privacy, and professional compliance.
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
