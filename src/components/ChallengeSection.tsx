
import { Card } from "@/components/ui/card";

export const ChallengeSection = () => {
  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            The Overwhelming Demands of Modern Legal Work
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            Legal professionals face mounting pressures from administrative burdens, 
            complex research demands, and the ever-increasing volume of legal information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-[#178ACB]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Administrative Burden Crisis
              </h3>
              <p className="text-[#0E5A8A]">
                Legal professionals spend up to 48% of their time on non-billable administrative tasks, 
                leaving only about 2.3 billable hours in an 8-hour day.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#29A09D]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Crushing Overhead Costs
              </h3>
              <p className="text-[#0E5A8A]">
                Law firm overhead can consume 45-50% of earnings, while document management 
                inefficiencies alone can cost a 20-lawyer firm over $2.3 million annually.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-[#43B88C]">
              <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                Human Error & Inefficiency
              </h3>
              <p className="text-[#0E5A8A]">
                Manual data entry error rates can reach 4%, and human professionals 
                may make up to 100 times more errors than automated systems.
              </p>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                The Cost of Inefficiency
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Time on Admin Tasks</span>
                  <div className="w-24 h-4 bg-red-400 rounded"></div>
                  <span className="text-sm">48%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Billable Hours Lost</span>
                  <div className="w-20 h-4 bg-orange-400 rounded"></div>
                  <span className="text-sm">5.7hrs/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Overhead Costs</span>
                  <div className="w-28 h-4 bg-yellow-400 rounded"></div>
                  <span className="text-sm">45-50%</span>
                </div>
              </div>
              <p className="text-center mt-6 text-sm opacity-90">
                These inefficiencies are crushing legal practice profitability and professional satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
