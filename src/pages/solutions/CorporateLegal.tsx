
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Shield, 
  FileCheck, 
  TrendingUp, 
  AlertTriangle, 
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Scale,
  Eye,
  Database
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorporateLegal = () => {
  const navigate = useNavigate();

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: "Regulatory Complexity",
      description: "Managing compliance across multiple jurisdictions with constantly changing regulations and requirements."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Contract Bottlenecks",
      description: "Slow contract review processes that delay business operations and revenue recognition."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Risk Management",
      description: "Identifying and mitigating legal risks across business units while maintaining operational efficiency."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Cost Pressure",
      description: "Pressure to reduce legal spend while maintaining service quality and risk management standards."
    }
  ];

  const solutions = [
    {
      icon: <FileCheck className="w-8 h-8 text-[#43B88C]" />,
      title: "Intelligent Contract Management",
      description: "Automate contract review, analysis, and lifecycle management with AI-powered insights and risk assessment.",
      benefits: [
        "Reduce contract review time by 60-80%",
        "Automatic obligation and deadline tracking",
        "Risk scoring and flagging for critical terms",
        "Template optimization and standardization"
      ],
      features: [
        "Contract clause analysis and extraction",
        "Automated compliance checking",
        "Renewal and milestone alerts",
        "Performance benchmarking"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-[#178ACB]" />,
      title: "Regulatory Compliance Monitoring",
      description: "Stay ahead of regulatory changes with real-time monitoring and automated compliance assessment across all jurisdictions.",
      benefits: [
        "Real-time regulatory change alerts",
        "Automated compliance gap analysis",
        "Multi-jurisdictional monitoring",
        "Proactive risk identification"
      ],
      features: [
        "Regulatory change tracking",
        "Compliance dashboard and reporting",
        "Policy update recommendations",
        "Audit trail maintenance"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-[#29A09D]" />,
      title: "Legal Knowledge Management",
      description: "Centralize and organize legal knowledge with intelligent search and retrieval across all corporate legal assets.",
      benefits: [
        "Instant access to precedents and policies",
        "Consistent legal guidance across teams",
        "Reduced external counsel dependency",
        "Institutional knowledge preservation"
      ],
      features: [
        "Intelligent document categorization",
        "Advanced search and retrieval",
        "Collaborative knowledge building",
        "Integration with business systems"
      ]
    }
  ];

  const useCases = [
    {
      title: "M&A Due Diligence",
      description: "Accelerate deal timelines with automated document review and risk assessment.",
      timeline: "Reduce due diligence time from weeks to days"
    },
    {
      title: "Regulatory Compliance",
      description: "Monitor compliance across global operations with real-time regulatory updates.",
      timeline: "24/7 compliance monitoring and alerting"
    },
    {
      title: "Contract Negotiations",
      description: "Speed up negotiations with intelligent contract analysis and risk scoring.",
      timeline: "50-70% faster contract turnaround"
    },
    {
      title: "Litigation Management",
      description: "Manage litigation more effectively with intelligent document analysis and case strategy.",
      timeline: "Significantly reduced discovery costs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Building2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI for Corporate Legal Departments
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Enhance compliance, accelerate contract management, and reduce legal risk with enterprise-grade RAG technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Corporate Legal Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
              >
                Schedule Enterprise Demo
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold"
              >
                Discuss Enterprise Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Corporate Legal Challenges
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Corporate legal departments face unique pressures to balance risk management, compliance, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2F51] mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-[#0E5A8A] text-sm">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Enterprise Legal AI Solutions
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Transform your corporate legal operations with AI solutions designed for enterprise scale and complexity.
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        {solution.icon}
                        <h3 className="text-2xl font-bold text-[#0A2F51] ml-4">
                          {solution.title}
                        </h3>
                      </div>
                      <p className="text-[#0E5A8A] text-lg mb-6">
                        {solution.description}
                      </p>
                      <Button
                        onClick={() => window.location.href = `mailto:andre@legisclear.com?subject=Learn More About ${solution.title} for Enterprise`}
                        className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold text-[#0A2F51] mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-[#0E5A8A] text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-1">
                      <h4 className="text-lg font-semibold text-[#0A2F51] mb-4">Features:</h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-[#178ACB] mt-1 mr-3 flex-shrink-0" />
                            <span className="text-[#0E5A8A] text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              See how corporate legal teams are using LegisClear to transform their most critical processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-gradient-to-r from-[#43B88C] to-[#29A09D] text-white p-4 rounded-lg">
                    <p className="font-semibold">{useCase.timeline}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-gradient-to-r from-[#43B88C] to-[#29A09D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              LegisClear provides the security, scalability, and integration capabilities that enterprise legal departments require.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>SOC 2 Type II certification</li>
                  <li>Single sign-on (SSO) integration</li>
                  <li>Role-based access controls</li>
                  <li>Data encryption at rest and in transit</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <CardContent className="p-8">
                <Scale className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>Cloud-native infrastructure</li>
                  <li>Auto-scaling capabilities</li>
                  <li>High availability (99.9% uptime)</li>
                  <li>Global data residency options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <CardContent className="p-8">
                <Database className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">System Integration</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>API-first architecture</li>
                  <li>ERP and CRM integration</li>
                  <li>Document management systems</li>
                  <li>Custom workflow automation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Ready to Transform Your Corporate Legal Operations?
            </h2>
            <p className="text-xl text-[#0E5A8A] mb-8">
              Join forward-thinking corporate legal departments that are leveraging AI to deliver better business outcomes while managing risk more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Enterprise Demo and Pricing"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 text-lg font-semibold"
              >
                Get Enterprise Demo
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Discuss Corporate Legal Requirements"}
                variant="outline"
                className="border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Discuss Requirements
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

export default CorporateLegal;
