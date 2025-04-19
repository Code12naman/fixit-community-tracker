
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Stats } from "@/components/dashboard/Stats";
import { IssueMap } from "@/components/dashboard/IssueMap";
import { CategoryBreakdown } from "@/components/dashboard/CategoryBreakdown";
import { RecentIssues } from "@/components/dashboard/RecentIssues";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader />
      
      <Stats />
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <IssueMap />
        <CategoryBreakdown />
      </div>
      
      <Card className="col-span-1 md:col-span-2 lg:col-span-4">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Welcome to FixIt India Admin Panel</CardTitle>
            <CardDescription className="mt-1">
              Manage citizen reported issues across India, track progress, and improve communities
            </CardDescription>
          </div>
          <Button>View Tutorial</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-slate-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Issue Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View and manage issues reported by citizens across Indian cities. Update statuses and respond to concerns.
                </p>
                <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = "/issue-reports"}>
                  Go to Issues
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">User Administration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage municipal officials and citizen accounts. Monitor engagement across different regions.
                </p>
                <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = "/users"}>
                  Go to Users
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View comprehensive analytics on urban issues, resolution times, and citizen participation across India.
                </p>
                <Button variant="outline" className="w-full mt-4" onClick={() => window.location.href = "/analytics"}>
                  Go to Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <RecentIssues />
    </div>
  );
}
