
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  BookOpen, 
  Video, 
  Calendar,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resources = () => {
  const navigate = useNavigate();

  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8 text-[#43B88C]" />,
      title: "Whitepapers & Guides",
      description: "In-depth technical documentation and implementation guides for RAG technology in legal practice.",
      resources: [
        "RAG Technology in Legal Practice: A Comprehensive Guide",
        "Security & Compliance in Legal AI Systems",
        "ROI Analysis: AI Implementation in Legal Workflows",
        "Best Practices for Legal Document Analysis with AI"
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-[#178ACB]" />,
      title: "Webinars & Demos",
      description: "Live and recorded sessions showcasing LegisClear's capabilities and legal AI best practices.",
      resources: [
        "Introduction to RAG Technology for Legal Professionals",
        "Live Platform Demo: Document Analysis in Action",
        "Case Study: Implementing AI in Law Firm Operations",
        "Q&A: Common Questions About Legal AI Implementation"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#29A09D]" />,
      title: "Legal AI Insights",
      description: "Expert commentary and analysis on the evolving landscape of AI in legal practice.",
      resources: [
        "The Future of Legal Research: RAG vs Traditional AI",
        "Ethical Considerations in Legal AI Implementation",
        "Regulatory Compliance in the Age of AI",
        "Building Client Trust with Transparent AI"
      ]
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
              Resources & Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover the latest insights, guides, and resources on RAG technology and AI implementation in legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Expert Knowledge at Your Fingertips
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Access comprehensive resources designed to help legal professionals understand and implement AI technology effectively.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-4">
                    {category.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {category.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-[#43B88C] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-[#0E5A8A]">{resource}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    disabled
                    variant="outline"
                    className="w-full border-[#178ACB] text-[#178ACB] bg-white hover:bg-gray-50 cursor-not-allowed mt-auto"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Essential materials for understanding and implementing RAG technology in your legal practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-r from-[#43B88C] to-[#29A09D] text-white h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <Download className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  The Complete Guide to RAG Technology for Legal Professionals
                </h3>
                <p className="mb-6 opacity-90">
                  A comprehensive 40-page guide covering everything from RAG fundamentals to implementation strategies, 
                  security considerations, and ROI calculations specific to legal practice.
                </p>
                <ul className="space-y-2 mb-6 text-sm flex-1">
                  <li>• Understanding RAG vs Traditional AI</li>
                  <li>• Implementation roadmap and best practices</li>
                  <li>• Security and compliance frameworks</li>
                  <li>• Real-world case studies and ROI analysis</li>
                </ul>
                <Button
                  disabled
                  className="bg-white text-[#178ACB] hover:bg-gray-100 cursor-not-allowed mt-auto"
                >
                  Coming Soon
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#178ACB] h-full flex flex-col">
              <CardContent className="p-8 flex-1 flex flex-col">
                <Video className="w-12 h-12 text-[#178ACB] mb-6" />
                <h3 className="text-2xl font-bold text-[#0A2F51] mb-4">
                  Live Platform Demo Series
                </h3>
                <p className="text-[#0E5A8A] mb-6">
                  Join our weekly live demos to see LegisClear in action, ask questions, and learn about the latest 
                  features and capabilities. Perfect for evaluating the platform for your practice.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#0E5A8A] flex-1">
                  <li>• Interactive platform walkthrough</li>
                  <li>• Live Q&A with our experts</li>
                  <li>• Custom use case discussions</li>
                  <li>• ROI calculation worksheets</li>
                </ul>
                <Button
                  disabled
                  className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white cursor-not-allowed mt-auto"
                >
                  Coming Soon
                  <Calendar className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              More Resources Coming Soon
            </h2>
            <p className="text-xl text-[#0E5A8A] mb-8">
              We're continuously developing new resources to help legal professionals stay ahead of the AI curve. 
              Subscribe to our updates to be the first to access new content.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0A2F51] mb-4">Upcoming Resources</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-3 text-[#0E5A8A]">
                  <li>• Legal AI Implementation Certification Course</li>
                  <li>• Monthly Legal Tech Trend Reports</li>
                  <li>• ROI Calculator Tool with Custom Scenarios</li>
                </ul>
                <ul className="space-y-3 text-[#0E5A8A]">
                  <li>• Compliance Checklists for Different Jurisdictions</li>
                  <li>• Integration Guides for Popular Legal Software</li>
                  <li>• AI Ethics Framework for Legal Professionals</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Subscribe to Resource Updates"}
                className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3 text-lg font-semibold"
              >
                Subscribe for Updates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-20 bg-gradient-to-r from-[#178ACB] to-[#43B88C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Finding the Right Resources?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team of legal technology experts is here to help you find the information and resources 
              that are most relevant to your specific needs and practice area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-white text-[#178ACB] hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Contact Our Experts
              </Button>
              <Button
                onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Personalized Resource Recommendations"}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#178ACB] px-8 py-3 text-lg font-semibold"
              >
                Get Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
