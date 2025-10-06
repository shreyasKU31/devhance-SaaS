import { InputWithLabel } from "@/components/dashboard/basic/Input";
import { FormFieldProps } from "@/interfaces/inputs";

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
