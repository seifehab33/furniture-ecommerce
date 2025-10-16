import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home } from "lucide-react";
import { useCallback } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleGoHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-muted/30">
      <Card className="max-w-md w-full p-6 text-center shadow-lg">
        <CardContent>
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleGoBack}
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>

            <Button className="flex items-center gap-2" onClick={handleGoHome}>
              <Home className="h-4 w-4" />
              Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
