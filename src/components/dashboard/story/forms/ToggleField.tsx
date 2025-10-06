"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff } from "lucide-react";

// ==========================================================================
// PROPS INTERFACE
// ==========================================================================
interface ToggleFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (name: string, checked: boolean) => void;
  description?: string;
  disabled?: boolean;
  className?: string;
}

// ==========================================================================
// TOGGLEFIELD COMPONENT
// ==========================================================================
function ToggleField({
  label,
  name,
  checked = false,
  onChange,
  description,
  disabled = false,
  className = "",
}: ToggleFieldProps) {
  /**
   * Handler that calls the parent's onChange function
   */
  const handleCheckedChange = (isChecked: boolean) => {
    if (!disabled) {
      onChange(name, isChecked);
    }
  };

  /**
   * Dynamic description based on checked state
   */
  const getDescription = () => {
    if (description) return description;

    return checked
      ? "This story will be publicly visible to all users."
      : "This story is currently a private draft.";
  };

  return (
    <div
      className={`
        flex items-center justify-between 
        rounded-lg border border-neutral-700
        bg-neutral-900/50 
        p-4 
        transition-all duration-200
        hover:border-neutral-600
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {/* Left side - Label and description */}
      <div className="space-y-1 flex-1 pr-4">
        <div className="flex items-center gap-2">
          {/* Icon indicator */}
          {checked ? (
            <Eye className="h-4 w-4 text-green-500" />
          ) : (
            <EyeOff className="h-4 w-4 text-neutral-500" />
          )}

          <Label
            htmlFor={name}
            className={`
              text-base font-semibold text-white
              ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {label}
          </Label>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {getDescription()}
        </p>

        {/* Status badge */}
        <div className="pt-1">
          <span
            className={`
              inline-flex items-center px-2.5 py-0.5 
              rounded-full text-xs font-medium
              ${
                checked
                  ? "bg-green-500/10 text-green-500 border border-green-500/20"
                  : "bg-neutral-500/10 text-neutral-400 border border-neutral-700"
              }
            `}
          >
            {checked ? "Published" : "Draft"}
          </span>
        </div>
      </div>

      {/* Right side - Switch */}
      <div className="flex-shrink-0">
        <Switch
          id={name}
          checked={checked}
          onCheckedChange={handleCheckedChange}
          disabled={disabled}
          className="data-[state=checked]:bg-green-600"
        />
      </div>
    </div>
  );
}

export default ToggleField;
