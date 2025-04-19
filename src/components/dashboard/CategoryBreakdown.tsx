import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { FileText } from "lucide-react";

// Mock data for the category breakdown
const data = [
  { name: "Road & Potholes", value: 32, color: "#3B82F6" },
  { name: "Street Lighting", value: 18, color: "#8B5CF6" },
  { name: "Garbage Collection", value: 16, color: "#F59E0B" },
  { name: "Water Supply", value: 14, color: "#EF4444" },
  { name: "Public Parks", value: 12, color: "#10B981" },
  { name: "Others", value: 8, color: "#6B7280" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white shadow-md rounded-md border border-gray-200">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export function CategoryBreakdown() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center">
          <FileText className="mr-2 h-5 w-5 text-fixit-purple" />
          <CardTitle>Category Breakdown</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
