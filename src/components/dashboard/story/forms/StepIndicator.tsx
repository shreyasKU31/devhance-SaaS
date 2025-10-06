import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define the shape of a single step
interface Step {
  title: string;
  component: ReactNode;
}

// Define the props for the StepIndicator component
interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

/**
 * A visual component that displays a progress bar for a multi-step form.
 */
function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-start mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Container for the step circle and its label */}
          <div className="flex flex-col items-center">
            {/* The Step Circle */}
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                index <= currentStep
                  ? "brand text-white" // Active/Completed state
                  : "bg-gray-200 text-gray-500" // Inactive state
              )}
            >
              {index + 1}
            </div>
            {/* The Step Label */}
            <span
              className={cn(
                "text-sm mt-2 text-center",
                index <= currentStep
                  ? "textGrad font-medium" // Active/Completed state
                  : "text-gray-400" // Inactive state
              )}
            >
              {step.title}
            </span>
          </div>

          {/* The Progress Line (only render if it's not the last step) */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                "flex-1 h-1 mt-5 transition-all duration-300",
                index < currentStep ? "brand" : "bg-gray-200" // Line is colored if the *next* step is active
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default StepIndicator;
