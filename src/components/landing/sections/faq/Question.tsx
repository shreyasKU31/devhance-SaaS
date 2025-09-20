// components/FaqItem.tsx

"use client"; // This is a client component because it uses hooks (useState)

import React, { useState } from "react";
import type { FC } from "react";

// Define the props for our component
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the active state
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    // Main container that holds the card and the blurred gradient glow
    // The 'group' class allows us to style children based on the parent's state
    <div className="relative group max-w-4xl m-auto">
      {/* This is the gradient glow effect. 
        It's a pseudo-element that sits behind the card.
        It's invisible by default and fades in when `isActive` is true.
      */}
      <div
        className={`
          absolute -inset-1 rounded-xl brand
          transition-all duration-500 ease-in-out
          ${isActive ? "blur-2xl" : "opacity-0 blur-lg"}
        `}
        aria-hidden="true"
      />

      {/* This is the main card content. 
        It has a slight backdrop-blur to look good on top of the glow.
        'relative' and 'z-10' ensure it sits on top of the pseudo-element glow.
      */}
      <div className="relative z-10 w-full overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* Clickable Header */}
        <button
          onClick={toggleActive}
          className="flex items-center justify-between w-full p-6 text-left"
          aria-expanded={isActive}
        >
          <span className="font-semibold text-gray-800">{question}</span>

          {/* Plus/Minus Icon */}
          <div className="relative flex-shrink-0 w-5 h-5 ml-4">
            {/* Horizontal bar (always visible) */}
            <div className="absolute w-full h-0.5 transform -translate-y-1/2 bg-gray-600 rounded-full top-1/2" />

            {/* Vertical bar (rotates to become horizontal on active) */}
            <div
              className={`
                absolute w-full h-0.5 transform -translate-y-1/2 bg-gray-600 rounded-full top-1/2
                transition-transform duration-300 ease-out
                ${isActive ? "rotate-0" : "rotate-90"}
              `}
            />
          </div>
        </button>

        {/* Collapsible Answer Panel.
          We use CSS Grid to animate the height smoothly.
        */}
        <div
          className={`
            grid overflow-hidden transition-all duration-500 ease-in-out
            ${
              isActive
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <p className="p px-6 pb-6 text-black">
              {typeof answer === "string"
                ? answer.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))
                : answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
