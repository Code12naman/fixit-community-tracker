
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
import { Search, Eye, Check, Shield, AlertTriangle, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogClose 
} from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
  const [comments, setComments] = useState(mockComments);
  const [selectedComment, setSelectedComment] = useState<(typeof mockComments)[0] | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  
  // Filter comments based on search query
  const filteredComments = comments.filter(comment => 
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

  const handleApprove = (commentId: string) => {
    setComments(prevComments => 
      prevComments.map(comment => 
        comment.id === commentId 
          ? { ...comment, status: "approved" } 
          : comment
      )
    );
    toast.success("Comment approved successfully");
  };

  const handleFlag = (commentId: string) => {
    setComments(prevComments => 
      prevComments.map(comment => 
        comment.id === commentId 
          ? { ...comment, status: "flagged" } 
          : comment
      )
    );
    toast.warning("Comment flagged for review");
  };

  const handleViewComment = (comment: (typeof mockComments)[0]) => {
    setSelectedComment(comment);
    setIsViewDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'approved': 
        return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900';
      case 'pending': 
        return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900';
      case 'flagged': 
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900';
      default: 
        return '';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          <MessageSquare className="inline-block mr-2 h-8 w-8 text-purple-600" />
          Comments
        </h1>
      </div>
      
      <Card className="neon-border overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Recent Comments
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 bg-gradient-to-r from-purple-900/5 to-indigo-900/5">
            <div className="relative w-full max-w-sm mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search comments..."
                className="pl-8 w-full bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="rounded-md border-t border-primary/10">
            <Table>
              <TableHeader className="bg-gradient-to-r from-purple-900/10 to-indigo-900/10">
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
                {filteredComments.map((comment, index) => (
                  <TableRow key={comment.id} className={`animate-slide-up opacity-0 staggered-item ${index % 2 === 0 ? 'bg-purple-50/30 dark:bg-purple-900/5' : 'bg-indigo-50/30 dark:bg-indigo-900/5'} hover-scale`}>
                    <TableCell className="max-w-[200px] truncate">
                      <div className="font-medium">{comment.issueTitle}</div>
                      <div className="text-xs text-muted-foreground">{comment.issueId}</div>
                    </TableCell>
                    <TableCell className="max-w-[300px]">
                      <div className="line-clamp-2">{comment.content}</div>
                    </TableCell>
                    <TableCell>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <div className="flex items-center gap-2 cursor-pointer">
                            <Avatar className="h-6 w-6 ring-2 ring-primary/20">
                              <AvatarImage src={comment.user.avatar} />
                              <AvatarFallback className="text-xs bg-primary/20">{comment.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <span>{comment.user.name}</span>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="glass-effect border-primary/20">
                          <div className="flex justify-between space-x-4">
                            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                              <AvatarImage src={comment.user.avatar} />
                              <AvatarFallback className="bg-primary/20">{comment.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">{comment.user.name}</h4>
                              <p className="text-xs text-muted-foreground">
                                Active Citizen • {Math.floor(Math.random() * 50) + 1} Reports
                              </p>
                              <div className="flex items-center pt-1">
                                <span className="text-xs text-muted-foreground">Member since {2020 + Math.floor(Math.random() * 3)}</span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell>{formatDate(comment.date)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(comment.status)}>
                        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleViewComment(comment)}
                          className="border-primary/20 hover:bg-primary/10"
                        >
                          <Eye className="mr-1 h-3.5 w-3.5" />
                          View
                        </Button>
                        {comment.status === 'pending' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:border-emerald-900 dark:hover:bg-emerald-950/50"
                            onClick={() => handleApprove(comment.id)}
                          >
                            <Check className="mr-1 h-3.5 w-3.5" />
                            Approve
                          </Button>
                        )}
                        {comment.status !== 'flagged' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-amber-600 border-amber-200 hover:bg-amber-50 dark:border-amber-900 dark:hover:bg-amber-950/50"
                            onClick={() => handleFlag(comment.id)}
                          >
                            <AlertTriangle className="mr-1 h-3.5 w-3.5" />
                            Flag
                          </Button>
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

      {/* Comment View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="glass-effect sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <MessageSquare className="h-5 w-5 text-primary" />
              Comment Details
            </DialogTitle>
            <DialogDescription>
              Viewing comment from {selectedComment?.user.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedComment && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                  <AvatarImage src={selectedComment.user.avatar} />
                  <AvatarFallback className="bg-primary/20">{selectedComment.user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{selectedComment.user.name}</h3>
                    <span className="text-sm text-muted-foreground">{formatDate(selectedComment.date)}</span>
                  </div>
                  <p className="mt-2 text-sm">{selectedComment.content}</p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-medium mb-1">Related Issue</h4>
                <p className="text-md font-semibold">{selectedComment.issueTitle}</p>
                <p className="text-sm text-muted-foreground mt-1">{selectedComment.issueId}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Status: </span>
                  <Badge className={getStatusColor(selectedComment.status)}>
                    {selectedComment.status.charAt(0).toUpperCase() + selectedComment.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="flex gap-2">
                  {selectedComment.status === 'pending' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 dark:border-emerald-900 dark:hover:bg-emerald-950/50"
                      onClick={() => {
                        handleApprove(selectedComment.id);
                        setIsViewDialogOpen(false);
                      }}
                    >
                      <Check className="mr-1 h-3.5 w-3.5" />
                      Approve
                    </Button>
                  )}
                  {selectedComment.status !== 'flagged' && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="text-amber-600 border-amber-200 hover:bg-amber-50 dark:border-amber-900 dark:hover:bg-amber-950/50"
                      onClick={() => {
                        handleFlag(selectedComment.id);
                        setIsViewDialogOpen(false);
                      }}
                    >
                      <AlertTriangle className="mr-1 h-3.5 w-3.5" />
                      Flag
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
