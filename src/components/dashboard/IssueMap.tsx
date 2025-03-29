
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// This is a mock component for a map
// In a real implementation, this would use a mapping library like Mapbox or Google Maps
export function IssueMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    if (!mapRef.current) return;
    
    // This is where you would initialize your map library
    // For now, we'll just add a simple placeholder with CSS
    const mapContainer = mapRef.current;
    mapContainer.innerHTML = "";
    
    // Mock map implementation
    const mockMap = document.createElement("div");
    mockMap.className = "h-full w-full bg-gray-200 flex items-center justify-center relative overflow-hidden";
    mockMap.style.background = "linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)";
    
    // Create fake pins for different statuses
    const statuses = ["open", "inProgress", "resolved"];
    const statusColors = {
      open: "bg-status-open",
      inProgress: "bg-status-inProgress",
      resolved: "bg-status-resolved"
    };
    
    const pins = [];
    const numPins = isMobile ? 20 : 40;
    
    for (let i = 0; i < numPins; i++) {
      const pin = document.createElement("div");
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      // Only show pins that match the active filter or show all if "all" is selected
      if (activeFilter !== "all" && status !== activeFilter) {
        pin.style.display = "none";
      }
      
      pin.className = `absolute w-3 h-3 rounded-full ${statusColors[status as keyof typeof statusColors]} animate-pulse-subtle`;
      pin.style.left = `${10 + Math.random() * 80}%`;
      pin.style.top = `${10 + Math.random() * 80}%`;
      
      // Add pulse effect
      const pulse = document.createElement("div");
      pulse.className = `absolute inset-0 rounded-full ${statusColors[status as keyof typeof statusColors]} opacity-70 animate-ping`;
      pin.appendChild(pulse);
      
      pins.push(pin);
      mockMap.appendChild(pin);
    }
    
    // Add a city grid
    const grid = document.createElement("div");
    grid.className = "absolute inset-0 opacity-10";
    grid.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)";
    grid.style.backgroundSize = "20px 20px";
    mockMap.appendChild(grid);
    
    // Add map labels
    const label = document.createElement("div");
    label.className = "absolute bottom-2 right-2 text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded";
    label.textContent = "City Map";
    mockMap.appendChild(label);
    
    mapContainer.appendChild(mockMap);
    
    return () => {
      // Cleanup
      mapContainer.innerHTML = "";
    };
  }, [isMobile, activeFilter]);

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-fixit-blue" />
          <CardTitle>Issue Map</CardTitle>
        </div>
        <div className="flex space-x-2">
          <Badge 
            variant={activeFilter === "all" ? "default" : "outline"} 
            className="cursor-pointer"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Badge>
          <Badge 
            variant={activeFilter === "open" ? "default" : "outline"} 
            className="cursor-pointer bg-status-open/20 hover:bg-status-open/30 text-status-open border-status-open/20"
            onClick={() => setActiveFilter("open")}
          >
            Open
          </Badge>
          <Badge 
            variant={activeFilter === "inProgress" ? "default" : "outline"} 
            className="cursor-pointer bg-status-inProgress/20 hover:bg-status-inProgress/30 text-status-inProgress border-status-inProgress/20"
            onClick={() => setActiveFilter("inProgress")}
          >
            In Progress
          </Badge>
          <Badge 
            variant={activeFilter === "resolved" ? "default" : "outline"} 
            className="cursor-pointer bg-status-resolved/20 hover:bg-status-resolved/30 text-status-resolved border-status-resolved/20"
            onClick={() => setActiveFilter("resolved")}
          >
            Resolved
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div ref={mapRef} className="h-[350px] lg:h-[500px] w-full bg-gray-100 rounded-md overflow-hidden"></div>
      </CardContent>
    </Card>
  );
}
