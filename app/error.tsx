"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 text-destructive" />
        <h2 className="text-3xl font-semibold mb-4">Something went wrong!</h2>
        <p className="text-lg text-muted-foreground mb-8">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
