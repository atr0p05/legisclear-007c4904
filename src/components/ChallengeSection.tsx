
import { Card } from "@/components/ui/card";

export const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Why Legislation is a Labyrinth
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Modern legislation has become increasingly complex, leaving citizens 
            confused and disengaged from the democratic process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-[#178ACB]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Overwhelming Length
              </h3>
              <p className="text-[#0E5A8A]">
                Bills often span hundreds or thousands of pages, making them 
                impossible for average citizens to read and understand.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#29A09D]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Complex Jargon
              </h3>
              <p className="text-[#0E5A8A]">
                Legal language and technical terminology create barriers to 
                public understanding and engagement.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#43B88C]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Hidden Connections
              </h3>
              <p className="text-[#0E5A8A]">
                Conflicts and relationships between different pieces of 
                legislation are often unclear and difficult to identify.
              </p>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                The Growing Complexity
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>1970s Bills</span>
                  <div className="w-20 h-4 bg-white rounded"></div>
                  <span className="text-sm">~50 pages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>1990s Bills</span>
                  <div className="w-32 h-4 bg-white rounded"></div>
                  <span className="text-sm">~150 pages</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2020s Bills</span>
                  <div className="w-48 h-4 bg-white rounded"></div>
                  <span className="text-sm">~500+ pages</span>
                </div>
              </div>
              <p className="text-center mt-6 text-sm opacity-90">
                Average bill length has increased by over 1000% in 50 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
