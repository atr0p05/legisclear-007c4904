
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Brain,
  FileText,
  Search,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Scale
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndividualAttorneys = () => {
  const navigate = useNavigate();

  const challenges = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Time Constraints",
      description: "Limited time to handle extensive research while managing client relationships and business development."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: "Resource Limitations",
      description: "Cannot afford expensive research tools or junior associates that larger firms use for document review."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Competitive Pressure",
      description: "Need to compete with larger firms while maintaining quality and responsiveness with limited resources."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: "Client Expectations",
      description: "Clients expect the same level of service and expertise as large firms but at competitive rates."
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-[#43B88C]" />,
      title: "AI Legal Research Assistant",
      description: "Access enterprise-grade legal research capabilities that level the playing field with large firms.",
      benefits: [
        "Comprehensive case law and statute research",
        "Natural language query processing",
        "Instant access to relevant precedents",
        "Professional-quality legal citations"
      ],
      pricing: "Starting at $200/month"
    },
    {
      icon: <FileText className="w-8 h-8 text-[#178ACB]" />,
      title: "Document Analysis & Review",
      description: "Automate time-consuming document review tasks with AI-powered analysis and summarization.",
      benefits: [
        "Contract analysis and risk identification",
        "Automated document summarization",
        "Key clause extraction and flagging",
        "Compliance checking and verification"
      ],
      pricing: "Pay-per-use model available"
    },
    {
      icon: <Search className="w-8 h-8 text-[#29A09D]" />,
      title: "Case Preparation Tools",
      description: "Streamline case preparation with intelligent legal research and argument development assistance.",
      benefits: [
        "Automated legal brief generation",
        "Precedent analysis and comparison",
        "Argument strength assessment",
        "Motion and pleading templates"
      ],
      pricing: "Included in standard plans"
    }
  ];

  const practiceAreas = [
    "Personal Injury",
    "Family Law",
    "Criminal Defense",
    "Employment Law",
    "Real Estate",
    "Estate Planning",
    "Immigration",
    "Intellectual Property",
    "Business Law",
    "Bankruptcy"
  ];

  const testimonialStyle = {
    name: "Sarah Mitchell",
    title: "Solo Practitioner, Family Law",
    quote: "LegisClear has transformed my practice. I can now provide the same level of research and analysis as large firms while keeping my costs manageable. My clients are getting better outcomes, and I'm able to take on more cases.",
    rating: 5
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <User className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI for Individual Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Level the playing field with enterprise-grade AI tools designed for solo practitioners and small practices. Affordable, powerful, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Individual Attorney Demo"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg font-semibold"
              >
                Try Free for 14 Days
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-4 text-lg font-semibold"
              >
                See Pricing Plans
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
              Challenges Facing Solo Practitioners
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Individual attorneys and small practices face unique challenges competing with larger firms while maintaining profitability and work-life balance.
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
              Affordable AI Solutions for Your Practice
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Get access to the same AI capabilities used by large firms, designed specifically for individual practitioners and small practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-4 text-center">
                    {solution.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-6 text-center">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-[#0E5A8A] text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-[#178ACB]">{solution.pricing}</span>
                  </div>
                  
                  <Button
                    onClick={() => window.location.href = `mailto:andre@legisclear.com?subject=Learn More About ${solution.title} for Solo Practice`}
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

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Supports All Practice Areas
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              LegisClear's AI is trained across multiple practice areas, providing relevant insights and assistance regardless of your legal specialization.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <Scale className="w-6 h-6 text-[#43B88C] mx-auto mb-2" />
                  <p className="font-medium text-[#0A2F51] text-sm">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#0E5A8A] mb-4">Don't see your practice area listed?</p>
            <Button
              onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Custom Practice Area Support"}
              variant="outline"
              className="border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white"
            >
              Contact Us for Custom Support
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-[#43B88C] to-[#29A09D]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-white text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonialStyle.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6">
                  "{testimonialStyle.quote}"
                </blockquote>
                <div className="text-lg font-semibold">{testimonialStyle.name}</div>
                <div className="text-sm opacity-90">{testimonialStyle.title}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI for Solo Practitioners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Designed for Solo Practice Success
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              See how individual attorneys are using LegisClear to grow their practices and improve client outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-t-4 border-[#43B88C]">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-[#43B88C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2F51] mb-3">5-10x Faster</h3>
                <p className="text-[#0E5A8A]">Research and document review compared to manual methods</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-[#178ACB]">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-[#178ACB] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2F51] mb-3">30-50% Savings</h3>
                <p className="text-[#0E5A8A]">On research costs compared to traditional legal databases</p>
              </CardContent>
            </Card>

            <Card className="text-center border-t-4 border-[#29A09D]">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-[#29A09D] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2F51] mb-3">Better Outcomes</h3>
                <p className="text-[#0E5A8A]">More comprehensive research leads to stronger cases and happier clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              No complex setup or lengthy onboarding. Start using LegisClear immediately and see results on your first case.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Sign Up", description: "Create your account and choose the plan that fits your practice" },
                { step: "2", title: "Start Using", description: "Begin with our guided tutorials and start researching immediately" },
                { step: "3", title: "See Results", description: "Experience faster research and better outcomes on your very first case" }
              ].map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-[#43B88C] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2F51] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#0E5A8A]">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-[#0E5A8A] mb-8">
              Join thousands of individual attorneys who are using AI to compete with larger firms while building more profitable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Start 14-Day Free Trial for Individual Attorney"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 text-lg font-semibold"
              >
                Start Free 14-Day Trial
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Schedule Personal Demo for Solo Practice"}
                variant="outline"
                className="border-[#178ACB] text-[#178ACB] hover:bg-[#178ACB] hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Schedule Personal Demo
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

export default IndividualAttorneys;
