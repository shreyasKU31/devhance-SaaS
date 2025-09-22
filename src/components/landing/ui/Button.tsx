import Link from "next/link";
import React from "react";

// Define the props for the component, now including 'href'
interface ButtonProps {
  text: string;
  style: string;
  href: string; // The route to navigate to, e.g., "/dashboard"
}

const Buttons = ({ text, style, href }: ButtonProps) => {
  return (
    // The component is now a Next.js Link, which is an `<a>` tag under the hood.
    // It can be styled directly with className.
    <Link
      href={href}
      className={`${style} transition-all duration-300 hover:scale-105 cursor-pointer`}
    >
      {text}
    </Link>
  );
};

export default Buttons;
