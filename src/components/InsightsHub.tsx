
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Play, BookOpen, TrendingUp, Users } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const InsightsHub = () => {
  const blogPosts = [
    {
      title: "Understanding RAG: Why Retrieval-Augmented Generation is the Future of Legal AI",
      excerpt: "Explore how RAG technology overcomes the limitations of traditional AI models by grounding responses in verifiable sources, making it the ideal solution for legal professionals.",
      category: "Technology",
      readTime: "8 min read",
      date: "2025-05-28",
      featured: true
    },
    {
      title: "RAG vs. Traditional Legal Research: A Comprehensive Comparison",
      excerpt: "Discover how RAG-powered research delivers 6-80x faster results while maintaining superior accuracy and complete source verification compared to conventional methods.",
      category: "Research",
      readTime: "12 min read",
      date: "2025-05-25",
      featured: false
    },
    {
      title: "Ethical AI in Legal Practice: How RAG Promotes Responsible Innovation",
      excerpt: "Learn how RAG's source-grounded approach addresses key ethical concerns in legal AI, from eliminating hallucinations to ensuring professional compliance.",
      category: "Ethics",
      readTime: "10 min read",
      date: "2025-05-22",
      featured: false
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to RAG Technology for Legal Professionals",
      description: "A comprehensive 45-page guide covering RAG fundamentals, implementation strategies, and best practices for legal organizations.",
      pages: "45 pages",
      category: "Technology Guide"
    },
    {
      title: "ROI Analysis: Measuring the Financial Impact of RAG in Legal Practice",
      description: "Detailed analysis of cost savings, efficiency gains, and revenue improvements from RAG implementation across different legal practice areas.",
      pages: "32 pages",
      category: "Business Case"
    },
    {
      title: "Security & Compliance: RAG for Enterprise Legal Departments",
      description: "Essential guidance on deploying RAG technology while maintaining data security, client confidentiality, and regulatory compliance.",
      pages: "28 pages",
      category: "Security"
    }
  ];

  const webinars = [
    {
      title: "Live Demo: RAG in Action for Corporate Legal Teams",
      description: "Join our experts for a live demonstration of how RAG technology transforms contract analysis, due diligence, and compliance workflows.",
      date: "June 15, 2025",
      duration: "45 minutes",
      type: "upcoming"
    },
    {
      title: "RAG Implementation Success Stories: Panel Discussion",
      description: "Hear from leading legal professionals about their experiences implementing RAG technology and the measurable results achieved.",
      date: "May 30, 2025",
      duration: "60 minutes",
      type: "recorded"
    }
  ];

  return (
    <section id="insights-hub" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Insights Hub: RAG Thought Leadership
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Stay ahead of the curve with expert insights on RAG technology, legal AI innovation, 
            and the future of intelligent legal practice. Access comprehensive resources designed 
            for legal professionals embracing cutting-edge technology.
          </p>
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-[#43B88C]" />
            Latest Insights & Analysis
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${post.featured ? 'border-t-4 border-[#43B88C]' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-[#178ACB]">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-[#0A2F51] leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0E5A8A] text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <button disabled className="text-gray-400 text-sm font-medium cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Whitepapers & Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-8 flex items-center">
            <Download className="w-6 h-6 mr-3 text-[#178ACB]" />
            Comprehensive Guides & Whitepapers
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="border-l-4 border-[#29A09D] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-[#29A09D]">{paper.category}</Badge>
                    <span className="text-sm text-gray-500">{paper.pages}</span>
                  </div>
                  <CardTitle className="text-lg text-[#0A2F51] leading-tight">
                    {paper.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-[#0E5A8A] text-sm mb-6 flex-1">{paper.description}</p>
                  <button
                    disabled
                    className="w-full bg-gray-100 text-gray-500 border border-gray-300 px-4 py-2 rounded cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Webinars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0A2F51] mb-8 flex items-center">
            <Play className="w-6 h-6 mr-3 text-[#0E5A8A]" />
            Webinars & Live Sessions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge 
                      variant={webinar.type === 'upcoming' ? 'default' : 'outline'} 
                      className={webinar.type === 'upcoming' ? 'bg-[#43B88C] text-white' : 'text-[#0E5A8A]'}
                    >
                      {webinar.type === 'upcoming' ? 'Upcoming' : 'On-Demand'}
                    </Badge>
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                  </div>
                  <CardTitle className="text-lg text-[#0A2F51] leading-tight">
                    {webinar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0E5A8A] text-sm mb-4">{webinar.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{webinar.date}</span>
                    <button disabled className="bg-gray-200 text-gray-500 px-4 py-2 rounded text-sm cursor-not-allowed">
                      Coming Soon
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Informed: RAG Intelligence Newsletter
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Get weekly insights on RAG technology developments, legal AI trends, and exclusive 
              access to new resources. Join 5,000+ legal professionals already subscribed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-[#178ACB] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
