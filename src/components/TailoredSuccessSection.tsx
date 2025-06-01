
import { Card } from "@/components/ui/card";
import { Building, Users, GraduationCap, Scale, Shield, BookOpen } from "lucide-react";

export const TailoredSuccessSection = () => {
  const targetMarkets = [
    {
      icon: <Building className="w-12 h-12 text-[#178ACB]" />,
      title: "Law Firms",
      subtitle: "All Sizes, Maximum Impact",
      benefits: [
        "Enhance competitiveness with innovative pricing models",
        "Handle complex matters with greater efficiency",
        "Boost profitability through reduced overhead",
        "Offer clients faster, more accurate service"
      ],
      color: "border-[#178ACB]",
      bgColor: "bg-[#178ACB]/5"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#29A09D]" />,
      title: "Corporate Legal Departments",
      subtitle: "Strategic Legal Operations",
      benefits: [
        "Strengthen compliance across all business units",
        "Accelerate due diligence and contract management",
        "Optimize internal investigations with rapid insights",
        "Reduce external counsel dependency and costs"
      ],
      color: "border-[#29A09D]",
      bgColor: "bg-[#29A09D]/5"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#43B88C]" />,
      title: "Universities & Academic Institutions",
      subtitle: "Legal Excellence in Education",
      benefits: [
        "Support institutional legal needs efficiently",
        "Elevate legal scholarship with advanced research tools",
        "Equip the next generation of legal minds",
        "Streamline administrative legal processes"
      ],
      color: "border-[#43B88C]",
      bgColor: "bg-[#43B88C]/5"
    }
  ];

  return (
    <section id="tailored-success" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Empowering Every Facet of the Legal World
          </h2>
          <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
            LegisClear delivers intelligent solutions tailored to the unique needs 
            of law firms, corporate legal departments, and universities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {targetMarkets.map((market, index) => (
            <Card 
              key={index} 
              className={`border-t-4 ${market.color} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              <div className={`${market.bgColor} p-6`}>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {market.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2F51] mb-2">
                    {market.title}
                  </h3>
                  <p className="text-[#0E5A8A] font-medium">
                    {market.subtitle}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {market.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#43B88C] mt-2 flex-shrink-0"></div>
                      <p className="text-[#0E5A8A] text-sm">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg border max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#178ACB] mb-2">6-80x</div>
                <p className="text-[#0E5A8A] text-sm">Faster than traditional research methods</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#29A09D] mb-2">260%+</div>
                <p className="text-[#0E5A8A] text-sm">Monthly ROI potential</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#43B88C] mb-2">99.99%</div>
                <p className="text-[#0E5A8A] text-sm">AI-driven accuracy rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
