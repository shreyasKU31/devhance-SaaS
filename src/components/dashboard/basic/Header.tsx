"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { SparklesText } from "../../ui/sparkles-text";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="p-8 border-b-2 border-gray-700">
      <h2 className="flex items-center gap-4 font-['Syne'] text-2xl">
        Welcome,
        <span>
          <SparklesText className="inline-block items-center">
            {user?.username}
          </SparklesText>
        </span>
      </h2>
    </header>
  );
};

export default Header;
