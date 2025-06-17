import { UserPlus, CheckCircle, Star, DollarSign, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function BecomeProviderPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Earnings",
      description: "Earn what you deserve with our transparent pricing model"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Choose your own hours and work-life balance"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Access to training and development opportunities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance for your peace of mind"
    }
  ];

  const requirements = [
    {
      title: "Professional Qualifications",
      items: [
        "Valid professional license",
        "Minimum 2 years of experience",
        "Clean background check",
        "Professional references"
      ]
    },
    {
      title: "Technical Requirements",
      items: [
        "Smartphone with internet access",
        "Basic computer skills",
        "Reliable transportation",
        "Valid insurance"
      ]
    },
    {
      title: "Personal Qualities",
      items: [
        "Excellent communication skills",
        "Compassionate nature",
        "Professional attitude",
        "Reliability and punctuality"
      ]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Complete Application",
      description: "Fill out our online application form with your details and qualifications"
    },
    {
      number: "02",
      title: "Document Verification",
      description: "Submit required documents for verification and background check"
    },
    {
      number: "03",
      title: "Interview Process",
      description: "Meet with our team for a skills assessment and interview"
    },
    {
      number: "04",
      title: "Onboarding",
      description: "Complete training and start accepting clients"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
              <UserPlus className="w-8 h-8 text-brand-blue-dark" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Join Our Healthcare Network
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become a part of our trusted network of healthcare professionals and make a difference in people's lives
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Join SafeHands?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of being part of our healthcare community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-dark mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you need to join our network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{requirement.title}</h3>
                <ul className="space-y-4">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start your journey with SafeHands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-sm p-8 h-full">
                  <div className="text-4xl font-bold text-brand-blue-dark mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Start your journey with SafeHands and make a difference in healthcare delivery
          </p>
          <Button className="bg-white text-brand-blue-dark hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
            Apply Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
} 