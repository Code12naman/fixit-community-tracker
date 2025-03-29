
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, MessageSquare, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Issue {
  id: string;
  title: string;
  location: string;
  date: string;
  status: "open" | "inProgress" | "resolved";
  upvotes: number;
  comments: number;
  reporter: {
    name: string;
    avatar?: string;
  };
}

const mockIssues: Issue[] = [
  {
    id: "ISSUE-1234",
    title: "Pothole on Main Street",
    location: "123 Main St, Downtown",
    date: "2023-08-15",
    status: "open",
    upvotes: 24,
    comments: 7,
    reporter: {
      name: "John D.",
      avatar: "",
    },
  },
  {
    id: "ISSUE-1235",
    title: "Broken Streetlight",
    location: "Oak Avenue & 5th",
    date: "2023-08-12",
    status: "inProgress",
    upvotes: 18,
    comments: 5,
    reporter: {
      name: "Sarah M.",
      avatar: "",
    },
  },
  {
    id: "ISSUE-1236",
    title: "Graffiti on Public Building",
    location: "City Hall, West Wing",
    date: "2023-08-10",
    status: "inProgress",
    upvotes: 12,
    comments: 3,
    reporter: {
      name: "Mike L.",
      avatar: "",
    },
  },
  {
    id: "ISSUE-1237",
    title: "Fallen Tree Blocking Path",
    location: "Central Park, North Entrance",
    date: "2023-08-05",
    status: "resolved",
    upvotes: 35,
    comments: 9,
    reporter: {
      name: "Emily R.",
      avatar: "",
    },
  },
  {
    id: "ISSUE-1238",
    title: "Overflowing Trash Bin",
    location: "Beach Boardwalk",
    date: "2023-08-02",
    status: "resolved",
    upvotes: 15,
    comments: 4,
    reporter: {
      name: "Carlos P.",
      avatar: "",
    },
  },
];

const StatusBadge = ({ status }: { status: Issue["status"] }) => {
  const statusMap = {
    open: {
      label: "Open",
      className: "bg-status-open/20 text-status-open border-status-open/20",
    },
    inProgress: {
      label: "In Progress",
      className: "bg-status-inProgress/20 text-status-inProgress border-status-inProgress/20",
    },
    resolved: {
      label: "Resolved",
      className: "bg-status-resolved/20 text-status-resolved border-status-resolved/20",
    },
  };

  const { label, className } = statusMap[status];

  return <Badge variant="outline" className={cn("font-medium", className)}>{label}</Badge>;
};

export function RecentIssues() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Issues</CardTitle>
        <Button variant="outline" size="sm">View All</Button>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Issue</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Upvotes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell className="font-medium">{issue.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={issue.reporter.avatar} />
                      <AvatarFallback className="text-xs">{issue.reporter.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <span>{issue.reporter.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">{issue.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">{formatDate(issue.date)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={issue.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{issue.upvotes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="mr-1 h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{issue.comments}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
