import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Users, GraduationCap, Scale, Shield, BookOpen, TrendingUp, Zap, CheckCircle, Download } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const TailoredSolutionsTabbed = () => {
  const targetMarkets = [
    {
      id: "law-firms",
      icon: <Building className="w-8 h-8 text-[#178ACB]" />,
      title: "Law Firms",
      subtitle: "RAG-Powered Competitive Advantage & Profitability",
      painPoints: [
        "Intense pressure to maximize billable hours while managing increasing client demands for speed and accuracy",
        "Rising competition forcing firms to deliver faster, more cost-effective legal services",
        "Risk of malpractice from research errors or overlooked precedents that could impact case outcomes",
        "Voluminous case data and complex legal research consuming valuable attorney time"
      ],
      ragSolutions: [
        "RAG's semantic understanding and retrieval capabilities automate time-consuming research, cutting non-billable time by up to **48%** while freeing attorneys for high-value client work through intelligent document analysis and precedent identification",
        "RAG's source-grounded responses deliver verified answers **6-80x faster** with complete case citations and statutory references, exceeding client expectations while maintaining premium pricing through superior accuracy and verifiability",
        "RAG's core architecture grounds all insights in verifiable sources with complete audit trails: every piece of information links directly to its original document, **drastically reducing research errors** and mitigating malpractice risk through traceable legal reasoning",
        "RAG's advanced retrieval technology handles vast legal datasets through semantic search and intelligent synthesis, enabling comprehensive analysis across **thousands of cases and statutes in minutes** rather than days"
      ],
      benefits: [
        "Average **840% first-year ROI** through efficiency gains and increased billable hour capacity",
        "Handle **3x more complex matters** with same resources while improving service quality",
        "**Client satisfaction increases** with faster, more thorough, verifiable legal service delivery",
        "**Competitive edge** through advanced RAG technology adoption and superior research capabilities"
      ],
      color: "border-[#178ACB]",
      bgColor: "bg-[#178ACB]/5"
    },
    {
      id: "corporate-legal",
      icon: <Shield className="w-8 h-8 text-[#29A09D]" />,
      title: "Corporate Legal",
      subtitle: "RAG for Strategic Risk Mitigation & Cost Control",
      painPoints: [
        "Complex compliance requirements across multiple jurisdictions with ever-changing regulatory landscapes",
        "High external counsel costs for routine legal questions and due diligence that impact budget allocations",
        "Risk of regulatory non-compliance due to information gaps or outdated legal analysis",
        "Pressure to operate at business speed while maintaining legal precision and thoroughness"
      ],
      ragSolutions: [
        "RAG's real-time retrieval system provides **instant access to current regulations** across all relevant jurisdictions: the technology continuously updates its knowledge base, ensuring legal teams always work with the most recent statutory changes and regulatory updates with source-verified accuracy",
        "RAG's natural language processing and document analysis capabilities handle routine legal queries internally with **expert-level precision**, reducing external counsel dependency by up to **60%** through intelligent contract review, compliance checking, and policy analysis",
        "RAG's continuous knowledge updates and cross-referencing capabilities enable **real-time compliance monitoring**: the system automatically identifies regulatory changes affecting your organization and cross-references them against existing policies and contracts",
        "RAG's intelligent synthesis accelerates contract reviews, due diligence, and legal processes through **automated document analysis**, risk identification, and comprehensive legal intelligence that maintains thoroughness while operating at business speed"
      ],
      benefits: [
        "Reduce external counsel costs by up to **60%** while improving internal legal capabilities",
        "Improve compliance confidence with **source-verified regulatory insights** and audit trails",
        "Accelerate business decisions with **rapid, reliable legal guidance** and risk assessments",
        "Strengthen enterprise risk management through **comprehensive, always-current** legal intelligence"
      ],
      color: "border-[#29A09D]",
      bgColor: "bg-[#29A09D]/5"
    },
    {
      id: "universities",
      icon: <GraduationCap className="w-8 h-8 text-[#43B88C]" />,
      title: "Universities",
      subtitle: "RAG for Legal Education Excellence & Research Innovation",
      painPoints: [
        "Need to prepare students for a technology-driven legal landscape while maintaining academic rigor",
        "Faculty require advanced tools for large-scale legal research and novel scholarly inquiry",
        "Institutional legal departments need expert-level research capabilities for compliance and policy matters",
        "Curriculum must stay current with rapidly evolving legal technology and AI ethics considerations"
      ],
      ragSolutions: [
        "RAG's transparent, source-grounded architecture provides **hands-on experience with cutting-edge AI research methods**: students learn responsible AI use through a system that always shows its sources, teaching both advanced legal research and ethical AI principles essential for next-generation lawyers",
        "RAG's comprehensive retrieval capabilities and semantic search enable faculty to access **unprecedented research scope**: the technology can analyze vast legal corpora across jurisdictions and time periods, supporting novel scholarly inquiry with complete source verification and academic citation standards",
        "RAG's sophisticated analysis and synthesis capabilities provide institutional legal teams with **expert-level research power**: the platform handles complex regulatory compliance, policy development, and legal risk assessment with the same rigor as top-tier legal counsel",
        "RAG serves as both a powerful research tool and essential pedagogical instrument: students learn **cutting-edge legal technology** while faculty demonstrate responsible AI deployment, preparing graduates for a technology-enhanced legal profession"
      ],
      benefits: [
        "Enhance legal education with exposure to **cutting-edge RAG technology** and ethical AI principles",
        "Improve research quality and output with access to **verified, comprehensive** legal information",
        "Reduce institutional legal costs while improving **service quality and compliance** capabilities",
        "Position institution as **leader in legal technology education** and responsible AI use in law"
      ],
      color: "border-[#43B88C]",
      bgColor: "bg-[#43B88C]/5"
    }
  ];

  return (
    <section id="tailored-solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            RAG-Powered Solutions for Every Legal Professional
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Discover how RAG technology addresses the unique challenges faced by different legal sectors 
            with tailored, measurable benefits that transform legal practice and education.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="law-firms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="law-firms" className="flex items-center gap-2 text-sm md:text-base">
                <Building className="w-4 h-4" />
                Law Firms
              </TabsTrigger>
              <TabsTrigger value="corporate-legal" className="flex items-center gap-2 text-sm md:text-base">
                <Shield className="w-4 h-4" />
                Corporate Legal
              </TabsTrigger>
              <TabsTrigger value="universities" className="flex items-center gap-2 text-sm md:text-base">
                <GraduationCap className="w-4 h-4" />
                Universities
              </TabsTrigger>
            </TabsList>

            {targetMarkets.map((market) => (
              <TabsContent key={market.id} value={market.id}>
                <Card className={`border-t-4 ${market.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  <div className={`${market.bgColor} p-8`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {market.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#0A2F51]">
                          {market.title}
                        </h3>
                        <p className="text-[#0E5A8A] font-medium text-lg">
                          {market.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Pain Points */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#0A2F51] mb-4 flex items-center">
                          <Scale className="w-5 h-5 mr-2 text-red-500" />
                          Critical Challenges
                        </h4>
                        <ul className="space-y-4">
                          {market.painPoints.map((pain, painIndex) => (
                            <li key={painIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                              <p className="text-[#0E5A8A] text-sm leading-relaxed">{pain}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* RAG Solutions */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#0A2F51] mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-[#43B88C]" />
                          RAG-Powered Solutions
                        </h4>
                        <ul className="space-y-4">
                          {market.ragSolutions.map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-[#43B88C] mt-2 flex-shrink-0"></div>
                              <p 
                                className="text-[#0E5A8A] text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                  __html: solution.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0A2F51]">$1</strong>') 
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#0A2F51] mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-[#178ACB]" />
                          Measurable Results
                        </h4>
                        <ul className="space-y-4">
                          {market.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 flex-shrink-0" />
                              <p 
                                className="text-[#0E5A8A] text-sm font-medium leading-relaxed"
                                dangerouslySetInnerHTML={{ 
                                  __html: benefit.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0A2F51]">$1</strong>') 
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Segment-Specific CTA */}
                    <div className="mt-8 text-center">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h5 className="text-lg font-semibold text-[#0A2F51] mb-4">
                          Ready to Transform Your {market.title === "Universities" ? "Institution" : market.title.slice(0, -1)} with RAG?
                        </h5>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <EnhancedCTAButton variant="demo">
                            Schedule {market.title} Demo
                          </EnhancedCTAButton>
                          <EnhancedCTAButton variant="download">
                            <Download className="w-4 h-4 mr-2" />
                            Download {market.title} Case Study
                          </EnhancedCTAButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
              Why RAG Technology Delivers Superior Results Across All Legal Sectors
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div className="bg-gradient-to-br from-[#178ACB]/10 to-[#178ACB]/5 p-4 rounded-lg">
                <div className="text-4xl font-bold text-[#178ACB] mb-2">6-80x</div>
                <p className="text-[#0E5A8A] text-sm font-medium">Faster than traditional research methods with verified accuracy</p>
              </div>
              <div className="bg-gradient-to-br from-[#29A09D]/10 to-[#29A09D]/5 p-4 rounded-lg">
                <div className="text-4xl font-bold text-[#29A09D] mb-2">99.99%</div>
                <p className="text-[#0E5A8A] text-sm font-medium">Source-verified accuracy rate with complete audit trails</p>
              </div>
              <div className="bg-gradient-to-br from-[#43B88C]/10 to-[#43B88C]/5 p-4 rounded-lg">
                <div className="text-4xl font-bold text-[#43B88C] mb-2">840%+</div>
                <p className="text-[#0E5A8A] text-sm font-medium">Average first-year ROI across all legal practice areas</p>
              </div>
            </div>
            <p className="text-[#0E5A8A] text-lg leading-relaxed">
              RAG's retrieval-first approach ensures every legal professional gets current, 
              accurate, and verifiable insights—regardless of their specific practice area, 
              institution type, or organizational complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
