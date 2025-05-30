
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Mail } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2F51] mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect plan for your legislative research needs. 
            Start with our Basic plan or scale up with Enterprise for unlimited access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <Card className="relative border-2 border-[#43B88C] hover:border-[#29A09D] transition-colors">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#43B88C] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-[#0A2F51] mb-2">
                Basic
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#178ACB]">$5</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for individual researchers and citizens</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>20 queries per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Bill summaries & analysis</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Natural language Q&A</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Basic conflict detection</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#43B88C] hover:bg-[#29A09D] text-white py-3 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative border-2 border-gray-200 hover:border-[#178ACB] transition-colors">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-2xl font-bold text-[#0A2F51] mb-2">
                Enterprise
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#178ACB]">$1,000</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">For organizations and power users</p>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Unlimited API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Advanced analytics & insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#43B88C] mr-3" />
                  <span>White-label options</span>
                </li>
              </ul>
              <Button className="w-full bg-[#178ACB] hover:bg-[#0E5A8A] text-white py-3 flex items-center justify-center gap-2">
                Contact Sales
                <Mail className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            All plans subject to fair usage policies. Enterprise usage caps and limitations 
            are outlined in our Terms of Service. Need a custom solution? 
            <a href="#" className="text-[#178ACB] hover:underline ml-1">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
