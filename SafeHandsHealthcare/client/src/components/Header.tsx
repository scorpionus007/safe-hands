import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { cities } from "@/data/mockData";
import logoImage from "@assets/ChatGPT Image Jun 17, 2025, 11_45_25 AM_1750148953001.png";

export default function Header() {
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const indianCities = cities;

  const SafeHandsLogo = () => (
    <img src={logoImage} alt="SafeHands Logo" className="w-7 h-7" />
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to providers page with search query
      window.location.href = `/providers?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Tagline */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg shadow-md">
                <SafeHandsLogo />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SafeHands</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Trusted Care, Right at Your Doorstep</p>
              </div>
            </div>
          </Link>

          {/* City Selector and Search - Desktop */}
          <div className="flex-1 max-w-lg mx-8 hidden md:flex">
            <div className="flex w-full">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {indianCities?.map((city: any) => (
                    <SelectItem key={city.id} value={city.id.toString()}>
                      {city.name}, {city.state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <form onSubmit={handleSearch} className="flex-1 flex relative">
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-sky-500 border-l-0"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/providers">
              <Button variant="ghost" className="text-gray-700 hover:text-sky-600">
                Find Providers
              </Button>
            </Link>
            <Link href="/home">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-6">
                  <div className="space-y-4">
                    {/* Mobile Search */}
                    <div className="space-y-2">
                      <Select value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianCities?.map((city: any) => (
                            <SelectItem key={city.id} value={city.id.toString()}>
                              {city.name}, {city.state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <form onSubmit={handleSearch} className="relative">
                        <Input
                          type="text"
                          placeholder="Search for services..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pr-10"
                        />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        >
                          <Search className="w-4 h-4" />
                        </Button>
                      </form>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="space-y-2">
                      <Link href="/providers">
                        <Button variant="ghost" className="w-full justify-start">
                          Find Providers
                        </Button>
                      </Link>
                      <Link href="/home">
                        <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}