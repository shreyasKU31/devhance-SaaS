"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

// Define the props for the Input component
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div className={cn("relative mt-2 transition-all duration-300")}>
        <input
          type={type}
          className={cn(
            "flex w-full rounded-lg border-2 border-gray-700 p-4 text-base text-white placeholder:text-neutral-400 outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            isFocused && "box",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
