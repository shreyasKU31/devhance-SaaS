import React from "react";
import { StepProps } from "@/interfaces/step";
import TextAreaField from "../forms/TextareaField";

const Step2 = ({ formData, handleChange }: StepProps) => {
  if (!handleChange) {
    return null;
  }
  return (
    <div className="space-y-4">
      <TextAreaField
        label="Why? (The Problem)"
        name="why"
        placeholder="Describe the core business need, user pain point, or opportunity that initiated the project..."
        value={formData.why}
        onChange={handleChange}
        rows={8}
      />
      <TextAreaField
        label="How? (The Process & Solution)"
        name="how"
        placeholder="Walk us through the steps you took, the technical decisions you made, and how you arrived at the final solution..."
        value={formData.how}
        onChange={handleChange}
        rows={8}
      />
    </div>
  );
};

export default Step2;
