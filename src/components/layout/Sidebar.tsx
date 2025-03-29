
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart3, FileText, Home, MapPin, Menu, MessageSquare, Settings, Users } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  path: string;
  expanded: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, title, isActive, path, expanded, onClick }: NavItemProps) => (
  <Link
    to={path}
    className={cn(
      "flex items-center py-2 px-3 my-1 text-sm font-medium rounded-md transition-colors",
      isActive
        ? "bg-fixit-blue text-white hover:bg-fixit-blue/90"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
    )}
    onClick={onClick}
  >
    <div className="mr-3">{icon}</div>
    {expanded && <span>{title}</span>}
  </Link>
);

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(!isMobile);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-all duration-300 flex flex-col",
        expanded ? "w-60" : "w-16",
        className
      )}
    >
      <div className="p-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          {expanded && (
            <span className="text-xl font-bold text-fixit-blue dark:text-white">FixIt</span>
          )}
          {!expanded && (
            <span className="text-xl font-bold text-fixit-blue dark:text-white">FI</span>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="px-3 py-5 flex-1 overflow-y-auto">
        <div className="space-y-1">
          <NavItem
            icon={<Home className="h-5 w-5" />}
            title="Dashboard"
            path="/"
            isActive={activeItem === "dashboard"}
            expanded={expanded}
            onClick={() => setActiveItem("dashboard")}
          />
          <NavItem
            icon={<MapPin className="h-5 w-5" />}
            title="Issues Map"
            path="/issues-map"
            isActive={activeItem === "issues-map"}
            expanded={expanded}
            onClick={() => setActiveItem("issues-map")}
          />
          <NavItem
            icon={<FileText className="h-5 w-5" />}
            title="Issue Reports"
            path="/issue-reports"
            isActive={activeItem === "issue-reports"}
            expanded={expanded}
            onClick={() => setActiveItem("issue-reports")}
          />
          <NavItem
            icon={<MessageSquare className="h-5 w-5" />}
            title="Comments"
            path="/comments"
            isActive={activeItem === "comments"}
            expanded={expanded}
            onClick={() => setActiveItem("comments")}
          />
          <NavItem
            icon={<Users className="h-5 w-5" />}
            title="Users"
            path="/users"
            isActive={activeItem === "users"}
            expanded={expanded}
            onClick={() => setActiveItem("users")}
          />
          <NavItem
            icon={<BarChart3 className="h-5 w-5" />}
            title="Analytics"
            path="/analytics"
            isActive={activeItem === "analytics"}
            expanded={expanded}
            onClick={() => setActiveItem("analytics")}
          />
        </div>
      </div>

      <div className="p-3 border-t border-gray-200 dark:border-gray-800">
        <NavItem
          icon={<Settings className="h-5 w-5" />}
          title="Settings"
          path="/settings"
          isActive={activeItem === "settings"}
          expanded={expanded}
          onClick={() => setActiveItem("settings")}
        />
      </div>
    </div>
  );
}
