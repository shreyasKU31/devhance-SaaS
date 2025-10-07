"use client";
import { useState, ReactNode } from "react";
import { useUser } from "@clerk/nextjs";
import StepIndicator from "./StepIndicator";
import { createStory } from "@/lib/actions/story";

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
  const { user } = useUser();

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) {
        alert("You must be logged in to submit a project story.");
        return;
      }
      const dataWithAuthor = { ...formData, authorId: user.id };
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataWithAuthor),
      });
      const result = await res.json();
      if (result.success) {
        alert("Project story saved!");
        // Optionally reset form or redirect
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      alert("Submission failed.");
    }
  };

  return (
    <div className="rounded-xl shadow-xl p-8 w-full">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Write your story...
      </h2>

      <StepIndicator steps={steps} currentStep={currentStep} />

      {/* Form Container with Animation */}
      <form onSubmit={handleFormSubmit} className="overflow-hidden relative">
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
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
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
              type="button"
              onClick={handleNext}
              className="px-6 py-2 brand text-white rounded-lg font-medium hover:scale-105 hover:cursor-pointer transition-all"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 brand text-white rounded-lg font-medium hover:bg-green-700 transition-all"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;
