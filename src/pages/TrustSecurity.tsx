
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  FileCheck, 
  Server, 
  Users, 
  Globe, 
  Award,
  Eye,
  Database,
  Zap
} from "lucide-react";

const TrustSecurity = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-[#43B88C]" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, secure infrastructure, SOC 2 compliance, and comprehensive access controls protect your sensitive legal data."
    },
    {
      icon: <Lock className="w-12 h-12 text-[#178ACB]" />,
      title: "Data Privacy",
      description: "GDPR, CCPA, and PIPEDA compliant with local deployment options and data residency controls. Your confidential data never leaves your control."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#29A09D]" />,
      title: "Ethical RAG",
      description: "Source-grounded responses eliminate AI hallucinations, ensuring ethical and responsible AI use with complete transparency and auditability."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#0E5A8A]" />,
      title: "Professional Compliance",
      description: "Designed to support professional conduct rules including ABA Model Rules and SRA Standards with full audit trails and verifiable source citations."
    }
  ];

  const dataSecurityDetails = [
    "End-to-end encryption with AES-256 for data at rest and TLS 1.3 for data in transit",
    "SOC 2 Type II certified infrastructure with regular third-party security audits",
    "Multi-factor authentication, role-based access controls, and zero-trust architecture",
    "Local deployment options with client-controlled LLMs and private cloud hosting",
    "Data residency controls ensuring compliance with jurisdictional requirements"
  ];

  const complianceDetails = [
    "GDPR compliance with data subject rights, privacy by design, and EU data residency",
    "CCPA compliance with California consumer privacy rights and data transparency",
    "PIPEDA compliance for Canadian legal professionals and organizations",
    "ISO 27001 information security management framework implementation",
    "Regular compliance audits and certifications by independent third parties"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trust & Security
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              LegisClear's RAG platform is engineered with security, compliance, and ethical AI at its foundation. Experience verifiable legal intelligence with complete confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Security & Compliance Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
              >
                Security Demo
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Security Whitepaper"}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold"
              >
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Built for Legal Standards
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
              Every aspect of our platform is designed with the highest security, compliance, and ethical standards required by legal professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-t-4 border-[#43B88C] text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A2F51] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#0E5A8A] text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Security */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#0A2F51] mb-6 flex items-center">
                  <Server className="w-6 h-6 mr-3 text-[#43B88C]" />
                  Data Security & Infrastructure
                </h3>
                <ul className="space-y-3 text-[#0E5A8A]">
                  {dataSecurityDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#43B88C] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
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
                  {complianceDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why RAG Ensures Trust */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2F51] mb-8 text-center">
              Why RAG Technology Ensures Trustworthy Legal AI
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#43B88C]" />
                  Eliminates AI Hallucinations
                </h3>
                <p className="text-[#0E5A8A] mb-4">
                  Unlike generic AI models that can generate plausible but incorrect information, RAG grounds every response 
                  in verified legal sources. This retrieval-first approach ensures accuracy and reliability essential for 
                  legal practice, completely eliminating the risk of AI-generated misinformation.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[#29A09D]" />
                  Professional Standards Compliance
                </h3>
                <p className="text-[#0E5A8A]">
                  RAG's transparent architecture supports compliance with professional conduct rules including ABA Model Rules 
                  (particularly Rule 1.1 on competence and Rule 5.5 on technology), SRA Standards, and other jurisdictional 
                  requirements by providing auditable research trails and verifiable source citations.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-[#178ACB]" />
                  Always Current Information
                </h3>
                <p className="text-[#0E5A8A] mb-4">
                  RAG accesses real-time legal databases and continuously updated sources, ensuring your decisions are based 
                  on the most current legislation, case law, and regulatory updates available. This dynamic knowledge base 
                  eliminates the staleness common in traditional AI training approaches.
                </p>
                
                <h3 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-[#0E5A8A]" />
                  Complete Transparency & Auditability
                </h3>
                <p className="text-[#0E5A8A]">
                  Every RAG response includes full source citations, creating an auditable trail that meets the highest 
                  professional standards. Legal professionals can verify, review, and cite the exact sources used, 
                  enabling confident decision-making and supporting due diligence requirements.
                </p>
              </div>
            </div>

            {/* RAG Benefits Visual */}
            <div className="bg-gradient-to-r from-[#43B88C] to-[#29A09D] text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-center">The RAG Advantage for Legal Professionals</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Zap className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Source-Verified Accuracy</h4>
                  <p className="text-sm opacity-90">Every insight traceable to original documents</p>
                </div>
                <div>
                  <Database className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Always Current Knowledge</h4>
                  <p className="text-sm opacity-90">Real-time legal updates, never outdated</p>
                </div>
                <div>
                  <Eye className="w-10 h-10 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Transparent Citations</h4>
                  <p className="text-sm opacity-90">Complete audit trails for legal confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure your data and operations remain secure and compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "CCPA Compliant"].map((cert, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="w-12 h-12 text-[#43B88C] mx-auto mb-3" />
                  <h3 className="font-bold text-[#0A2F51]">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#178ACB] to-[#43B88C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Secure, Trustworthy Legal AI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See how LegisClear's security-first approach and RAG technology can provide the trust and transparency your legal practice demands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Security Demo"}
                className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Schedule Security Demo
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Security Whitepaper"}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-3 text-lg font-semibold"
              >
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrustSecurity;
