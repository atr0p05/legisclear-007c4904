
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Scale, User, ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "For Law Firms",
      icon: <Scale className="w-12 h-12 text-[#43B88C]" />,
      description: "Streamline operations, reduce billable hours on routine tasks, and deliver faster results to clients.",
      benefits: [
        "Automate document review and analysis",
        "Accelerate legal research by 6-80x",
        "Improve client service delivery",
        "Reduce operational costs significantly"
      ],
      path: "/solutions/law-firms",
      color: "border-[#43B88C]"
    },
    {
      title: "For Corporate Legal Departments",
      icon: <Building2 className="w-12 h-12 text-[#178ACB]" />,
      description: "Enhance compliance monitoring, contract management, and risk assessment capabilities.",
      benefits: [
        "Monitor regulatory compliance in real-time",
        "Streamline contract lifecycle management",
        "Identify and mitigate legal risks proactively",
        "Optimize internal legal workflows"
      ],
      path: "/solutions/corporate-legal",
      color: "border-[#178ACB]"
    },
    {
      title: "For Individual Attorneys",
      icon: <User className="w-12 h-12 text-[#29A09D]" />,
      description: "Access enterprise-grade AI tools designed for solo practitioners and small practices.",
      benefits: [
        "Level the playing field with big firms",
        "Affordable enterprise-grade AI tools",
        "Simplify case preparation and research",
        "Increase practice efficiency and profitability"
      ],
      path: "/solutions/individual-attorneys",
      color: "border-[#29A09D]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Solutions for Every Legal Professional
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover how LegisClear's RAG technology transforms legal workflows across different practice areas and organization sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
              <Button
                onClick={() => navigate("/platform")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold"
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Tailored Solutions for Your Legal Practice
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Each solution is specifically designed to address the unique challenges and requirements of different legal professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className={`border-t-4 ${solution.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2F51] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-6">
                    {solution.description}
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-[#0E5A8A]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => navigate(solution.path)}
                    className="w-full bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LegisClear */}
      <section className="py-20 bg-gradient-to-r from-[#43B88C] to-[#29A09D]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Legal Professionals Choose LegisClear
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="opacity-90">6-80x faster research and analysis with RAG-powered AI intelligence.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Verifiable Results</h3>
                <p className="opacity-90">Every insight backed by traceable sources and complete audit trails.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                <p className="opacity-90">Bank-grade security with SOC 2 compliance and data residency controls.</p>
              </div>
            </div>
            <Button
              onClick={() => navigate("/trust-security")}
              className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Learn About Our Security
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
