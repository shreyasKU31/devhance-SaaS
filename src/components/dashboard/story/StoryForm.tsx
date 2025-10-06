"use client";

import { useState } from "react";
import MultiStepForm from "./forms/MultisetupForm";
import Step1 from "./steps/Step1";
import { Step } from "@/interfaces/steps";
import { StoryFormData } from "@/interfaces/formData";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

export default function StepForm() {
  const [formData, setFormData] = useState<StoryFormData>({
    title: "",
    slug: " ",
    what: "",
    when: "",
    why: "",
    how: "",
    userBenefit: "",
    techStack: "",
    projectImage: "",
    isPublished: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Form submitted! Check console for data.");
  };

  const handleImageUpload = (name: string, url: string) => {
    setFormData((prevFormData: StoryFormData) => ({
      ...prevFormData,
      [name]: url, // Update the 'projectImage' field with the Cloudinary URL
    }));
  };

  const handleToggleChange = (name: string, isChecked: boolean) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: isChecked, // Update the 'isPublished' field with the new boolean value
    }));
  };

  const steps: Step[] = [
    {
      title: "The Core Idea",
      component: <Step1 formData={formData} handleChange={handleChange} />,
    },
    {
      title: "The Narrative",
      component: <Step2 formData={formData} handleChange={handleChange} />,
    },
    {
      title: "The Proof & Impact",
      component: <Step3 formData={formData} handleChange={handleChange} />,
    },
    {
      title: "The Visuals",
      component: (
        <Step4 formData={formData} handleImageUpload={handleImageUpload} />
      ),
    },
    {
      title: "Review & Publish",
      component: (
        <Step5 formData={formData} handleToggleChange={handleToggleChange} />
      ),
    },
  ];

  return (
    <div className="h-fit w-full flex items-center justify-center p-4">
      <MultiStepForm
        steps={steps}
        onSubmit={handleSubmit}
        formData={formData}
        onFormDataChange={setFormData}
      />
    </div>
  );
}
