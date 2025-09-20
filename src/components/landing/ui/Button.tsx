import React from "react";

const Buttons = ({ text, style }: { text: string; style: string }) => {
  return (
    <div
      className={`${style} transition-all duration-300 hover:scale-105 cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Buttons;
