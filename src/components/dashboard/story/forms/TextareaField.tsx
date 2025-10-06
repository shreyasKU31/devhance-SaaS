import React from "react";
import { TextareaField } from "@/interfaces/inputs";

const TextAreaField = ({
  label,
  name,
  placeholder = "place",
  value,
  rows,
  onChange,
}: TextareaField) => {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-700 p-4 rounded-lg"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default TextAreaField;
