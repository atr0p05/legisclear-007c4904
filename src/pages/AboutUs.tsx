
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-[#43B88C]" />,
      title: "Precision & Accuracy",
      description: "We believe legal AI must be 100% accurate. Our RAG technology ensures every response is grounded in verified sources."
    },
    {
      icon: <Eye className="w-8 h-8 text-[#178ACB]" />,
      title: "Transparency",
      description: "Complete visibility into AI reasoning and sources. Legal professionals deserve to understand how conclusions are reached."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#29A09D]" />,
      title: "Legal Excellence",
      description: "Built by and for legal professionals who understand the nuances and requirements of legal practice."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible in legal technology while maintaining professional standards."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "LegisClear Founded",
      description: "Founded with the mission to bring verifiable AI intelligence to legal professionals through RAG technology."
    },
    {
      year: "2024",
      title: "RAG Platform Development",
      description: "Developed our proprietary RAG-powered legal intelligence platform with comprehensive source verification."
    },
    {
      year: "2024",
      title: "Security & Compliance",
      description: "Achieved enterprise-grade security standards and regulatory compliance frameworks."
    },
    {
      year: "2024",
      title: "Market Launch",
      description: "Launched LegisClear to serve law firms, corporate legal departments, and individual attorneys."
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
              About LegisClear
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We're revolutionizing legal intelligence with AI that legal professionals can trust—accurate, transparent, and verifiable.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-l-4 border-[#43B88C]">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-[#43B88C] mb-6" />
                <h2 className="text-2xl font-bold text-[#0A2F51] mb-4">Our Mission</h2>
                <p className="text-[#0E5A8A] text-lg leading-relaxed">
                  To democratize access to advanced legal intelligence by providing AI-powered tools that deliver accurate, 
                  verifiable, and transparent insights to legal professionals of all practice sizes and specializations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#178ACB]">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-[#178ACB] mb-6" />
                <h2 className="text-2xl font-bold text-[#0A2F51] mb-4">Our Vision</h2>
                <p className="text-[#0E5A8A] text-lg leading-relaxed">
                  A legal profession where every practitioner has access to enterprise-grade AI intelligence, 
                  enabling faster, more accurate decision-making while maintaining the highest standards of 
                  professional ethics and transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
                The Challenge We're Solving
              </h2>
              <p className="text-xl text-[#0E5A8A]">
                Legal professionals face unprecedented information overload while needing absolute accuracy and transparency.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-4">Traditional Challenges</h3>
                  <ul className="space-y-3 text-[#0E5A8A]">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      Hours spent on manual document review
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      Inconsistent research quality and depth
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      High costs for comprehensive legal research
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      Risk of missing critical information
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      Unreliable AI with hallucinations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-4">LegisClear Solutions</h3>
                  <ul className="space-y-3 text-[#0E5A8A]">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#43B88C] mr-3 mt-0.5 flex-shrink-0" />
                      6-80x faster document analysis with AI
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#43B88C] mr-3 mt-0.5 flex-shrink-0" />
                      Consistent, comprehensive research quality
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#43B88C] mr-3 mt-0.5 flex-shrink-0" />
                      Significant cost savings and ROI
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#43B88C] mr-3 mt-0.5 flex-shrink-0" />
                      AI-powered identification of critical insights
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#43B88C] mr-3 mt-0.5 flex-shrink-0" />
                      RAG technology eliminates hallucinations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2F51] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#0E5A8A] text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why RAG Technology */}
      <section className="py-20 bg-gradient-to-r from-[#43B88C] to-[#29A09D]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why We Choose RAG Technology
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Eliminates Hallucinations</h3>
                <p className="opacity-90">
                  RAG grounds every response in verified legal sources, ensuring accuracy that legal professionals can trust.
                </p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Always Current</h3>
                <p className="opacity-90">
                  Real-time access to updated legal information, ensuring decisions are based on current law.
                </p>
              </div>
              <div>
                <Eye className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fully Transparent</h3>
                <p className="opacity-90">
                  Complete source citations and audit trails meet the highest professional standards.
                </p>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-8">
              Traditional AI models can generate plausible but incorrect information. RAG technology retrieves verified information 
              first, then generates responses, ensuring every answer is factual and traceable.
            </p>
            <Button
              onClick={() => navigate("/platform")}
              className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Explore Our Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              From concept to launch, we've been focused on delivering AI that legal professionals can trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-2xl font-bold text-[#43B88C]">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-[#43B88C] rounded-full mt-2 mr-8"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A2F51] mb-2">{milestone.title}</h3>
                    <p className="text-[#0E5A8A]">{milestone.description}</p>
                  </div>
                </div>
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
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-[#0E5A8A] mb-8">
              Join the legal professionals who are already experiencing the power of verifiable AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Contact Us
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

export default AboutUs;
