import { Shield, UserCheck, FileCheck, Heart, Lock, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SafetyPage() {
  const safetyMeasures = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Provider Verification",
      description: "Thorough background checks and credential verification for all healthcare professionals",
      details: [
        "Identity verification",
        "Professional license validation",
        "Background criminal checks",
        "Reference verification"
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Quality Standards",
      description: "Rigorous quality control measures to ensure service excellence",
      details: [
        "Service quality monitoring",
        "Regular performance reviews",
        "Client feedback analysis",
        "Continuous improvement programs"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Care Protocols",
      description: "Standardized care protocols for consistent service delivery",
      details: [
        "Evidence-based practices",
        "Safety guidelines",
        "Emergency procedures",
        "Infection control measures"
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Security",
      description: "Advanced security measures to protect your information",
      details: [
        "Encrypted data storage",
        "Secure communication",
        "Privacy compliance",
        "Regular security audits"
      ]
    }
  ];

  const safetyFeatures = [
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance for any emergencies or concerns"
    },
    {
      title: "Insurance Coverage",
      description: "Comprehensive insurance for both providers and clients"
    },
    {
      title: "Quality Guarantee",
      description: "Satisfaction guarantee with our services"
    },
    {
      title: "Regular Monitoring",
      description: "Continuous monitoring of service quality and safety"
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
              <Shield className="w-8 h-8 text-brand-blue-dark" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Safety Standards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety and well-being are our top priorities. Learn about our comprehensive safety measures and quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {safetyMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-dark mb-6">
                  {measure.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{measure.title}</h2>
                <p className="text-gray-600 mb-6">{measure.description}</p>
                <ul className="space-y-3">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-brand-blue-dark rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Safety Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra layers of protection for your peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-16 lg:py-20 bg-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Safety Commitment</h2>
              <p className="text-xl text-blue-100 mb-6">
                We are committed to maintaining the highest standards of safety and quality in healthcare delivery. Our comprehensive safety measures ensure that you receive the best possible care in a secure environment.
              </p>
              <div className="flex items-center space-x-4">
                <AlertCircle className="w-6 h-6 text-yellow-300" />
                <p className="text-yellow-300 font-semibold">24/7 Emergency Support Available</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Safety Hotline</h3>
                <p className="text-blue-100 mb-4">For any safety concerns or emergencies, contact our dedicated safety team:</p>
                <div className="space-y-2">
                  <p className="text-white">Emergency: 1800-SAFE-HANDS</p>
                  <p className="text-white">Email: safety@safehands.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 