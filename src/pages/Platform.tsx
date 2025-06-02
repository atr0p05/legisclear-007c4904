import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  Database,
  BarChart3,
  FileCheck,
  Users,
  Settings,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";

const Platform = () => {
  const navigate = useNavigate();
  const { elementRef: heroRef, isVisible: heroVisible } = useOneTimeAnimation({ threshold: 0.3 });
  const { elementRef: journeyRef, isVisible: journeyVisible } = useOneTimeAnimation({ threshold: 0.2 });

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleRequestDemo = () => {
    window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo - Experience the Future of Legal AI";
  };

  const features = [
    {
      icon: <FileText className="w-8 h-8 text-[#43B88C]" />,
      title: "Intelligent Document Review",
      description: "Don't just automate, understand. Our AI goes beyond keywords to analyze context and intent, flagging critical information in minutes.",
      benefits: [
        "Context-aware document analysis",
        "Automatic clause identification",
        "Risk assessment and flagging",
        "Multi-format support (PDF, DOCX, etc.)"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-[#178ACB]" />,
      title: "Legal Research Assistant",
      description: "Access vast legal databases with natural language queries. Get relevant case law, statutes, and precedents with complete citations.",
      benefits: [
        "Natural language legal queries",
        "Comprehensive case law database",
        "Automatic citation generation",
        "Jurisdictional filtering"
      ]
    },
    {
      icon: <Brain className="w-8 h-8 text-[#29A09D]" />,
      title: "Contract Analysis Engine",
      description: "Analyze contracts for risks, obligations, and key terms. Identify potential issues before they become problems.",
      benefits: [
        "Automated contract review",
        "Risk and obligation mapping",
        "Key term extraction",
        "Compliance verification"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Compliance Monitoring",
      description: "Stay ahead of regulatory changes with real-time monitoring and automated compliance checking across multiple jurisdictions.",
      benefits: [
        "Real-time regulatory updates",
        "Automated compliance checks",
        "Multi-jurisdictional coverage",
        "Alert and notification system"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#43B88C]" />,
      title: "Legal Analytics Dashboard",
      description: "Gain insights into your legal operations with comprehensive analytics and reporting capabilities.",
      benefits: [
        "Operational efficiency metrics",
        "Cost analysis and tracking",
        "Performance benchmarking",
        "Custom reporting tools"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-[#178ACB]" />,
      title: "Knowledge Management",
      description: "Centralize your legal knowledge with intelligent organization and retrieval systems.",
      benefits: [
        "Centralized document repository",
        "Intelligent tagging and categorization",
        "Version control and tracking",
        "Team collaboration tools"
      ]
    }
  ];

  const integrations = [
    "Microsoft Office 365",
    "Google Workspace",
    "Salesforce",
    "NetDocuments",
    "iManage",
    "Legal Files",
    "Clio",
    "PracticePanther"
  ];

  const journeyMilestones = [
    {
      year: "2025",
      title: "LegisClear Founded",
      description: "Founded with the mission to bring verifiable AI intelligence to legal professionals through RAG technology."
    },
    {
      year: "2025",
      title: "RAG Platform Development",
      description: "Developed our proprietary RAG-powered legal intelligence platform with comprehensive source verification."
    },
    {
      year: "2025",
      title: "Security & Compliance",
      description: "Achieved enterprise-grade security standards and regulatory compliance frameworks."
    },
    {
      year: "2025",
      title: "Market Launch",
      description: "Launched LegisClear to serve law firms, corporate legal departments, and individual attorneys."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F51] via-[#0E5A8A] to-[#178ACB]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="inline-block">
                LegisClear: Revolutionizing Legal Intelligence
              </span>
              <br />
              <span className={`text-[#43B88C] inline-block transition-all duration-1000 delay-300 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                with Verifiable
                <span className={`mx-2 transition-all duration-500 delay-500 ${
                  heroVisible ? 'text-shadow-sm' : ''
                }`}>
                  RAG AI
                </span>
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 text-gray-200 transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Traditional AI models can generate plausible but incorrect information. RAG technology retrieves verified 
              information first, then generates responses, ensuring every answer is factual and traceable.
            </p>
            
            <div className={`bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 transition-all duration-1000 delay-700 transform ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <p className="text-lg font-medium mb-3">The RAG Advantage: Where Precision Meets Intelligence</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className={`transition-all duration-500 delay-1000 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  ✓ <strong>Source-Verified Accuracy:</strong> Every insight traceable to original documents
                </div>
                <div className={`transition-all duration-500 delay-1200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  ✓ <strong>Always Current Knowledge:</strong> Real-time legal updates, never outdated
                </div>
                <div className={`transition-all duration-500 delay-1400 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  ✓ <strong>Transparent Citations:</strong> Complete audit trails for legal confidence
                </div>
              </div>
            </div>
            
            <div className={`flex justify-center space-x-4 transition-all duration-1000 delay-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button
                onClick={() => navigate("/signup")}
                className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Explore Our Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section 
        ref={journeyRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6 transition-all duration-1000 ${
              journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Our Journey
            </h2>
            <p className={`text-xl text-[#0E5A8A] max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              From concept to launch, we've been focused on delivering AI that legal professionals can trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex items-center mb-12 transition-all duration-1000 ${
                  journeyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-2xl font-bold text-[#43B88C]">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-[#43B88C] rounded-full mr-8 relative">
                  <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-[#43B88C]/30 transform -translate-x-1/2 last:hidden"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-2">{milestone.title}</h3>
                  <p className="text-[#0E5A8A]">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Comprehensive Legal AI Features
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Our platform combines multiple AI-powered tools into one seamless experience, designed to handle every aspect of your legal workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#43B88C] mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-[#0E5A8A]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How RAG Powers Our Platform */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
                Powered by RAG Technology
              </h2>
              <p className="text-xl text-[#0E5A8A]">
                Retrieval-Augmented Generation ensures every AI response is grounded in verified legal sources, eliminating hallucinations and providing complete transparency.
              </p>
            </div>

            <Tabs defaultValue="retrieval" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="retrieval">Intelligent Retrieval</TabsTrigger>
                <TabsTrigger value="generation">Verified Generation</TabsTrigger>
                <TabsTrigger value="transparency">Complete Transparency</TabsTrigger>
              </TabsList>
              
              <TabsContent value="retrieval" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Database className="w-8 h-8 text-[#43B88C] mr-4" />
                      <h3 className="text-2xl font-bold text-[#0A2F51]">Smart Legal Knowledge Retrieval</h3>
                    </div>
                    <p className="text-[#0E5A8A] mb-6">
                      Our system first searches through vast legal databases to find the most relevant and current information before generating any response. This ensures accuracy and relevance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Semantic search across comprehensive legal databases</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Real-time access to current legislation and case law</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Context-aware document and precedent matching</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="generation" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Brain className="w-8 h-8 text-[#178ACB] mr-4" />
                      <h3 className="text-2xl font-bold text-[#0A2F51]">Source-Grounded AI Generation</h3>
                    </div>
                    <p className="text-[#0E5A8A] mb-6">
                      AI generates responses using only the retrieved legal information, ensuring every answer is factual, current, and verifiable.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#178ACB] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Responses based exclusively on retrieved sources</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#178ACB] mt-0.5 mr-3 flex-shrink-0" />
                        <span>No AI hallucinations or fabricated information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#178ACB] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Consistent accuracy across all legal domains</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transparency" className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <FileCheck className="w-8 h-8 text-[#29A09D] mr-4" />
                      <h3 className="text-2xl font-bold text-[#0A2F51]">Full Source Citations & Audit Trails</h3>
                    </div>
                    <p className="text-[#0E5A8A] mb-6">
                      Every response includes complete citations and reasoning, creating an auditable trail that meets the highest professional standards.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#29A09D] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Complete source citations for every statement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#29A09D] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Transparent reasoning and decision pathways</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#29A09D] mt-0.5 mr-3 flex-shrink-0" />
                        <span>Professional compliance and audit readiness</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              LegisClear integrates with your existing legal technology stack, ensuring a smooth transition and maximum productivity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <Settings className="w-8 h-8 text-[#178ACB] mx-auto mb-3" />
                  <p className="font-medium text-[#0A2F51]">{integration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#178ACB] to-[#43B88C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the legal professionals who are already experiencing the power of verifiable AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Platform Demo"}
                className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Schedule Platform Demo
              </Button>
              <Button
                onClick={() => navigate("/solutions")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
