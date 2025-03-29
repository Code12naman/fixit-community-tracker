
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
                Make Your City Better with FixIt
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Report local issues, track their progress, and help improve your community.
                Join thousands of citizens making a difference.
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
                alt="FixIt Application" 
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
          <h2 className="text-3xl font-bold text-center mb-12">How FixIt Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Report Issues",
                description: "Take a photo, add details, and submit issues directly from your mobile device.",
                icon: <MapPin className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Community Engagement",
                description: "Upvote important issues and add comments to provide additional information.",
                icon: <Users className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Track Progress",
                description: "Follow the status of reported issues from submission to resolution.",
                icon: <Activity className="h-10 w-10 text-blue-600" />
              },
              {
                title: "Get Updates",
                description: "Receive notifications as issues progress through the resolution process.",
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
          <h2 className="text-3xl font-bold mb-6">Ready to make a difference in your community?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join FixIt today and be part of the solution. Help identify issues, track progress, and improve your neighborhood.
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
              <h3 className="text-xl font-bold text-white">FixIt</h3>
              <p>Community-driven issue reporting and tracking</p>
            </div>
            <div className="flex gap-6">
              <Button variant="link" className="text-gray-300 hover:text-white">About</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Contact</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Privacy</Button>
              <Button variant="link" className="text-gray-300 hover:text-white">Terms</Button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; {new Date().getFullYear()} FixIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
