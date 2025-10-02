export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextareaField {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows: number;
}

export interface TagInputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string[]; // The component accepts an array of strings
  // The onChange handler passes the entire updated array back
  onChange: (name: string, tags: string[]) => void;
}
