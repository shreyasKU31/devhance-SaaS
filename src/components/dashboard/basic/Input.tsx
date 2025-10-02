import { Input } from "@/components/ui/input";

interface inputTypes {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

export function InputWithLabel({ id, type, label, placeholder }: inputTypes) {
  return (
    <div className="w-full">
      <label htmlFor={`${id}`} className="text-md">
        {label}
      </label>
      <Input type={`${type}`} id={`${id}`} placeholder={`${placeholder}`} />
    </div>
  );
}
