
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function AdminLayout() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    // Close sidebar by default on mobile
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      {isMobile && !sidebarOpen && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 z-50"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      {/* Sidebar */}
      {sidebarOpen && (
        <div className={`${isMobile ? "fixed inset-0 z-40 flex" : ""}`}>
          {/* Backdrop */}
          {isMobile && (
            <div
              className="fixed inset-0 bg-gray-900/50"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <Sidebar
            className={`${
              isMobile
                ? "relative z-40 w-60"
                : "h-screen"
            }`}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
