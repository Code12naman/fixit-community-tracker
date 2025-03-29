
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const mockIssues = [
  {
    id: "ISSUE-1001",
    title: "Damaged Sidewalk Near School",
    category: "Infrastructure",
    location: "456 Elm St, Downtown",
    date: "2023-09-12",
    status: "open",
    priority: "high",
    reporter: {
      name: "Maria G.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1002",
    title: "Illegal Dumping in Creek",
    category: "Environment",
    location: "Willow Creek Park",
    date: "2023-09-10",
    status: "inProgress",
    priority: "medium",
    reporter: {
      name: "David L.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1003",
    title: "Playground Equipment Damaged",
    category: "Parks",
    location: "Central Park Playground",
    date: "2023-09-08",
    status: "inProgress",
    priority: "medium",
    reporter: {
      name: "Susan K.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1004",
    title: "Street Light Outage",
    category: "Infrastructure",
    location: "10th and Pine St",
    date: "2023-09-05",
    status: "open",
    priority: "low",
    reporter: {
      name: "James T.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1005",
    title: "Pothole on Main Avenue",
    category: "Roads",
    location: "500 Block, Main Avenue",
    date: "2023-09-03",
    status: "resolved",
    priority: "high",
    reporter: {
      name: "Robert P.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1006",
    title: "Graffiti on Community Center",
    category: "Vandalism",
    location: "West Side Community Center",
    date: "2023-09-01",
    status: "resolved",
    priority: "low",
    reporter: {
      name: "Emma S.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1007",
    title: "Water Main Break",
    category: "Utilities",
    location: "Cherry Street & 5th",
    date: "2023-08-29",
    status: "resolved",
    priority: "high",
    reporter: {
      name: "Thomas W.",
      avatar: "",
    }
  },
  {
    id: "ISSUE-1008",
    title: "Traffic Signal Malfunction",
    category: "Traffic",
    location: "Broadway & Main Intersection",
    date: "2023-08-25",
    status: "inProgress",
    priority: "high",
    reporter: {
      name: "Jennifer A.",
      avatar: "",
    }
  }
];

interface PriorityBadgeProps {
  priority: string;
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const priorityMap = {
    low: {
      className: "bg-blue-100 text-blue-800 border-blue-200",
    },
    medium: {
      className: "bg-amber-100 text-amber-800 border-amber-200",
    },
    high: {
      className: "bg-red-100 text-red-800 border-red-200",
    },
  };

  return (
    <Badge variant="outline" className={cn("font-medium", priorityMap[priority as keyof typeof priorityMap].className)}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </Badge>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap = {
    open: {
      className: "bg-status-open/20 text-status-open border-status-open/20",
    },
    inProgress: {
      className: "bg-status-inProgress/20 text-status-inProgress border-status-inProgress/20",
    },
    resolved: {
      className: "bg-status-resolved/20 text-status-resolved border-status-resolved/20",
    },
  };

  const label = status === "inProgress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1);
  return <Badge variant="outline" className={cn("font-medium", statusMap[status as keyof typeof statusMap].className)}>{label}</Badge>;
};

export default function Issues() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter issues based on search query
  const filteredIssues = mockIssues.filter(issue => 
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Issue Reports</h1>
        <Button>New Issue</Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search issues..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Reporter</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIssues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell className="font-medium">{issue.id}</TableCell>
                    <TableCell>{issue.title}</TableCell>
                    <TableCell>{issue.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={issue.reporter.avatar} />
                          <AvatarFallback className="text-xs">{issue.reporter.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span>{issue.reporter.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(issue.date)}</TableCell>
                    <TableCell>
                      <StatusBadge status={issue.status} />
                    </TableCell>
                    <TableCell>
                      <PriorityBadge priority={issue.priority} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
