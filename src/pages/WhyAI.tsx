
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Zap, Database, Search, Shield } from "lucide-react";
import { useOneTimeAnimation } from "@/hooks/useOneTimeAnimation";
import { ROICalculator } from "@/components/ROICalculator";

const WhyAI = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useOneTimeAnimation({ threshold: 0.3 });
  const { elementRef: challengeRef, isVisible: challengeVisible } = useOneTimeAnimation({ threshold: 0.2 });
  const { elementRef: platformRef, isVisible: platformVisible } = useOneTimeAnimation({ threshold: 0.2 });
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useOneTimeAnimation({ threshold: 0.2 });

  const challengeCards = [
    {
      title: "Overwhelming Volume & Complexity",
      content: "Bills and case law often span hundreds or thousands of pages, making them impossible for average citizens and even busy professionals to read and understand comprehensively.",
      preview: "RAG Solution Preview: Intelligent document analysis and synthesis from verified sources.",
      borderColor: "border-[#178ACB]"
    },
    {
      title: "Complex Jargon & Hidden Connections", 
      content: "Legal language and technical terminology create barriers, while conflicts and relationships between different pieces of legislation are often unclear and difficult to identify.",
      preview: "RAG Solution Preview: Cross-referenced insights that reveal hidden legal connections.",
      borderColor: "border-[#29A09D]"
    },
    {
      title: "Traditional AI Limitations",
      content: "Generic AI tools risk \"hallucinations,\" provide outdated information, and lack verifiable sources—critical failures for legal professionals who need accuracy and accountability.",
      preview: "RAG Solution Preview: Source-grounded AI that eliminates guesswork with verified citations.",
      borderColor: "border-[#43B88C]"
    }
  ];

  const ragAdvantages = [
    "Retrieves information from live, comprehensive legal database",
    "Always current with latest legislation and case law", 
    "Every insight verified against actual source documents",
    "Provides transparent citations and references",
    "Combines retrieval precision with generative intelligence",
    "Securely integrates with your proprietary legal data"
  ];

  const traditionalLimitations = [
    "Generates responses from training data (may be outdated)",
    "No real-time access to current legal developments",
    "Cannot verify accuracy against source documents", 
    "Risk of \"hallucinated\" or fabricated legal citations",
    "Limited transparency in reasoning process",
    "No ability to access proprietary firm knowledge"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6" ref={heroRef}>
          <div className={`text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Legal Intelligence Crisis
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-8">
              Why Traditional AI Falls Short
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Modern legislation and case law have become increasingly complex, while legal professionals 
              face mounting administrative burdens that consume nearly half their time. Traditional AI solutions 
              compound these problems with outdated information and unreliable "hallucinations."
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6" ref={challengeRef}>
          <div className={`text-center mb-16 transition-all duration-1000 ${
            challengeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-[#0A2F51] mb-6">
              Why Legal Work Has Become Overwhelming
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {challengeCards.map((card, index) => (
                <Card 
                  key={index}
                  className={`p-6 border-l-4 ${card.borderColor} transform transition-all duration-1000 hover:scale-105 hover:shadow-xl ${
                    challengeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  <h4 className="text-xl font-semibold text-[#0A2F51] mb-3">
                    {card.title}
                  </h4>
                  <p className="text-[#0E5A8A] mb-3">
                    {card.content}
                  </p>
                  <p className="text-sm text-[#43B88C] font-medium">
                    {card.preview}
                  </p>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <div className={`bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                challengeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '400ms' }}>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  The Exponential Growth in Legal Complexity
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>1970s Bills</span>
                    <div className="w-12 h-4 bg-white rounded"></div>
                    <span className="text-sm">~50 pages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>1990s Bills</span>
                    <div className="w-20 h-4 bg-white rounded"></div>
                    <span className="text-sm">~150 pages</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2020s Bills</span>
                    <div className="w-32 h-4 bg-white rounded"></div>
                    <span className="text-sm">~500+ pages</span>
                  </div>
                </div>
                <p className="text-center mt-6 text-sm opacity-90">
                  Average bill length has increased by over 1000% in 50 years
                </p>
              </div>

              <div className={`bg-red-50 border-l-4 border-red-400 p-6 rounded transform transition-all duration-1000 hover:shadow-lg ${
                challengeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '600ms' }}>
                <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">
                  The Administrative Crisis & AI Trust Gap
                </h4>
                <ul className="space-y-2 text-[#0E5A8A] text-sm">
                  <li>• Legal professionals spend up to <strong>48% of time</strong> on non-billable admin tasks</li>
                  <li>• Law firm overhead can consume <strong>45-50% of earnings</strong></li>
                  <li>• Traditional AI tools risk <strong>hallucinated legal citations</strong> and outdated precedents</li>
                  <li>• Manual verification of AI outputs adds <strong>additional time burden</strong></li>
                  <li>• Document management inefficiencies cost a 20-lawyer firm <strong>over $2.3M annually</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6" ref={platformRef}>
          <div className={`text-center mb-16 transition-all duration-1000 ${
            platformVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
              LegisClear's Advanced RAG AI Platform
            </h2>
            <h3 className="text-2xl text-[#178ACB] mb-4">
              Where Precision Meets Intelligence
            </h3>
            <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
              LegisClear's proprietary RAG (Retrieval-Augmented Generation) technology combines the power 
              of AI with verified legal knowledge, delivering accuracy and reliability that traditional AI simply 
              cannot match.
            </p>
          </div>

          <div className={`bg-white rounded-lg shadow-lg p-8 mb-12 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
            platformVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-center text-[#0A2F51] mb-8">
              The RAG Difference: AI with an Expert Legal Library & Built-in Fact-Checker
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8" ref={comparisonRef}>
              <div className={`space-y-4 transition-all duration-1000 ${
                comparisonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ transitionDelay: '400ms' }}>
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="text-lg font-semibold text-red-600">Traditional AI Limitations</h4>
                </div>
                <ul className="space-y-3">
                  {traditionalLimitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#0E5A8A]">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`space-y-4 transition-all duration-1000 ${
                comparisonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-[#43B88C]" />
                  <h4 className="text-lg font-semibold text-[#43B88C]">LegisClear's RAG Advantage</h4>
                </div>
                <ul className="space-y-3">
                  {ragAdvantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#0E5A8A]">
                      <span className="text-[#43B88C] mt-1">•</span>
                      <span className="text-sm">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`mt-8 bg-gradient-to-r from-[#178ACB] to-[#43B88C] p-6 rounded-lg text-white text-center transition-all duration-1000 hover:scale-105 ${
              comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '800ms' }}>
              <p className="text-lg font-semibold">
                RAG = The reliability of a legal library + The intelligence of AI + The speed of instant search + The transparency of verified sources
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#178ACB]" />,
                title: "6-80x Faster RAG-Powered Research",
                description: "RAG enables instant access to precisely relevant legal information from vast databases"
              },
              {
                icon: <Database className="w-8 h-8 text-[#29A09D]" />,
                title: "Always-Current Legal Knowledge Base",
                description: "Live access to latest legislation, cases, regulatory updates, and your proprietary data"
              },
              {
                icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
                title: "99.99% Source-Verified Accuracy",
                description: "RAG's source-grounded responses eliminate AI hallucinations and provide audit trails"
              }
            ].map((benefit, index) => (
              <Card key={index} className={`p-6 text-center transform transition-all duration-1000 hover:scale-105 hover:shadow-xl ${
                platformVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[#0E5A8A] text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the RAG Advantage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            See how RAG technology transforms complex legal research into precise, verifiable insights that 
            you can trust and act upon with complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo"}
              className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Schedule Your Demo
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0A2F51] px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyAI;
