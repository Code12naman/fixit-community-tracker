
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockComments = [
  {
    id: "CMT-1001",
    issueId: "ISSUE-1001",
    issueTitle: "Pothole Near Nehru Road, Bangalore",
    content: "The pothole on Nehru Road has been causing traffic disruptions and vehicle damage.",
    date: "2023-09-15",
    user: {
      name: "Aditya K.",
      avatar: "",
    },
    status: "approved"
  },
  {
    id: "CMT-1002",
    issueId: "ISSUE-1003",
    issueTitle: "Waterlogging in Mumbai's Bandra Area",
    content: "Monsoon season has caused severe waterlogging, making commute impossible.",
    date: "2023-09-14",
    user: {
      name: "Priya M.",
      avatar: "",
    },
    status: "approved"
  },
  {
    id: "CMT-1003",
    issueId: "ISSUE-1002",
    issueTitle: "Waste Dumping in Yamuna River, Delhi",
    content: "Industrial waste is being continuously dumped into the Yamuna River. Environmental hazard.",
    date: "2023-09-13",
    user: {
      name: "Rahul B.",
      avatar: "",
    },
    status: "pending"
  },
  {
    id: "CMT-1004",
    issueId: "ISSUE-1004",
    issueTitle: "Street Light Outage in Kolkata's Park Street",
    content: "Multiple street lights are non-functional, creating safety concerns at night.",
    date: "2023-09-12",
    user: {
      name: "Sneha L.",
      avatar: "",
    },
    status: "approved"
  },
  {
    id: "CMT-1005",
    issueId: "ISSUE-1001",
    issueTitle: "Road Damage Near IIT Chennai Campus",
    content: "The road leading to the campus is severely damaged, causing difficulties for students and faculty.",
    date: "2023-09-11",
    user: {
      name: "Vivek O.",
      avatar: "",
    },
    status: "approved"
  },
  {
    id: "CMT-1006",
    issueId: "ISSUE-1008",
    issueTitle: "Traffic Signal Malfunction in Hyderabad's HITEC City",
    content: "The traffic signal is causing major congestion during peak hours.",
    date: "2023-09-10",
    user: {
      name: "Meera W.",
      avatar: "",
    },
    status: "flagged"
  },
  {
    id: "CMT-1007",
    issueId: "ISSUE-1005",
    issueTitle: "Public Toilet Maintenance in Pune's Koregaon Park",
    content: "Public toilets are in extremely poor condition and need immediate renovation.",
    date: "2023-09-09",
    user: {
      name: "Arjun H.",
      avatar: "",
    },
    status: "approved"
  },
  {
    id: "CMT-1008",
    issueId: "ISSUE-1006",
    issueTitle: "Heritage Building Graffiti in Jaipur's Old City",
    content: "Historic buildings are being vandalized with graffiti, damaging cultural heritage.",
    date: "2023-09-08",
    user: {
      name: "Divya P.",
      avatar: "",
    },
    status: "pending"
  }
];

export default function Comments() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter comments based on search query
  const filteredComments = mockComments.filter(comment => 
    comment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comment.issueTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comment.user.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-3xl font-bold">Comments</h1>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full max-w-sm mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search comments..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Issue</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredComments.map((comment) => (
                  <TableRow key={comment.id}>
                    <TableCell className="max-w-[200px] truncate">
                      <div className="font-medium">{comment.issueTitle}</div>
                      <div className="text-xs text-muted-foreground">{comment.issueId}</div>
                    </TableCell>
                    <TableCell className="max-w-[300px]">
                      <div className="line-clamp-2">{comment.content}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={comment.user.avatar} />
                          <AvatarFallback className="text-xs">{comment.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span>{comment.user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(comment.date)}</TableCell>
                    <TableCell>
                      <Badge className={
                        comment.status === 'approved' ? 'bg-green-100 text-green-800 border-green-200' :
                        comment.status === 'pending' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                        'bg-red-100 text-red-800 border-red-200'
                      }>
                        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        {comment.status === 'pending' && (
                          <Button variant="ghost" size="sm" className="text-green-600">Approve</Button>
                        )}
                      </div>
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
