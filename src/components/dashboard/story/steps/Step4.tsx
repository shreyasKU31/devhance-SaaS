import React from "react";
import ImageUploadField from "../forms/ImageUploadField";
import { StoryFormData } from "@/interfaces/formData";

import { HandleImageUpload } from "@/interfaces/step";

const Step4 = ({
  formData,
  handleImageUpload,
}: {
  formData: StoryFormData;
  handleImageUpload: HandleImageUpload;
}) => {
  if (!handleImageUpload) {
    return null;
  }

  return (
    <ImageUploadField
      label="Cover Image"
      name="projectImage"
      handleImageUpload={handleImageUpload}
    />
  );
};

export default Step4;
