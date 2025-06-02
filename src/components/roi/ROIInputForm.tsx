
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface ROIInputs {
  lawyers: number;
  researchHours: number;
  hourlyRate: number;
  externalSpend: number;
}

interface ROIInputFormProps {
  inputs: ROIInputs;
  onInputChange: (inputs: ROIInputs) => void;
  onCalculate: () => void;
}

export const ROIInputForm = ({ inputs, onInputChange, onCalculate }: ROIInputFormProps) => {
  const handleInputChange = (field: keyof ROIInputs, value: string) => {
    onInputChange({
      ...inputs,
      [field]: parseInt(value) || 0
    });
  };

  return (
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
            onChange={(e) => handleInputChange('lawyers', e.target.value)}
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
            onChange={(e) => handleInputChange('researchHours', e.target.value)}
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
            onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
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
            onChange={(e) => handleInputChange('externalSpend', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178ACB] focus:border-transparent"
          />
        </div>

        <Button 
          onClick={onCalculate}
          className="w-full bg-[#43B88C] hover:bg-[#29A09D] text-white py-3 text-lg"
        >
          Calculate RAG ROI
        </Button>
      </CardContent>
    </Card>
  );
};
