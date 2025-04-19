
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Users, MapPin, MessageSquare, Activity } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState<string | null>(null);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Your City with FixIt India
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Join the digital transformation of urban governance. Report local issues, track their progress, and help build a better India.
                Join thousands of citizens making a difference in their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50"
                  onClick={() => navigate("/login")}
                >
                  Login to Dashboard <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700"
                  onClick={() => navigate("/login?tab=register")}
                >
                  Create Account
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="/placeholder.svg" 
                alt="FixIt India Application" 
                className="rounded-lg shadow-xl"
                width={600} 
                height={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How FixIt India Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Easy Reporting",
                description: "Report civic issues instantly with our mobile-friendly platform. Add photos and location details easily.",
                icon: <MapPin className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Community Voice",
                description: "Join your local community in highlighting important issues. Your voice matters in shaping your neighborhood.",
                icon: <Users className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Real-time Updates",
                description: "Track the progress of reported issues from submission to resolution by municipal authorities.",
                icon: <Activity className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Stay Informed",
                description: "Receive timely notifications about issue status and updates from your municipal corporation.",
                icon: <MessageSquare className="h-10 w-10 text-blue-600" />
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`transition-all duration-200 ${isHovering === `feature-${index}` ? 'transform -translate-y-2' : ''}`}
                onMouseEnter={() => setIsHovering(`feature-${index}`)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your city?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join FixIt India today and be part of the digital transformation. Help create cleaner, safer, and better-managed cities across India.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50"
            onClick={() => navigate("/login?tab=register")}
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">FixIt India</h3>
              <p>Digital platform for civic issue reporting and tracking</p>
            </div>
            <div className="flex gap-6">
              <Button variant="link" className="text-gray-300 hover:text-white">About</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Contact</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Privacy</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Terms</Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} FixIt India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
