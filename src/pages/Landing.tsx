
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ChevronRight, 
  Users, 
  MapPin, 
  MessageSquare, 
  Activity, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Globe 
} from "lucide-react";
import { toast } from "sonner";

const Landing = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  
  // Animated count
  const [counts, setCounts] = useState({ users: 0, reports: 0, cities: 0 });
  const targetCounts = { users: 25000, reports: 83621, cities: 86 };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        users: Math.min(prev.users + 500, targetCounts.users),
        reports: Math.min(prev.reports + 1500, targetCounts.reports),
        cities: Math.min(prev.cities + 2, targetCounts.cities)
      }));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast.success(`Thanks for subscribing! We'll keep you updated.`);
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-violet-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/70"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 animate-slide-up opacity-0" style={{animationDelay: "0.1s"}}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/20">
                <Zap className="h-3.5 w-3.5 mr-1 text-amber-300" />
                Next-Gen Smart City Solutions
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Make Your City <span className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">Smarter</span> with FixIt
              </h1>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                AI-powered issue reporting and tracking platform for modern cities.
                Connect citizens with authorities for faster problem resolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-indigo-800 hover:bg-indigo-100 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => navigate("/login")}
                >
                  Login to Dashboard <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all duration-300"
                  onClick={() => navigate("/login?tab=register")}
                >
                  Create Account
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{counts.users.toLocaleString()}</div>
                  <div className="text-xs text-indigo-200">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{counts.reports.toLocaleString()}</div>
                  <div className="text-xs text-indigo-200">Issues Reported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{counts.cities}</div>
                  <div className="text-xs text-indigo-200">Cities Covered</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up opacity-0" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-xl opacity-30 -z-10 transform rotate-3"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="FixIt Application" 
                  className="rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5"
                  width={600} 
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-medium">Live Data Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">How FixIt Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform connects citizens, government officials, and service providers to create smarter, more responsive cities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Report Issues",
                description: "Take a photo, add details, and submit issues directly from your mobile device or web dashboard.",
                icon: <MapPin className="h-10 w-10 text-indigo-600" />
              },
              {
                title: "Community Engagement",
                description: "Upvote important issues and add comments to provide additional information and context.",
                icon: <Users className="h-10 w-10 text-indigo-600" />
              },
              {
                title: "AI-Powered Tracking",
                description: "Our machine learning algorithms prioritize issues and predict resolution timelines.",
                icon: <Activity className="h-10 w-10 text-indigo-600" />
              },
              {
                title: "Real-time Updates",
                description: "Receive instant notifications as issues progress through the resolution process.",
                icon: <MessageSquare className="h-10 w-10 text-indigo-600" />
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`hover-scale border-primary/10 transition-all duration-300 ${isHovering === `feature-${index}` ? 'neon-border' : ''} overflow-hidden`}
                onMouseEnter={() => setIsHovering(`feature-${index}`)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Why Choose FixIt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages cutting-edge technology to make cities more responsive and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "Public tracking of all reported issues and their resolution status.",
                icon: <Shield className="h-6 w-6 text-white" />,
                color: "from-blue-600 to-cyan-600"
              },
              {
                title: "Efficiency",
                description: "AI-powered prioritization reduces response time by 47%.",
                icon: <Zap className="h-6 w-6 text-white" />,
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Community",
                description: "Build stronger communities through collaborative problem-solving.",
                icon: <Globe className="h-6 w-6 text-white" />,
                color: "from-green-600 to-emerald-600"
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-8 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Ready to transform your city?</h3>
                <p className="text-muted-foreground">Join thousands of cities using FixIt to improve urban life.</p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                onClick={() => navigate("/login?tab=register")}
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-violet-900 to-indigo-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.7) 0%, rgba(17, 24, 39, 0) 25%), radial-gradient(circle at 80% 30%, rgba(124, 58, 237, 0.5) 0%, rgba(17, 24, 39, 0) 50%)"
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Subscribe for Updates</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Be the first to know about new features and improvements to our smart city platform.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit"
              className="bg-white text-indigo-800 hover:bg-indigo-100"
            >
              Subscribe
            </Button>
          </form>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {["Instant Notifications", "Feature Updates", "Success Stories", "Community Events"].map((item, index) => (
              <div key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 mr-2 text-indigo-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Shield className="mr-2 h-5 w-5 text-indigo-400" />
                FixIt
              </h3>
              <p>AI-powered smart city issue management</p>
            </div>
            <div className="flex gap-6">
              <Button variant="link" className="text-gray-300 hover:text-white" onClick={() => toast.info("About page coming soon!")}>About</Button>
              <Button variant="link" className="text-gray-300 hover:text-white" onClick={() => toast.info("Our support team will be in touch shortly!")}>Contact</Button>
              <Button variant="link" className="text-gray-300 hover:text-white" onClick={() => toast.info("Privacy policy opened")}>Privacy</Button>
              <Button variant="link" className="text-gray-300 hover:text-white" onClick={() => toast.info("Terms of service opened")}>Terms</Button>
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
