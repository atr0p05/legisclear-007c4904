
interface ROIInputs {
  lawyers: number;
  researchHours: number;
  hourlyRate: number;
  externalSpend: number;
}

interface ROIResults {
  currentMonthlyCost: number;
  ragSavings: number;
  annualSavings: number;
  netSavings: number;
  roiPercentage: number;
  roiMultiplier: number;
}

export const calculateROI = (inputs: ROIInputs): ROIResults => {
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
