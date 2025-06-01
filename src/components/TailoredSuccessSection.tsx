
import { Card } from "@/components/ui/card";
import { Building, Users, GraduationCap, Scale, Shield, BookOpen, TrendingUp, Zap, CheckCircle } from "lucide-react";

export const TailoredSuccessSection = () => {
  const targetMarkets = [
    {
      icon: <Building className="w-12 h-12 text-[#178ACB]" />,
      title: "Law Firms",
      subtitle: "RAG-Powered Competitive Advantage",
      painPoints: [
        "Time-consuming manual research reducing billable hours",
        "Rising client expectations for faster, more accurate service",
        "Pressure to reduce costs while maintaining quality",
        "Risk of missing critical legal precedents or updates"
      ],
      ragSolutions: [
        "RAG enables 6-80x faster research, dramatically increasing billable hour potential",
        "Deliver comprehensive legal analysis in minutes, exceeding client expectations",
        "Reduce research overhead by 48% while improving accuracy with source-verified insights",
        "Never miss relevant precedents with RAG's comprehensive legal knowledge base"
      ],
      benefits: [
        "Average 840% first-year ROI through efficiency gains",
        "Handle 3x more complex matters with same resources",
        "Client satisfaction increases with faster, more thorough service",
        "Competitive edge through advanced RAG technology adoption"
      ],
      color: "border-[#178ACB]",
      bgColor: "bg-[#178ACB]/5"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#29A09D]" />,
      title: "Corporate Legal Departments",
      subtitle: "RAG for Risk Mitigation & Cost Control",
      painPoints: [
        "Complex compliance requirements across multiple jurisdictions",
        "High external counsel costs for routine legal questions",
        "Risk of regulatory non-compliance due to information gaps",
        "Slow internal legal processes impacting business velocity"
      ],
      ragSolutions: [
        "RAG provides instant access to current regulations across all relevant jurisdictions",
        "Handle routine legal queries internally with RAG-verified accuracy, reducing external counsel dependency",
        "Real-time compliance updates through RAG's continuously updated knowledge base",
        "Accelerate legal processes with instant, comprehensive legal intelligence"
      ],
      benefits: [
        "Reduce external counsel costs by up to 60%",
        "Improve compliance confidence with source-verified regulatory insights",
        "Accelerate business decisions with rapid legal guidance",
        "Strengthen risk management through comprehensive legal intelligence"
      ],
      color: "border-[#29A09D]",
      bgColor: "bg-[#29A09D]/5"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#43B88C]" />,
      title: "Universities & Academic Institutions",
      subtitle: "RAG for Legal Education & Research Excellence",
      painPoints: [
        "Students struggle with complex legal research methodologies",
        "Faculty need current legal examples for curriculum development",
        "Institutional legal needs require expert-level research capabilities",
        "Limited access to comprehensive, current legal databases"
      ],
      ragSolutions: [
        "RAG technology teaches students advanced legal research through AI-assisted learning",
        "Faculty access comprehensive, current legal examples with full source verification",
        "Institutional legal team gains expert-level research capabilities through RAG",
        "Access to continuously updated, comprehensive legal knowledge base"
      ],
      benefits: [
        "Enhance legal education with cutting-edge RAG technology exposure",
        "Improve research quality with access to verified, current legal information",
        "Reduce institutional legal costs while improving service quality",
        "Position institution as leader in legal technology education"
      ],
      color: "border-[#43B88C]",
      bgColor: "bg-[#43B88C]/5"
    }
  ];

  return (
    <section id="tailored-success" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            RAG-Powered Solutions for Every Legal Professional
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Discover how RAG technology addresses the unique challenges faced by law firms, 
            corporate legal departments, and universities with tailored, measurable benefits.
          </p>
        </div>

        <div className="space-y-16">
          {targetMarkets.map((market, index) => (
            <div key={index} className="max-w-6xl mx-auto">
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
                        Current Challenges
                      </h4>
                      <ul className="space-y-3">
                        {market.painPoints.map((pain, painIndex) => (
                          <li key={painIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                            <p className="text-[#0E5A8A] text-sm">{pain}</p>
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
                      <ul className="space-y-3">
                        {market.ragSolutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#43B88C] mt-2 flex-shrink-0"></div>
                            <p className="text-[#0E5A8A] text-sm">{solution}</p>
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
                      <ul className="space-y-3">
                        {market.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#178ACB] mt-1 flex-shrink-0" />
                            <p className="text-[#0E5A8A] text-sm font-medium">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
              Why RAG Technology Delivers Superior Results Across All Legal Sectors
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-3xl font-bold text-[#178ACB] mb-2">6-80x</div>
                <p className="text-[#0E5A8A] text-sm">Faster than traditional research methods</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#29A09D] mb-2">99.99%</div>
                <p className="text-[#0E5A8A] text-sm">Source-verified accuracy rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#43B88C] mb-2">840%+</div>
                <p className="text-[#0E5A8A] text-sm">Average first-year ROI</p>
              </div>
            </div>
            <p className="text-[#0E5A8A] text-lg">
              RAG's retrieval-first approach ensures every legal professional gets current, 
              accurate, and verifiable insights - regardless of their specific practice area or institution type.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
