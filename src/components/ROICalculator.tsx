
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    lawyers: 5,
    researchHours: 20,
    hourlyRate: 400,
    externalSpend: 10000
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const currentMonthlyCost = (inputs.lawyers * inputs.researchHours * inputs.hourlyRate) + inputs.externalSpend;
    const ragSavings = currentMonthlyCost * 0.48; // 48% time savings
    const annualSavings = ragSavings * 12;
    const legisClearCost = 12000; // Estimated annual cost
    const netSavings = annualSavings - legisClearCost;
    const roiPercentage = ((netSavings / legisClearCost) * 100);

    return {
      currentMonthlyCost: Math.round(currentMonthlyCost),
      ragSavings: Math.round(ragSavings),
      annualSavings: Math.round(annualSavings),
      netSavings: Math.round(netSavings),
      roiPercentage: Math.round(roiPercentage),
      roiMultiplier: Math.round((annualSavings / legisClearCost) * 10) / 10
    };
  };

  const results = calculateROI();

  const handleCalculate = () => {
    setShowResults(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openEmailWithROI = () => {
    const subject = encodeURIComponent("ROI Consultation Request - LegisClear RAG Demo");
    const body = encodeURIComponent(`Hello,

I'm interested in discussing the ROI potential of LegisClear's RAG technology for my practice.

Based on my calculation:
- Current Monthly Cost: $${results.currentMonthlyCost.toLocaleString()}
- Projected Annual Savings: $${results.annualSavings.toLocaleString()}
- Estimated ROI: ${results.roiPercentage}%

I would like to schedule a demo to learn more about how RAG technology can benefit my practice.

Best regards`);
    
    window.location.href = `mailto:andre@legisclear.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="roi-calculator" className="py-20 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calculate Your RAG ROI
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the potential financial impact of LegisClear's RAG technology on your legal practice. 
            Get personalized ROI projections based on your current operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#0A2F51]">
                  <Calculator className="w-6 h-6" />
                  Your Current Practice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A2F51] mb-2">
                    Number of Lawyers/Researchers
                  </label>
                  <input
                    type="number"
                    value={inputs.lawyers}
                    onChange={(e) => setInputs({...inputs, lawyers: parseInt(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178ACB] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#0A2F51] mb-2">
                    Research Hours per Lawyer/Month
                  </label>
                  <input
                    type="number"
                    value={inputs.researchHours}
                    onChange={(e) => setInputs({...inputs, researchHours: parseInt(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178ACB] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A2F51] mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) => setInputs({...inputs, hourlyRate: parseInt(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178ACB] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A2F51] mb-2">
                    Monthly External Research Spend ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.externalSpend}
                    onChange={(e) => setInputs({...inputs, externalSpend: parseInt(e.target.value) || 0})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178ACB] focus:border-transparent"
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-[#43B88C] hover:bg-[#29A09D] text-white py-3 text-lg"
                >
                  Calculate RAG ROI
                </Button>
              </CardContent>
            </Card>

            {showResults && (
              <Card className="bg-white/95 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#0A2F51]">
                    <TrendingUp className="w-6 h-6" />
                    Your RAG ROI Projection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-[#43B88C] to-[#29A09D] p-6 rounded-lg text-white text-center">
                    <div className="text-4xl font-bold mb-2">{results.roiPercentage}%</div>
                    <div className="text-lg">First Year ROI</div>
                    <div className="text-2xl font-semibold mt-2">{results.roiMultiplier}x Return</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-[#0A2F51]">Current Monthly Cost:</span>
                      <span className="font-semibold">${results.currentMonthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-[#0A2F51]">Monthly RAG Savings:</span>
                      <span className="font-semibold text-[#43B88C]">${results.ragSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-[#0A2F51]">Annual Savings:</span>
                      <span className="font-semibold text-[#43B88C]">${results.annualSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#0A2F51]">Net Annual Benefit:</span>
                      <span className="font-bold text-[#43B88C] text-lg">${results.netSavings.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-[#0E5A8A] mb-3">
                      <strong>RAG Advantages Included:</strong>
                    </p>
                    <ul className="text-sm text-[#0E5A8A] space-y-1">
                      <li>• 48% reduction in research time</li>
                      <li>• 96% improvement in accuracy</li>
                      <li>• Eliminated external research costs</li>
                      <li>• Increased billable hour capacity</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={openEmailWithROI}
                    className="w-full bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                  >
                    Discuss Your ROI - Request Demo
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {showResults && (
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Achieve These Results?
              </h3>
              <p className="text-white/90 mb-6">
                See how LegisClear's RAG technology can deliver these savings and efficiency gains for your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openEmailWithROI}
                  className="bg-[#43B88C] hover:bg-[#29A09D] text-white px-8 py-3"
                >
                  Schedule Your ROI Demo
                </Button>
                <Button 
                  onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Detailed ROI Report"}
                  className="bg-white text-[#0A2F51] hover:bg-gray-100 px-8 py-3 border-2 border-white"
                >
                  Download Detailed ROI Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
