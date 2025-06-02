
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Search, 
  Brain,
  CheckCircle,
  ArrowRight,
  Users,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LawFirms = () => {
  const navigate = useNavigate();

  const painPoints = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Time-Intensive Research",
      description: "Associates spend 40-60% of billable hours on document review and legal research, reducing profitability."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: "High Operational Costs",
      description: "External research services, junior associate overhead, and inefficient workflows drain firm resources."
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Inconsistent Quality",
      description: "Research quality varies by attorney experience, leading to missed opportunities and potential risks."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Client Pressure",
      description: "Clients demand faster turnaround times and lower costs while expecting premium service quality."
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-[#43B88C]" />,
      title: "Intelligent Document Review",
      description: "Automate contract analysis, due diligence reviews, and document summarization with 95%+ accuracy.",
      benefits: [
        "Reduce document review time by 70-80%",
        "Identify critical clauses and risks automatically",
        "Generate executive summaries instantly",
        "Maintain consistent quality across all matters"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-[#178ACB]" />,
      title: "Advanced Legal Research",
      description: "Access comprehensive case law, statutes, and precedents with natural language queries and instant results.",
      benefits: [
        "6-80x faster than traditional research methods",
        "Complete citation trails and source verification",
        "Jurisdiction-specific filtering and analysis",
        "Real-time legal update monitoring"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-[#29A09D]" />,
      title: "Brief and Motion Drafting",
      description: "Generate first drafts of legal documents with relevant precedents and arguments automatically inserted.",
      benefits: [
        "50-70% reduction in drafting time",
        "Consistent argument structure and style",
        "Automatic precedent citation and verification",
        "Version control and collaborative editing"
      ]
    }
  ];

  const roiMetrics = [
    {
      metric: "840%",
      label: "Average ROI",
      description: "Based on time savings and efficiency gains"
    },
    {
      metric: "6-80x",
      label: "Faster Research",
      description: "Compared to traditional methods"
    },
    {
      metric: "70-80%",
      label: "Time Reduction",
      description: "In document review and analysis"
    },
    {
      metric: "$500K+",
      label: "Annual Savings",
      description: "For mid-size firms (50+ attorneys)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Scale className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Solutions for Law Firms
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Transform your firm's operations with RAG-powered AI that delivers faster research, reduced costs, and improved client outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Law Firm Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
              >
                Schedule Firm Demo
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold"
              >
                Discuss Your Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Challenges Facing Modern Law Firms
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Law firms today face unprecedented pressure to deliver faster, more cost-effective services while maintaining the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="border-l-4 border-red-500 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2F51] mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[#0E5A8A] text-sm">
                    {point.description}
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
              LegisClear Solutions for Law Firms
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Our RAG-powered platform addresses these challenges with intelligent automation that maintains the quality and accuracy your clients expect.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
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
                        onClick={() => window.location.href = `mailto:andre@legisclear.com?subject=Learn More About ${solution.title}`}
                        className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#0A2F51] mb-4">Key Benefits:</h4>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-[#0E5A8A]">{benefit}</span>
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

      {/* ROI Metrics */}
      <section className="py-20 bg-gradient-to-r from-[#43B88C] to-[#29A09D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results for Law Firms
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Law firms using LegisClear report significant improvements in efficiency, cost reduction, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roiMetrics.map((item, index) => (
              <Card key={index} className="text-center bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6 text-white">
                  <div className="text-4xl font-bold mb-2">{item.metric}</div>
                  <div className="text-lg font-semibold mb-2">{item.label}</div>
                  <div className="text-sm opacity-90">{item.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Simple Implementation Process
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Get your firm up and running with LegisClear in as little as 2-4 weeks with our proven implementation methodology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Assessment", description: "Analyze your current workflows and identify optimization opportunities" },
                { step: "2", title: "Setup", description: "Configure the platform with your practice areas and document types" },
                { step: "3", title: "Training", description: "Comprehensive training for your team on platform features and best practices" },
                { step: "4", title: "Go Live", description: "Launch with ongoing support and optimization as your team scales usage" }
              ].map((phase, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#43B88C] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2F51] mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-[#0E5A8A] text-sm">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Ready to Transform Your Law Firm?
            </h2>
            <p className="text-xl text-[#0E5A8A] mb-8">
              Join the growing number of law firms leveraging AI to deliver better outcomes for their clients while improving their bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Law Firm ROI Analysis"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 text-lg font-semibold"
              >
                Get Custom ROI Analysis
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Schedule Law Firm Demo"}
                variant="outline"
                className="border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Schedule Demo
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

export default LawFirms;
