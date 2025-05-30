
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, ArrowUp } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#43B88C]" />,
      title: "Unparalleled Accessibility",
      description: "Complex legal language translated into plain English",
      color: "border-[#43B88C]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#178ACB]" />,
      title: "Deep Insights",
      description: "Uncover hidden impacts, connections, and conflicts",
      color: "border-[#178ACB]"
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-[#29A09D]" />,
      title: "Enhanced Transparency",
      description: "Gain clear, unbiased understanding of laws",
      color: "border-[#29A09D]"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#0E5A8A]" />,
      title: "Informed Decisions",
      description: "Empower yourself with actionable knowledge",
      color: "border-[#0E5A8A]"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#43B88C]" />,
      title: "Time Savings",
      description: "Quickly grasp what matters most, without hours of research",
      color: "border-[#43B88C]"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Transforming Understanding, Empowering You
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            LegisClear provides the tools and insights you need to stay informed 
            and engaged in the democratic process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`border-t-4 ${benefit.color} hover:shadow-lg transition-shadow duration-300 group`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2F51] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#0E5A8A]">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#178ACB] to-[#29A09D] p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Thousands of Informed Citizens
            </h3>
            <p className="text-lg opacity-90">
              Be part of a community that values transparency, understanding, and active participation in democracy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
