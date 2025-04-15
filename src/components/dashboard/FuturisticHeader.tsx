
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Sparkles, 
  Zap, 
  Bell, 
  RefreshCw, 
  Search
} from "lucide-react";
import { toast } from "sonner";

interface FuturisticHeaderProps {
  refreshData: () => void;
}

export function FuturisticHeader({ refreshData }: FuturisticHeaderProps) {
  const handleRefresh = () => {
    refreshData();
    toast.success("Dashboard refreshed with latest data");
  };

  const handleScan = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Scanning for new issues...",
        success: "Area scan complete. No new critical issues found.",
        error: "Scan failed. Please try again."
      }
    );
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center">
            <Activity className="mr-2 h-8 w-8 text-purple-600" />
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage city-wide issues in real-time
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="py-1.5 pl-1.5 pr-3 gap-1 border-primary/20 text-primary">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            System Active
          </Badge>
          
          <Badge variant="secondary" className="py-1.5 px-3 gap-1 border-none">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 mr-1" />
            AI Analysis Enabled
          </Badge>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/20"
            onClick={handleRefresh}
          >
            <RefreshCw className="mr-1 h-4 w-4" />
            Refresh
          </Button>
          
          <Button 
            size="sm" 
            onClick={handleScan}
            className="pulse-glow"
          >
            <Search className="mr-1 h-4 w-4" />
            Quick Scan
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => toast.info("No new notifications")}>
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-4 p-3 rounded-lg glass-effect border border-primary/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" />
          <span className="text-sm font-medium">Real-time monitoring active</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div>Last updated: {new Date().toLocaleTimeString()}</div>
          <div>|</div>
          <div>Status: <span className="text-green-500 font-medium">Operational</span></div>
          <div>|</div>
          <div>Coverage: <span className="font-medium">8 regions</span></div>
        </div>
      </div>
    </div>
  );
}
