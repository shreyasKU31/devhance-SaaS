import React from "react";

export default function LoadingSpinner({ size = 40, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-label="Loading"
      role="status"
    >
      <svg
        className="animate-spin text-green-300"
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 1 0-15 15v5A20 20 0 0 1 25 5z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
