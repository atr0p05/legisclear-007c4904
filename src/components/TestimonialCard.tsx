
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  highlight?: string;
  image?: string;
}

export const TestimonialCard = ({ quote, author, title, company, highlight, image }: TestimonialCardProps) => {
  return (
    <Card className="border-l-4 border-[#43B88C] bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <div className="relative mb-6 flex-grow">
          <Quote className="w-8 h-8 text-[#43B88C] mb-4 opacity-50" />
          <blockquote className="text-[#0E5A8A] italic leading-relaxed">
            "{quote}"
          </blockquote>
        </div>

        {/* Key Impact Highlight */}
        {highlight && (
          <div className="bg-gradient-to-r from-[#43B88C]/10 to-[#43B88C]/5 p-4 rounded-lg mb-6 border-l-2 border-[#43B88C]">
            <p className="text-sm font-semibold text-[#0A2F51] mb-1">Key Impact:</p>
            <p className="text-sm text-[#0E5A8A] font-medium">{highlight}</p>
          </div>
        )}

        {/* Author Info */}
        <div className="border-t pt-4 mt-auto">
          <div className="flex items-center space-x-4">
            {image ? (
              <img 
                src={image} 
                alt={author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#43B88C]/20"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#43B88C] to-[#29A09D] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <div className="flex-1">
              <p className="font-semibold text-[#0A2F51]">{author}</p>
              <p className="text-sm text-[#0E5A8A]">{title}</p>
              <p className="text-sm text-[#178ACB] font-medium">{company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
