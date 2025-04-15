
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Stats } from "@/components/dashboard/Stats";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { RecentIssues } from "@/components/dashboard/RecentIssues";
import { IssueMap } from "@/components/dashboard/IssueMap";
import { NewIssueForm } from "@/components/issues/NewIssueForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FuturisticHeader } from "@/components/dashboard/FuturisticHeader";
import { toast } from "sonner";

export default function Dashboard() {
  const [isNewIssueFormOpen, setIsNewIssueFormOpen] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);
  
  const handleRefreshData = () => {
    setRefreshCounter(prevCounter => prevCounter + 1);
  };
  
  const handleNewIssueCreated = (issue: any) => {
    toast.success(`New issue "${issue.title}" reported successfully`);
    handleRefreshData();
  };
  
  return (
    <>
      <div className="space-y-6">
        <FuturisticHeader refreshData={handleRefreshData} />
        
        <Stats key={`stats-${refreshCounter}`} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryBreakdown key={`category-${refreshCounter}`} />
          <IssueMap key={`map-${refreshCounter}`} />
        </div>
        
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Recent Issue Reports</h2>
          <Button 
            onClick={() => setIsNewIssueFormOpen(true)}
            className="pulse-glow"
          >
            <Plus className="mr-2 h-4 w-4" />
            Report New Issue
          </Button>
        </div>
        
        <RecentIssues key={`issues-${refreshCounter}`} />
      </div>
      
      <NewIssueForm 
        open={isNewIssueFormOpen} 
        onOpenChange={setIsNewIssueFormOpen}
        onIssueCreated={handleNewIssueCreated}
      />
    </>
  );
}
