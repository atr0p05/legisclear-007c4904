
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Users,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    inquiryType: "demo"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `LegisClear Inquiry - ${formData.inquiryType === 'demo' ? 'Demo Request' : 'General Inquiry'}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}`;
    
    window.location.href = `mailto:andre@legisclear.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactMethods = [
    {
      icon: <Calendar className="w-8 h-8 text-[#43B88C]" />,
      title: "Schedule a Demo",
      description: "See LegisClear in action with a personalized demonstration.",
      action: "Book Demo",
      onClick: () => window.location.href = "mailto:andre@legisclear.com?subject=Request for RAG Demo"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#178ACB]" />,
      title: "Sales Inquiry",
      description: "Get pricing information and discuss your specific needs.",
      action: "Contact Sales",
      onClick: () => window.location.href = "mailto:andre@legisclear.com?subject=Sales Inquiry"
    },
    {
      icon: <Users className="w-8 h-8 text-[#29A09D]" />,
      title: "Enterprise Solutions",
      description: "Discuss enterprise deployment and custom requirements.",
      action: "Enterprise Contact",
      onClick: () => window.location.href = "mailto:andre@legisclear.com?subject=Enterprise Solutions Inquiry"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#0A2F51] to-[#178ACB]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to transform your legal practice with AI? We're here to help you get started and answer any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F51] mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-[#0E5A8A] max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your specific needs and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2F51] mb-3">
                    {method.title}
                  </h3>
                  <p className="text-[#0E5A8A] mb-6">
                    {method.description}
                  </p>
                  <Button
                    onClick={method.onClick}
                    className="w-full bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#178ACB]"
                      >
                        <option value="demo">Request Demo</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="general">General Questions</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your legal practice and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#43B88C] hover:bg-[#29A09D] text-white py-3"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  <p className="text-sm text-[#0E5A8A] mt-4 opacity-80">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2F51] mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-[#43B88C] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0A2F51]">Email</h4>
                        <p className="text-[#0E5A8A]">andre@legisclear.com</p>
                        <p className="text-sm text-[#0E5A8A] opacity-80">For all inquiries and support</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-[#178ACB] mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#0A2F51]">Response Time</h4>
                        <p className="text-[#0E5A8A]">Within 24 hours</p>
                        <p className="text-sm text-[#0E5A8A] opacity-80">Usually much faster during business hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-[#43B88C] to-[#29A09D] text-white">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-4">Why Choose LegisClear?</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                        6-80x faster legal research with RAG technology
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                        Complete source verification and audit trails
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                        Enterprise-grade security and compliance
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                        Seamless integration with existing tools
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#178ACB]">
                  <h4 className="font-semibold text-[#0A2F51] mb-2">Ready for a Demo?</h4>
                  <p className="text-[#0E5A8A] text-sm mb-4">
                    See LegisClear in action with a personalized demonstration tailored to your practice area and use cases.
                  </p>
                  <Button
                    onClick={() => window.location.href = "mailto:andre@legisclear.com?subject=Request for Personalized Demo"}
                    className="bg-[#178ACB] hover:bg-[#0E5A8A] text-white"
                  >
                    Schedule Demo Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
