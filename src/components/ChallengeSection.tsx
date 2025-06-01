
import { Card } from "@/components/ui/card";

export const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The Legal Intelligence Crisis: Why Traditional AI Falls Short
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-4xl mx-auto">
            Modern legislation and case law have become increasingly complex, while legal professionals 
            face mounting administrative burdens that consume nearly half their time. Traditional AI solutions 
            compound these problems with outdated information and unreliable "hallucinations."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
              Why Legal Work Has Become Overwhelming
            </h3>
            
            <Card className="p-6 border-l-4 border-[#178ACB]">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Overwhelming Volume & Complexity
              </h4>
              <p className="text-[#0E5A8A] mb-3">
                Bills and case law often span hundreds or thousands of pages, making them impossible for 
                average citizens and even busy professionals to read and understand comprehensively.
              </p>
              <p className="text-sm text-[#43B88C] font-medium">
                RAG Solution Preview: Intelligent document analysis and synthesis from verified sources.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#29A09D]">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Complex Jargon & Hidden Connections
              </h4>
              <p className="text-[#0E5A8A] mb-3">
                Legal language and technical terminology create barriers, while conflicts and relationships 
                between different pieces of legislation are often unclear and difficult to identify.
              </p>
              <p className="text-sm text-[#43B88C] font-medium">
                RAG Solution Preview: Cross-referenced insights that reveal hidden legal connections.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#43B88C]">
              <h4 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Traditional AI Limitations
              </h4>
              <p className="text-[#0E5A8A] mb-3">
                Generic AI tools risk "hallucinations," provide outdated information, and lack verifiable sources—
                critical failures for legal professionals who need accuracy and accountability.
              </p>
              <p className="text-sm text-[#43B88C] font-medium">
                RAG Solution Preview: Source-grounded AI that eliminates guesswork with verified citations.
              </p>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white mb-6">
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

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded mb-6">
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

            <div className="bg-[#43B88C]/10 border-l-4 border-[#43B88C] p-6 rounded">
              <h4 className="text-lg font-semibold text-[#0A2F51] mb-3">
                The RAG Revolution: A Better Way Forward
              </h4>
              <p className="text-[#0E5A8A] text-sm">
                Retrieval-Augmented Generation technology addresses these challenges by combining AI intelligence 
                with verified legal sources, eliminating hallucinations while providing transparent, 
                auditable insights that legal professionals can trust and act upon with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
