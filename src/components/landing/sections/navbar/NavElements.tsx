import React from "react";

const NavElements = ({ text }: { text: String }) => {
  return (
    <div className="text-[var(--paragraph)] hover:text-white transition duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default NavElements;
