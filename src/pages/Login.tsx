
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, LogIn, UserPlus, ArrowLeft, Shield } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam === 'register' ? 'register' : 'login');

  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Register form
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Update tab when URL changes
  useEffect(() => {
    setActiveTab(tabParam === 'register' ? 'register' : 'login');
  }, [tabParam]);

  // Handle login submission
  const onLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoggingIn(true);
    try {
      // In a real app, this would connect to your auth service
      console.log("Login details:", values);
      
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle registration submission
  const onRegisterSubmit = async (values: z.infer<typeof registerSchema>) => {
    setIsRegistering(true);
    try {
      // In a real app, this would connect to your auth service
      console.log("Registration details:", values);
      
      // Simulate registration and email sending delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Registration successful! Verification email sent.");
      setActiveTab('login');
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-indigo-950 px-4 py-12 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="w-full max-w-md relative z-10">
        <Button 
          variant="link" 
          onClick={() => navigate('/landing')} 
          className="absolute -top-12 left-0 text-white hover:text-indigo-200"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Button>
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <Shield className="h-7 w-7 text-indigo-400" />
            <h1 className="text-3xl font-bold text-white">FixIt Admin</h1>
          </div>
          <p className="text-indigo-200 mt-2">
            Intelligent city management platform
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-indigo-900/50 p-1 rounded-lg">
            <TabsTrigger 
              value="login" 
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <LogIn className="h-4 w-4 mr-2" /> Login
            </TabsTrigger>
            <TabsTrigger 
              value="register" 
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <UserPlus className="h-4 w-4 mr-2" /> Register
            </TabsTrigger>
          </TabsList>
          
          {/* Login Form */}
          <TabsContent value="login">
            <Card className="border-primary/20 glass-effect bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Welcome Back</CardTitle>
                <CardDescription className="text-indigo-200">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-indigo-300" />
                              <Input 
                                placeholder="your@email.com" 
                                className="pl-10 bg-white/10 border-indigo-500/30 text-white" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-indigo-300" />
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10 bg-white/10 border-indigo-500/30 text-white"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full pulse-glow" disabled={isLoggingIn}>
                      {isLoggingIn ? (
                        "Logging in..."
                      ) : (
                        <>
                          <LogIn className="mr-2 h-4 w-4" /> Login
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-indigo-300">
                  Forgot your password?{" "}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => toast.info("Password reset functionality coming soon!")}
                  >
                    Reset it here
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Register Form */}
          <TabsContent value="register">
            <Card className="border-primary/20 glass-effect bg-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Create an Account</CardTitle>
                <CardDescription className="text-indigo-200">
                  Register to start managing city issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                    <FormField
                      control={registerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-indigo-300" />
                              <Input 
                                placeholder="your@email.com" 
                                className="pl-10 bg-white/10 border-indigo-500/30 text-white" 
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-indigo-300" />
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10 bg-white/10 border-indigo-500/30 text-white"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={registerForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Confirm Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-indigo-300" />
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10 bg-white/10 border-indigo-500/30 text-white"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full pulse-glow" disabled={isRegistering}>
                      {isRegistering ? (
                        "Creating account..."
                      ) : (
                        <>
                          <UserPlus className="mr-2 h-4 w-4" /> Register
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-indigo-300">
                  By registering, you agree to our{" "}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => toast.info("Terms of service opened")}
                  >
                    Terms of Service
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
