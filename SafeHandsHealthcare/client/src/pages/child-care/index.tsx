import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Baby, Clock, Star, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RatingStars from "@/components/RatingStars";

export default function ChildCarePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      id: 1,
      title: "Professional Babysitting",
      description: "Experienced and certified babysitters for your little ones",
      icon: <Baby className="w-6 h-6" />,
      price: "₹800/hour",
      rating: 4.9,
      features: [
        "Certified Caregivers",
        "Age-Appropriate Activities",
        "Meal Preparation",
        "Basic First Aid"
      ]
    },
    {
      id: 2,
      title: "Child Healthcare",
      description: "Specialized healthcare services for children",
      icon: <Baby className="w-6 h-6" />,
      price: "₹1200/visit",
      rating: 4.8,
      features: [
        "Pediatric Consultations",
        "Vaccination Services",
        "Growth Monitoring",
        "Health Check-ups"
      ]
    },
    {
      id: 3,
      title: "Baby Massage",
      description: "Therapeutic massage services for infants",
      icon: <Baby className="w-6 h-6" />,
      price: "₹1500/session",
      rating: 4.7,
      features: [
        "Infant Massage",
        "Developmental Support",
        "Sleep Training",
        "Parent Education"
      ]
    },
    {
      id: 4,
      title: "Specialized Care",
      description: "Expert care for children with special needs",
      icon: <Baby className="w-6 h-6" />,
      price: "₹2000/session",
      rating: 4.9,
      features: [
        "Special Needs Support",
        "Behavioral Therapy",
        "Sensory Integration",
        "Parent Training"
      ]
    }
  ];

  const handleServiceClick = (serviceId: number) => {
    setLocation(`/child-care/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Child Care Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trust your children to our certified caregivers. We provide comprehensive child care services with love, care, and expertise.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search child care services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="babysitting">Babysitting</SelectItem>
                  <SelectItem value="healthcare">Child Healthcare</SelectItem>
                  <SelectItem value="massage">Baby Massage</SelectItem>
                  <SelectItem value="specialized">Specialized Care</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center space-x-2">
                          <RatingStars rating={service.rating} />
                          <span className="text-sm text-gray-600">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-600">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                    <Button 
                      onClick={() => handleServiceClick(service.id)}
                      className="bg-brand-blue-dark hover:bg-blue-600 text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Child Care Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience peace of mind with our comprehensive child care services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Certified Caregivers",
                description: "All our caregivers are thoroughly vetted and certified"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Hours",
                description: "24/7 availability to match your schedule"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Quality Care",
                description: "Consistently high-quality child care services"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Verified Reviews",
                description: "Real feedback from satisfied parents"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 