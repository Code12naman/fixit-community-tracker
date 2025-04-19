
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  User, Settings, MapPin, Bell, Shield, 
  Save, Camera, FileText, ClipboardList
} from "lucide-react";

export default function Profile() {
  const [userData, setUserData] = useState({
    name: "Poorva Jain",
    email: "poorva.jain@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, Karnataka",
    bio: "Passionate about improving my community. I've been reporting local issues in Bangalore for over 2 years.",
    avatar: "",
    joinDate: "January 2022",
    reportsSubmitted: 27,
    resolvedIssues: 19,
    commentsMade: 42
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = () => {
    // In a real app, this would send the data to the backend
    toast.success("Profile updated successfully");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4 relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="text-3xl bg-blue-100 text-blue-700">
                  {userData.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="sm" 
                variant="secondary" 
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-2xl">{userData.name}</CardTitle>
            <CardDescription>{userData.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-center">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mr-2">
                Active Member
              </Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Top Reporter
              </Badge>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">Member since {userData.joinDate}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{userData.reportsSubmitted}</p>
                  <p className="text-xs text-muted-foreground">Reports</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{userData.resolvedIssues}</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{userData.commentsMade}</p>
                  <p className="text-xs text-muted-foreground">Comments</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="personal">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">
                <User className="h-4 w-4 mr-2" />
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="activity">
                <ClipboardList className="h-4 w-4 mr-2" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={userData.name} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={userData.email} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={userData.phone} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="location" 
                        name="location" 
                        className="pl-10" 
                        value={userData.location} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      name="bio" 
                      rows={4} 
                      value={userData.bio} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleProfileUpdate}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>View your recent reports and comments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start space-x-4 pb-4 border-b">
                        <div className="bg-blue-100 p-2 rounded-md">
                          <FileText className="h-6 w-6 text-blue-700" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Reported a pothole on Main Street</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(Date.now() - item * 86400000).toLocaleDateString()} • 
                            {item === 1 ? " Open" : item === 2 ? " In Progress" : " Resolved"}
                          </p>
                          <Button variant="link" className="p-0 h-auto text-blue-600">
                            View Report
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View All Activity</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="flex items-center">
                        <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Label htmlFor="notifications">Email Notifications</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates on your reported issues
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-0.5">
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Label htmlFor="notifications">Privacy Settings</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Control what information is visible to others
                      </p>
                    </div>
                    <Button variant="outline">Manage</Button>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
