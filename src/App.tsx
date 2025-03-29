
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "@/components/layout/AdminLayout";
import Index from "./pages/Index";
import Issues from "./pages/Issues";
import Comments from "./pages/Comments";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  // In a real app, this would be managed by your auth system (e.g., Supabase, Clerk, etc.)
  const [isAuthenticated, setIsAuthenticated] = useState(true); // For demo purposes, default to true
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/landing" element={<Landing />} />
            
            {/* Auth routes */}
            <Route path="/login" element={
              isAuthenticated ? <Navigate to="/" /> : <Login />
            } />
            
            {/* Protected admin routes */}
            <Route path="/" element={
              isAuthenticated ? <AdminLayout /> : <Navigate to="/login" />
            }>
              <Route index element={<Index />} />
              <Route path="issue-reports" element={<Issues />} />
              <Route path="comments" element={<Comments />} />
              <Route path="users" element={<Users />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="profile" element={<Profile />} />
              {/* Add routes for other admin pages here */}
              <Route path="*" element={<NotFound />} />
            </Route>
            
            {/* Redirect root to landing for non-authenticated users */}
            <Route path="*" element={
              isAuthenticated ? <Navigate to="/" /> : <Navigate to="/landing" />
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
