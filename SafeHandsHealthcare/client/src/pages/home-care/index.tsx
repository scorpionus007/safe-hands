import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for services
const services = [
  {
    id: 1,
    title: "Elderly Care",
    description: "Professional care for elderly family members",
    icon: "👴",
    price: "₹500/hour",
    rating: 4.8
  },
  {
    id: 2,
    title: "Meal Preparation",
    description: "Healthy and nutritious meals prepared at home",
    icon: "🍳",
    price: "₹400/hour",
    rating: 4.7
  },
  {
    id: 3,
    title: "Travel Companion",
    description: "Safe travel assistance for elderly",
    icon: "🚶",
    price: "₹600/hour",
    rating: 4.9
  },
  {
    id: 4,
    title: "Part-time Caregiver",
    description: "Regular care and assistance",
    icon: "👥",
    price: "₹450/hour",
    rating: 4.6
  }
];

export default function HomeCarePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("all");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Home Care Services in Ahmedabad</h1>
        <p className="text-gray-600">Find trusted caregivers for your loved ones</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Search caregivers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="elderly">Elderly Care</SelectItem>
            <SelectItem value="meal">Meal Preparation</SelectItem>
            <SelectItem value="travel">Travel Companion</SelectItem>
            <SelectItem value="part-time">Part-time Care</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
                <span className="text-3xl">{service.icon}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{service.price}</p>
                  <p className="text-sm text-gray-500">Rating: {service.rating} ⭐</p>
                </div>
                <Button 
                  onClick={() => setLocation(`/home-care/${service.id}`)}
                  variant="default"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Why Choose SafeHands for Home Care?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Verified Caregivers</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All our caregivers are thoroughly verified with government ID and background checks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We maintain high standards through regular training and quality checks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our support team is always available to help you with any concerns.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 