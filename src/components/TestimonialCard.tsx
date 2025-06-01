
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  highlight?: string;
}

export const TestimonialCard = ({ quote, author, title, company, highlight }: TestimonialCardProps) => {
  return (
    <Card className="border-l-4 border-[#43B88C] bg-white shadow-lg">
      <CardContent className="p-6">
        <Quote className="w-8 h-8 text-[#43B88C] mb-4" />
        <blockquote className="text-[#0E5A8A] mb-4 italic">
          "{quote}"
        </blockquote>
        {highlight && (
          <div className="bg-[#43B88C]/10 p-3 rounded mb-4">
            <p className="text-sm font-medium text-[#0A2F51]">Key Impact:</p>
            <p className="text-sm text-[#0E5A8A]">{highlight}</p>
          </div>
        )}
        <div className="border-t pt-4">
          <p className="font-semibold text-[#0A2F51]">{author}</p>
          <p className="text-sm text-[#0E5A8A]">{title}</p>
          <p className="text-sm text-[#178ACB] font-medium">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};
