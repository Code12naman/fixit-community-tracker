
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 max-w-md px-4">
        <h1 className="text-7xl font-bold text-fixit-blue">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-500">
          The page might have been moved, deleted, or maybe you mistyped the URL.
        </p>
        <Button asChild className="mt-6">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
