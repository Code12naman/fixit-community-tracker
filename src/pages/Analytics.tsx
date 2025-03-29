
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const issuesByMonth = [
  { name: "Jan", open: 18, inProgress: 12, resolved: 25 },
  { name: "Feb", open: 20, inProgress: 15, resolved: 22 },
  { name: "Mar", open: 25, inProgress: 18, resolved: 30 },
  { name: "Apr", open: 22, inProgress: 20, resolved: 28 },
  { name: "May", open: 30, inProgress: 25, resolved: 35 },
  { name: "Jun", open: 28, inProgress: 22, resolved: 40 },
  { name: "Jul", open: 32, inProgress: 28, resolved: 45 },
  { name: "Aug", open: 35, inProgress: 30, resolved: 50 },
  { name: "Sep", open: 30, inProgress: 25, resolved: 55 },
];

const issueResolutionTime = [
  { name: "Infrastructure", time: 8.5 },
  { name: "Environment", time: 6.2 },
  { name: "Parks", time: 5.1 },
  { name: "Roads", time: 7.8 },
  { name: "Utilities", time: 9.2 },
  { name: "Traffic", time: 4.5 },
  { name: "Vandalism", time: 3.2 },
];

const issuesByCategory = [
  { name: "Infrastructure", value: 35 },
  { name: "Environment", value: 20 },
  { name: "Parks", value: 15 },
  { name: "Roads", value: 25 },
  { name: "Utilities", value: 18 },
  { name: "Traffic", value: 22 },
  { name: "Vandalism", value: 12 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#83A6ED", "#8DD1E1"];

const citizenEngagement = [
  { name: "Week 1", reports: 45, upvotes: 120, comments: 65 },
  { name: "Week 2", reports: 52, upvotes: 145, comments: 78 },
  { name: "Week 3", reports: 49, upvotes: 135, comments: 70 },
  { name: "Week 4", reports: 60, upvotes: 180, comments: 92 },
  { name: "Week 5", reports: 55, upvotes: 160, comments: 85 },
  { name: "Week 6", reports: 70, upvotes: 210, comments: 110 },
  { name: "Week 7", reports: 68, upvotes: 200, comments: 105 },
  { name: "Week 8", reports: 75, upvotes: 230, comments: 120 },
];

export default function Analytics() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics</h1>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="py-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Issues By Month</CardTitle>
                <CardDescription>Monthly distribution of issues by status</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={issuesByMonth}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="open" stackId="a" fill="#f97316" name="Open" />
                    <Bar dataKey="inProgress" stackId="a" fill="#3b82f6" name="In Progress" />
                    <Bar dataKey="resolved" stackId="a" fill="#10b981" name="Resolved" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Issues by Category</CardTitle>
                <CardDescription>Distribution of issues across categories</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={issuesByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {issuesByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="issues" className="py-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Resolution Time by Category</CardTitle>
                <CardDescription>Average days to resolve issues by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={issueResolutionTime}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="time" fill="#8884d8" name="Avg. Days" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Issue Trend Analysis</CardTitle>
                <CardDescription>Year-to-date trend of issues reported</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer
                  config={{
                    total: { label: "Total Issues", color: "#8884d8" },
                    resolved: { label: "Resolved Issues", color: "#82ca9d" },
                  }}
                >
                  <LineChart
                    data={issuesByMonth}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#f97316" activeDot={{ r: 8 }} name="Open" />
                    <Line type="monotone" dataKey="inProgress" stroke="#3b82f6" name="In Progress" />
                    <Line type="monotone" dataKey="resolved" stroke="#10b981" name="Resolved" />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Citizen Engagement</CardTitle>
              <CardDescription>Reports, upvotes, and comments over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={citizenEngagement}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="reports" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="upvotes" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="comments" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
