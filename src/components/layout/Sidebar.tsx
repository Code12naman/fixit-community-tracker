
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  AlertTriangle,
  MessageSquare,
  Users,
  BarChart,
  Settings,
  LogOut,
  X,
  User
} from "lucide-react";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // In a real app, this would come from your user authentication
  const user = {
    name: "Poorva Jain",
    email: "poorva.jain@example.com",
    avatar: "",
    role: "Admin"
  };

  const routes = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      name: "Issue Reports",
      icon: AlertTriangle,
      path: "/issue-reports",
    },
    {
      name: "Comments",
      icon: MessageSquare,
      path: "/comments",
    },
    {
      name: "Users",
      icon: Users,
      path: "/users",
    },
    {
      name: "Analytics",
      icon: BarChart,
      path: "/analytics",
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
    }
  ];

  return (
    <div className={cn("flex flex-col w-60 border-r bg-background", className)}>
      {/* Close button on mobile only */}
      <div className="lg:hidden p-3 flex justify-end">
        <Button variant="ghost" size="icon" onClick={() => {}}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Logo */}
      <div className="flex items-center h-16 px-5 border-b">
        <span className="font-bold text-2xl text-fixit-blue">FixIt</span>
        <span className="ml-2 text-lg text-gray-600">Admin</span>
      </div>
      
      {/* User profile */}
      <div className="flex items-center p-4 border-b">
        <Avatar className="h-9 w-9 mr-3">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="bg-blue-100 text-blue-700">
            {user.name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col truncate">
          <span className="font-medium text-sm">{user.name}</span>
          <span className="text-xs text-muted-foreground">{user.role}</span>
        </div>
      </div>
      
      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
          {routes.map((route) => (
            <Button
              key={route.path}
              variant={location.pathname === route.path ? "secondary" : "ghost"}
              className={cn(
                "justify-start",
                location.pathname === route.path && "bg-blue-50 text-blue-600"
              )}
              onClick={() => navigate(route.path)}
            >
              <route.icon className="mr-2 h-5 w-5" />
              {route.name}
            </Button>
          ))}
        </nav>
      </ScrollArea>
      
      {/* Footer */}
      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={() => navigate("/login")}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
