import { StoryFormData } from "@/interfaces/formData";

/**
 * Defines the type for the standard change handler for basic inputs and textareas.
 */
export interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

/**
 * Defines the type for the function that handles a change event from the TagInputField component.
 */
export interface HandleTagsChange {
  (name: string, tags: string[]): void;
}

/**
 * Defines the type for the function that handles the result of a successful image upload.
 */
export interface HandleImageUpload {
  (name: string, url: string): void;
}

/**
 * Defines the type for the function that handles a change event from the ToggleField component.
 */
export interface HandleToggleChange {
  (name: string, checked: boolean): void;
}

/**
 * A unified props interface for all step components in the multi-step form.
 * Handlers are optional because not every step will use every type of input.
 */
export interface StepProps {
  formData: StoryFormData;
  handleChange?: HandleChange;
  handleTagsChange?: HandleTagsChange;
  handleImageUpload?: HandleImageUpload;
  handleToggleChange?: HandleToggleChange;
}
