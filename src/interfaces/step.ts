import { StoryFormData } from "@/app/interfaces/formData";
export interface StepProps {
  formData: StoryFormData;
  handleChangeProp: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
