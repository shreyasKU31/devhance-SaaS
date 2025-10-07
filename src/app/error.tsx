"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * This is a global error boundary that catches unhandled errors in the application
 * and displays a user-friendly fallback UI with debugging information.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service or the console
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white font-['Lexend']">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-2xl bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="h-10 w-10 text-red-500" />
              <div>
                <h2 className="text-3xl font-bold font-['Syne'] text-red-400">
                  Something Went Wrong
                </h2>
                <p className="text-neutral-400 mt-1">
                  An unexpected error occurred. Our team has been notified.
                </p>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-300 mb-2">
                Error Message
              </h3>
              <div className="bg-neutral-900 p-4 rounded-lg">
                <p className="text-red-400 font-mono text-sm">
                  {error.message || "No error message provided."}
                </p>
              </div>
            </div>

            {/* Error Digest (for debugging) */}
            {error.digest && (
              <div className="mb-8">
                <h3 className="font-semibold text-neutral-300 mb-2">
                  Error Digest
                </h3>
                <div className="bg-neutral-900 p-4 rounded-lg">
                  <p className="text-neutral-500 font-mono text-xs break-all">
                    {error.digest}
                  </p>
                </div>
              </div>
            )}

            {/* Action Button */}
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              className="brand-gradient text-white font-bold rounded-full py-6 px-8 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
