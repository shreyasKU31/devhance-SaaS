"use client";
import { useState, ReactNode } from "react";
import StepIndicator from "./StepIndicator";

interface Step {
  title: string;
  component: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: any) => void;
  formData: any;
  onFormDataChange: (data: any) => void;
}

function MultiStepForm({
  steps,
  onSubmit,
  formData,
  onFormDataChange,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="rounded-xl shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Registration Form
      </h2>

      <StepIndicator steps={steps} currentStep={currentStep} />

      {/* Form Container with Animation */}
      <div className="overflow-hidden relative" style={{ minHeight: "300px" }}>
        <div
          className="transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${-currentStep * 100}%)`,
            display: "flex",
            width: `100%`,
          }}
        >
          {steps.map((step, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1">
              {step.component}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`px-6 py-2 text-white/80 borderBox rounded-lg font-medium transition-all ${
            currentStep === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 brand text-white rounded-lg font-medium hover:scale-105 hover:cursor-pointer transition-all"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 brand text-white rounded-lg font-medium hover:bg-green-700 transition-all"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;
