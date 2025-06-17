import { Search, HelpCircle, BookOpen, MessageSquare, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer: "To create an account, click on the 'Sign Up' button in the top right corner. You'll need to provide your email address, create a password, and fill in some basic information. Once completed, you'll receive a verification email to activate your account."
        },
        {
          question: "What services do you offer?",
          answer: "We offer a wide range of healthcare services including home care, medical services, and child care. Each category has multiple specialized services tailored to meet different needs. You can browse all services on our homepage or visit specific service pages for more details."
        },
        {
          question: "How do I book a service?",
          answer: "To book a service, first browse and select the service you need. Click on the service to view available providers, their ratings, and pricing. Choose your preferred provider and time slot, then follow the booking process. You'll receive a confirmation email once your booking is complete."
        }
      ]
    },
    {
      title: "Account & Profile",
      questions: [
        {
          question: "How do I update my profile information?",
          answer: "You can update your profile information by clicking on your profile picture in the top right corner and selecting 'Edit Profile'. Here you can modify your personal information, contact details, and preferences."
        },
        {
          question: "How do I change my password?",
          answer: "To change your password, go to your profile settings and click on 'Security'. You'll need to enter your current password and then create a new one. Make sure your new password meets our security requirements."
        },
        {
          question: "How do I manage my notifications?",
          answer: "You can manage your notification preferences in your profile settings under 'Notifications'. Here you can choose which types of notifications you want to receive and how you want to receive them (email, SMS, or in-app)."
        }
      ]
    },
    {
      title: "Billing & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment methods like PayPal. All payments are processed securely through our payment gateway."
        },
        {
          question: "How do I view my billing history?",
          answer: "You can view your billing history by going to your profile and selecting 'Billing History'. Here you'll find all your past transactions, receipts, and payment records."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a 100% satisfaction guarantee. If you're not satisfied with a service, you can request a refund within 24 hours of the service completion. Refunds are processed within 5-7 business days."
        }
      ]
    },
    {
      title: "Provider Information",
      questions: [
        {
          question: "How are providers verified?",
          answer: "All our providers undergo a rigorous verification process including background checks, license verification, and reference checks. We also conduct regular quality assessments to ensure they maintain our high standards."
        },
        {
          question: "Can I choose my provider?",
          answer: "Yes, you can choose your preferred provider from our network. Each provider's profile includes their experience, ratings, reviews, and availability. You can filter providers based on your preferences."
        },
        {
          question: "What if I need to reschedule?",
          answer: "You can reschedule your appointment up to 24 hours before the scheduled time. Simply go to your bookings, select the appointment, and click 'Reschedule'. You'll be able to choose a new time slot based on provider availability."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us at 1800-SAFE-HANDS",
      action: "Call Now"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Browse our detailed guides and tutorials",
      action: "View Guides"
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
              <HelpCircle className="w-8 h-8 text-brand-blue-dark" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for help..."
                  className="pl-10 py-6 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue-dark mx-auto mb-6">
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button variant="outline" className="w-full">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`item-${categoryIndex}-${itemIndex}`}
                      className="bg-white rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 