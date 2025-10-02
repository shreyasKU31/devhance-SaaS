import { ReactNode } from "react";

interface Step {
  title: string;
  component: ReactNode;
}

function StepIndicator({
  steps,
  currentStep,
}: {
  steps: Step[];
  currentStep: number;
}) {
  return (
    <div className="flex justify-between mb-8 relative">
      {/* Progress Lines */}
      <div className="absolute top-5 left-0 right-0 h-1 flex items-center px-5">
        {steps.map(
          (_, index) =>
            index < steps.length - 1 && (
              <div
                key={index}
                className={`h-1 flex-1 mx-5 transition-all duration-300 ${
                  index < currentStep ? "brand" : "bg-gray-200"
                }`}
              />
            )
        )}
      </div>

      {/* Step Circles */}
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center relative z-10"
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
              index <= currentStep
                ? "brand text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {index + 1}
          </div>
          <span
            className={`text-sm mt-2 ${
              index <= currentStep ? "textGrad font-medium" : "text-gray-400"
            }`}
          >
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
