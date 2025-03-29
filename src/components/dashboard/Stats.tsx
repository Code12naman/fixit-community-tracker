
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, description, trend, className }: StatCardProps) => (
  <Card className={cn("overflow-hidden", className)}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="h-4 w-4 text-muted-foreground">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {trend ? (
        <p className="text-xs text-muted-foreground mt-1 flex items-center">
          <span className={trend.isPositive ? "text-emerald-500" : "text-red-500"}>
            <ArrowUpDown className="mr-1 h-3 w-3 inline" />
            {trend.value}%
          </span>
          <span className="ml-1">{description}</span>
        </p>
      ) : (
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      )}
    </CardContent>
  </Card>
);

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Issues"
        value="1,352"
        icon={<AlertTriangle className="h-4 w-4" />}
        description="All time reports"
        className="border-l-4 border-l-fixit-blue"
      />
      <StatCard
        title="Open Issues"
        value="243"
        icon={<AlertTriangle className="h-4 w-4" />}
        trend={{ value: 12, isPositive: false }}
        description="From last month"
        className="border-l-4 border-l-status-open"
      />
      <StatCard
        title="In Progress"
        value="157"
        icon={<Clock className="h-4 w-4" />}
        trend={{ value: 8, isPositive: true }}
        description="From last month"
        className="border-l-4 border-l-status-inProgress"
      />
      <StatCard
        title="Resolved"
        value="952"
        icon={<CheckCircle className="h-4 w-4" />}
        trend={{ value: 24, isPositive: true }}
        description="From last month"
        className="border-l-4 border-l-status-resolved"
      />
    </div>
  );
}
