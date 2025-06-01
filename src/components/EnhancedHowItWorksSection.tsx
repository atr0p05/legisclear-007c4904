
import { Card, CardContent } from "@/components/ui/card";
import { Database, Search, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimationSequence } from "@/hooks/useAnimationSequence";
import { useState } from "react";

export const EnhancedHowItWorksSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: stepsRef, activeIndex } = useAnimationSequence(3, { stagger: 600, delay: 300 });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: <Database className="w-8 h-8 text-[#178ACB]" />,
      title: "Smart Legal Knowledge Base",
      description: "RAG continuously ingests and indexes the most current legal documents, case law, statutes, and regulations from authoritative sources.",
      details: [
        "Real-time updates from official legal databases",
        "Semantic indexing for intelligent retrieval",
        "Multi-jurisdictional coverage with source verification"
      ],
      color: "bg-[#178ACB]",
      hoverColor: "hover:bg-[#0E5A8A]"
    },
    {
      number: "02",
      icon: <Search className="w-8 h-8 text-[#29A09D]" />,
      title: "RAG-Powered Retrieval & Analysis",
      description: "When you ask a question, RAG retrieves the most relevant legal information and performs intelligent analysis using advanced AI reasoning.",
      details: [
        "Natural language query processing",
        "Context-aware document retrieval",
        "Multi-source cross-referencing and analysis"
      ],
      color: "bg-[#29A09D]",
      hoverColor: "hover:bg-[#178ACB]"
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8 text-[#43B88C]" />,
      title: "Verified Intelligence Generation",
      description: "RAG generates comprehensive answers with complete source citations, ensuring every insight is verifiable and auditable.",
      details: [
        "Source-grounded responses with full citations",
        "Confidence scoring and uncertainty indicators",
        "Complete audit trail for every insight"
      ],
      color: "bg-[#43B88C]",
      hoverColor: "hover:bg-[#29A09D]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className={`text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            How RAG Technology Transforms Legal Research
          </h2>
          <p className={`text-xl text-[#0E5A8A] max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`}>
            Unlike traditional AI that generates responses from static training data, 
            RAG retrieves and analyzes current legal information in real-time, 
            ensuring every answer is accurate, current, and verifiable.
          </p>
        </div>

        {/* Enhanced Process Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative" ref={stepsRef}>
            {/* Animated Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#178ACB] via-[#29A09D] to-[#43B88C] transform -translate-y-1/2 z-0">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-[#29A09D] animate-pulse" />
              </div>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <Card 
                  className={`border-t-4 border-gray-200 hover:shadow-xl transition-all duration-500 group h-full cursor-pointer transform ${
                    activeIndex >= index ? 'animate-scale-in opacity-100' : 'opacity-0 scale-90'
                  } ${hoveredStep === index ? 'scale-105 -translate-y-2' : ''}`}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Enhanced Step Number */}
                    <div className={`w-16 h-16 ${step.color} ${step.hoverColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>

                    {/* Animated Icon */}
                    <div className={`mb-4 flex justify-center transition-all duration-300 ${
                      hoveredStep === index ? 'scale-110 animate-pulse' : 'group-hover:scale-110'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0A2F51] mb-4 group-hover:text-[#178ACB] transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#0E5A8A] mb-6 leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Enhanced Details */}
                    <div className="text-left">
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex} 
                            className={`flex items-start space-x-2 transition-all duration-300 ${
                              hoveredStep === index ? 'translate-x-2' : ''
                            }`}
                            style={{ transitionDelay: `${detailIndex * 100}ms` }}
                          >
                            <div className={`w-2 h-2 rounded-full ${step.color} mt-2 flex-shrink-0 transition-all duration-300 ${
                              hoveredStep === index ? 'scale-125' : ''
                            }`}></div>
                            <p className="text-sm text-[#0E5A8A] font-medium">{detail}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-[#29A09D] rotate-90 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Why RAG is Different */}
        <div className="mt-16 text-center">
          <div className={`bg-gradient-to-r from-[#0A2F51] to-[#0E5A8A] p-8 rounded-lg text-white max-w-4xl mx-auto transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
            titleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '800ms' }}>
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold">
                The RAG Advantage: Why This Process Delivers Superior Results
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold mb-2 text-[#43B88C]">Traditional AI Limitations:</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  <li className="transition-all duration-300 hover:translate-x-2">• Relies on static, potentially outdated training data</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Cannot access current legal developments</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Prone to hallucinations and inaccuracies</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• No source verification or audit trail</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold mb-2 text-[#43B88C]">RAG Technology Benefits:</h4>
                <ul className="space-y-1 text-sm opacity-90">
                  <li className="transition-all duration-300 hover:translate-x-2">• Real-time access to current legal information</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Every response grounded in verifiable sources</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Complete audit trail and citation tracking</li>
                  <li className="transition-all duration-300 hover:translate-x-2">• Eliminates AI hallucinations through source verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
