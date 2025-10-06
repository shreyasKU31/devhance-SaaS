import React from "react";
import { StepProps } from "@/interfaces/step";
import TextAreaField from "../forms/TextareaField";
import FormField from "../forms/FormFiels";

const Step3 = ({ formData, handleChange }: StepProps) => {
  if (!handleChange) {
    return null;
  }
  return (
    <div className="space-y-4">
      <TextAreaField
        label="The Impact (User Benefit)"
        name="userBenefit"
        placeholder="Describe the measurable outcomes. Use numbers where possible (e.g., 'Reduced API response time by 300ms')..."
        value={formData.userBenefit}
        onChange={handleChange}
        rows={8}
      />

      <FormField
        label="Tech Stack & Tools"
        name="techStack"
        placeholder="Type a technology and press Enter..."
        value={formData.techStack}
        onChange={handleChange}
      />
    </div>
  );
};

export default Step3;
