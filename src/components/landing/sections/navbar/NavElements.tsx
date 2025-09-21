import React from "react";

const NavElements = ({ text, url }: { text: String; url: string }) => {
  return (
    <a
      href={url}
      className="text-[var(--paragraph)] hover:text-white transition duration-300 cursor-pointer"
    >
      {text}
    </a>
  );
};

export default NavElements;
