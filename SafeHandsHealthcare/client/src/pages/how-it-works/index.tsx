import { Search, UserCheck, Calendar, MessageSquare, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search & Select",
      description: "Browse through our verified healthcare professionals and select the service you need.",
      details: [
        "Filter by service type, location, and availability",
        "View detailed profiles and reviews",
        "Compare different providers",
        "Check pricing and packages"
      ]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Verify & Book",
      description: "Review provider credentials and book your appointment.",
      details: [
        "Check professional certifications",
        "Read verified reviews",
        "Select preferred time slot",
        "Confirm booking details"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule & Prepare",
      description: "Get ready for your appointment with our preparation guide.",
      details: [
        "Receive appointment confirmation",
        "Get preparation instructions",
        "Access provider contact details",
        "Review service requirements"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Connect & Communicate",
      description: "Stay connected with your healthcare provider.",
      details: [
        "Direct messaging with provider",
        "Real-time updates",
        "Emergency contact options",
        "Service modifications"
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Review & Rate",
      description: "Share your experience and help others make informed decisions.",
      details: [
        "Rate your experience",
        "Provide detailed feedback",
        "Share success stories",
        "Suggest improvements"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Simply browse our services, select a provider, choose your preferred time slot, and complete the booking process. You'll receive a confirmation email with all the details."
    },
    {
      question: "Are all providers verified?",
      answer: "Yes, all our healthcare providers undergo a thorough verification process, including background checks, license verification, and skill assessment."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "You can easily cancel or reschedule your appointment through your dashboard or by contacting our support team. Please check our cancellation policy for specific terms."
    },
    {
      question: "How do I pay for services?",
      answer: "We accept various payment methods including credit/debit cards, UPI, and net banking. Payment is processed securely through our platform."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We have a satisfaction guarantee policy. If you're not satisfied with the service, please contact our support team within 24 hours of the appointment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How SafeHands Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process to connect you with trusted healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-dark">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-brand-blue-dark mr-4">Step {index + 1}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-brand-blue-dark rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-brand-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust SafeHands for their healthcare needs
          </p>
          <a 
            href="/home-care" 
            className="inline-block bg-white text-brand-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Find a Provider
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
} 