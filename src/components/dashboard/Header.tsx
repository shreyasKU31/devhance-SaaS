"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { SparklesText } from "../ui/sparkles-text";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="p-8 border-b-2 border-gray-700">
      <h1 className="flex items-center gap-4">
        Welcome,
        <span>
          <SparklesText className="inline-block items-center">
            {user?.username}
          </SparklesText>
        </span>
      </h1>
    </header>
  );
};

export default Header;
