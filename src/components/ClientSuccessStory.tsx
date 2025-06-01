
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react";

interface ClientSuccessStoryProps {
  id: string;
  title: string;
  clientName: string;
  clientType: string;
  clientLogo?: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  category: "law-firm" | "corporate" | "university";
}

export const ClientSuccessStory = ({ 
  title, 
  clientName, 
  clientType, 
  challenge, 
  solution, 
  results, 
  testimonial, 
  category 
}: ClientSuccessStoryProps) => {
  const getCategoryColor = () => {
    switch (category) {
      case "law-firm": return "border-[#178ACB]";
      case "corporate": return "border-[#29A09D]";
      case "university": return "border-[#43B88C]";
      default: return "border-[#178ACB]";
    }
  };

  return (
    <Card className={`border-t-4 ${getCategoryColor()} hover:shadow-xl transition-all duration-300`}>
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0A2F51] mb-2">{title}</h3>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-[#0E5A8A]">{clientType}</Badge>
              <span className="text-[#0E5A8A] font-medium">{clientName}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Challenge */}
        <div>
          <h4 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-400 mr-3"></div>
            The Challenge
          </h4>
          <p className="text-[#0E5A8A] leading-relaxed">{challenge}</p>
        </div>

        {/* RAG Solution */}
        <div>
          <h4 className="text-lg font-semibold text-[#0A2F51] mb-3 flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#43B88C] mr-3"></div>
            The LegisClear RAG Solution
          </h4>
          <p className="text-[#0E5A8A] leading-relaxed">{solution}</p>
        </div>

        {/* Results */}
        <div>
          <h4 className="text-lg font-semibold text-[#0A2F51] mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-3 text-[#178ACB]" />
            Quantifiable Results
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">{result.icon}</div>
                <div className="text-2xl font-bold text-[#178ACB] mb-1">{result.value}</div>
                <p className="text-sm text-[#0E5A8A]">{result.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#43B88C]/10 p-6 rounded-lg border-l-4 border-[#43B88C]">
          <blockquote className="text-[#0E5A8A] italic mb-4">
            "{testimonial.quote}"
          </blockquote>
          <div>
            <p className="font-semibold text-[#0A2F51]">{testimonial.author}</p>
            <p className="text-sm text-[#0E5A8A]">{testimonial.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
