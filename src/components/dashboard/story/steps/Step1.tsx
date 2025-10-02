import React from "react";
import FormField from "../forms/FormFiels";
import { StepProps } from "@/app/interfaces/step";

const Step1 = ({ formData, handleChangeProp }: StepProps) => {
  return (
    <div className="space-y-4">
      <FormField
        label="Project Title"
        name="title"
        placeholder="e.g., Building a Serverless Image Processing Microservice"
        value={formData.title}
        onChange={handleChangeProp}
      />
      <FormField
        label="URL Slug"
        name="slug"
        placeholder="e.g., building-a-serverless-api"
        value={formData.slug}
        onChange={handleChangeProp}
      />
      <FormField
        label="One-Sentence Summary (The 'What')"
        name="what"
        placeholder="A microservice to handle image uploads and optimization."
        value={formData.what}
        onChange={handleChangeProp}
      />
      <FormField
        label="Project Timeframe (The 'When')"
        name="when"
        placeholder="Q3 2025 or July - September 2025"
        value={formData.when}
        onChange={handleChangeProp}
      />
    </div>
  );
};

export default Step1;
