
import { useState } from "react";
import { ROIInputForm } from "./roi/ROIInputForm";
import { ROIResults } from "./roi/ROIResults";
import { ROICallToAction } from "./roi/ROICallToAction";
import { calculateROI } from "@/utils/roiCalculations";

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    lawyers: 5,
    researchHours: 20,
    hourlyRate: 400,
    externalSpend: 10000
  });

  const [showResults, setShowResults] = useState(false);

  const results = calculateROI(inputs);

  const handleCalculate = () => {
    setShowResults(true);
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
            <ROIInputForm
              inputs={inputs}
              onInputChange={setInputs}
              onCalculate={handleCalculate}
            />

            {showResults && (
              <ROIResults results={results} />
            )}
          </div>
        </div>

        {showResults && <ROICallToAction />}
      </div>
    </section>
  );
};
