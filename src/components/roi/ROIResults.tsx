
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface ROIResultsData {
  currentMonthlyCost: number;
  ragSavings: number;
  annualSavings: number;
  netSavings: number;
  roiPercentage: number;
  roiMultiplier: number;
}

interface ROIResultsProps {
  results: ROIResultsData;
}

export const ROIResults = ({ results }: ROIResultsProps) => {
  return (
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
      </CardContent>
    </Card>
  );
};
