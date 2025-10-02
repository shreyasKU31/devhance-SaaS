import { Input } from "@/components/ui/input";

interface inputTypes {
  id?: string; // Make optional
  name?: string; // Add name as optional
  type: string;
  label?: string; // Make optional or provide default
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function InputWithLabel({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  className,
}: inputTypes) {
  // Use name as id if id is not provided
  const inputId = id || name;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="text-md text-white block mb-2">
          {label}
        </label>
      )}
      <Input
        type={type}
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
