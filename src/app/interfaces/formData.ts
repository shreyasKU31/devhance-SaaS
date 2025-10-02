/**
 * Defines the complete shape of the data for a single DevHance project story.
 * This interface will be used to manage the state of our multi-step form.
 */
export interface StoryFormData {
  title: string;
  slug: string;
  what: string;
  when: string;
  why: any;
  how: any;
  userBenefit: any;
  techStack: string;
  projectImage: string;
  isPublished: boolean;
}
