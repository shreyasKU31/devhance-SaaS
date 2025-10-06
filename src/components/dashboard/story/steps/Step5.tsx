import React from "react";
import { StoryFormData } from "@/interfaces/formData";
import ToggleField from "../forms/ToggleField";

const Step5 = ({
  formData,
  handleToggleChange,
}: {
  formData: StoryFormData;
  handleToggleChange(name: string, checked: boolean): void;
}) => {
  return (
    <ToggleField
      label="Make this story public"
      name="isPublished"
      checked={formData.isPublished}
      onChange={handleToggleChange} // Note: This would need a special handler
    />
  );
};

export default Step5;
