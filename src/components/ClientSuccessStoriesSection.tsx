
import { ClientSuccessStory } from "@/components/ClientSuccessStory";
import { Clock, DollarSign, TrendingUp, CheckCircle, Shield, BookOpen } from "lucide-react";
import { EnhancedCTAButton } from "@/components/EnhancedCTAButton";

export const ClientSuccessStoriesSection = () => {
  const successStories = [
    {
      id: "morrison-associates",
      title: "Morrison & Associates Transforms Litigation Research with RAG",
      clientName: "Morrison & Associates",
      clientType: "Mid-Size Law Firm",
      category: "law-firm" as const,
      challenge: "Morrison & Associates faced mounting pressure to deliver faster, more accurate legal research for complex litigation cases while managing increasing caseloads. Traditional research methods were consuming 40+ hours per case, with junior associates spending valuable billable time on routine precedent searches. The firm risked missing critical precedents and faced potential malpractice exposure from research gaps in their high-stakes commercial litigation practice.",
      solution: "LegisClear's RAG technology revolutionized Morrison's research workflow by providing instant access to verified legal precedents with complete source attribution. RAG's semantic understanding capabilities allowed attorneys to query complex legal concepts in natural language, while the source-grounding feature ensured every finding included full case citations and audit trails. The platform's real-time legal database access meant attorneys always worked with the most current precedents and statutory changes.",
      results: [
        {
          metric: "Research Time Reduction",
          value: "75%",
          icon: <Clock className="w-8 h-8 text-[#43B88C]" />
        },
        {
          metric: "Billable Hour Increase",
          value: "32%",
          icon: <DollarSign className="w-8 h-8 text-[#178ACB]" />
        },
        {
          metric: "Research Accuracy",
          value: "99.8%",
          icon: <CheckCircle className="w-8 h-8 text-[#29A09D]" />
        }
      ],
      testimonial: {
        quote: "LegisClear's RAG didn't just speed up our research; it gave us a level of confidence in our findings we've never had before. Knowing every insight is backed by a verifiable source is a game-changer for our litigation practice. We've increased our case capacity by 40% while actually improving the quality of our legal arguments.",
        author: "Sarah Chen",
        title: "Senior Partner, Morrison & Associates"
      }
    },
    {
      id: "techcorp-industries",
      title: "TechCorp Industries Streamlines M&A Due Diligence with RAG Intelligence",
      clientName: "TechCorp Industries",
      clientType: "Fortune 500 Corporate Legal",
      category: "corporate" as const,
      challenge: "TechCorp's legal department struggled with lengthy M&A due diligence processes, often taking 8-12 weeks to analyze thousands of contracts and regulatory filings. External counsel costs were exceeding $2M per major transaction, while the risk of missing critical compliance issues or contractual conflicts threatened deal timelines and valuations. The team needed to accelerate due diligence while maintaining thorough risk assessment.",
      solution: "LegisClear's RAG platform transformed TechCorp's due diligence process by intelligently analyzing vast document sets and identifying potential risks, conflicts, and compliance gaps. RAG's advanced retrieval capabilities cross-referenced contract terms against regulatory requirements in real-time, while providing detailed source citations for every finding. The platform's natural language interface allowed legal teams to query complex scenarios and receive comprehensive, verifiable analyses.",
      results: [
        {
          metric: "Due Diligence Time",
          value: "65%",
          icon: <Clock className="w-8 h-8 text-[#43B88C]" />
        },
        {
          metric: "External Counsel Costs",
          value: "60%",
          icon: <DollarSign className="w-8 h-8 text-[#178ACB]" />
        },
        {
          metric: "Risk Detection Improvement",
          value: "45%",
          icon: <Shield className="w-8 h-8 text-[#29A09D]" />
        }
      ],
      testimonial: {
        quote: "The ability to analyze thousands of contracts in minutes with RAG-verified accuracy has transformed our M&A due diligence process. We're completing deals faster and with greater confidence in our risk assessments. LegisClear has delivered an 840% ROI in our first year through improved efficiency and reduced external counsel dependency.",
        author: "Michael Rodriguez",
        title: "General Counsel, TechCorp Industries"
      }
    },
    {
      id: "harvard-law",
      title: "Harvard Law School Advances Legal Scholarship with RAG Research Platform",
      clientName: "Harvard Law School",
      clientType: "Leading Academic Institution",
      category: "university" as const,
      challenge: "Harvard Law School's faculty and students required advanced research capabilities for comprehensive legal scholarship spanning multiple jurisdictions and historical periods. Traditional legal databases limited the scope and depth of research possible, while ensuring accuracy and proper attribution in academic work was paramount. The institution needed to prepare students for a technology-driven legal future while maintaining rigorous academic standards.",
      solution: "LegisClear's RAG platform provided Harvard with unprecedented research capabilities, enabling faculty and students to conduct comprehensive analyses across vast legal corpora with complete source verification. RAG's semantic search capabilities allowed for nuanced legal concept exploration, while the platform's transparent source attribution supported rigorous academic citation standards. The technology served both as a powerful research tool and an educational platform for understanding responsible AI in legal practice.",
      results: [
        {
          metric: "Research Scope Expansion",
          value: "300%",
          icon: <BookOpen className="w-8 h-8 text-[#43B88C]" />
        },
        {
          metric: "Research Accuracy",
          value: "99.9%",
          icon: <CheckCircle className="w-8 h-8 text-[#178ACB]" />
        },
        {
          metric: "Student Engagement",
          value: "85%",
          icon: <TrendingUp className="w-8 h-8 text-[#29A09D]" />
        }
      ],
      testimonial: {
        quote: "As legal educators, we needed a platform that could handle complex research while teaching students about responsible AI. LegisClear's transparent, source-grounded RAG is perfect for both advancing scholarship and preparing the next generation of lawyers. Our students are now graduating with hands-on experience in cutting-edge legal technology.",
        author: "Dr. Amanda Foster",
        title: "Professor of Law & Technology, Harvard Law School"
      }
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Client Success Stories: RAG Transforming Legal Practice
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Discover how leading legal professionals are achieving exceptional results with 
            LegisClear's RAG-powered intelligence. See the quantifiable impact of verifiable, 
            source-grounded AI across law firms, corporate legal departments, and academic institutions.
          </p>
        </div>

        <div className="space-y-16">
          {successStories.map((story, index) => (
            <ClientSuccessStory key={story.id} {...story} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
              Ready to Write Your Own RAG Success Story?
            </h3>
            <p className="text-[#0E5A8A] text-lg mb-6">
              Join these leading organizations in transforming legal practice with verifiable, 
              source-grounded AI intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedCTAButton variant="primary">
                Schedule Your RAG Success Demo
              </EnhancedCTAButton>
              <EnhancedCTAButton variant="secondary">
                Download All Case Studies
              </EnhancedCTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
