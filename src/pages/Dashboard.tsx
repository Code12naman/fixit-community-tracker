
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Stats } from "@/components/dashboard/Stats";
import { IssueMap } from "@/components/dashboard/IssueMap";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { RecentIssues } from "@/components/dashboard/RecentIssues";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      
      <Stats />
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <IssueMap />
        <CategoryBreakdown />
      </div>
      
      <RecentIssues />
    </div>
  );
}
