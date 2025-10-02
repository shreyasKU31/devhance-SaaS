import { InputWithLabel } from "@/components/dashboard/basic/Input";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormField({
  label,
  name,
  type = "text",
  placeholder = "place",
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <InputWithLabel
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className=""
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;
