"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import { SparklesText } from "../../ui/sparkles-text";

const Header = () => {
  const { user } = useUser();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!user) return;

    const welcomeShownKey = `welcomeShown_${user.id}`;
    const welcomeTimestamp = localStorage.getItem(welcomeShownKey);
    const currentTime = Date.now();

    if (!welcomeTimestamp) {
      // First time showing welcome for this user
      setShowWelcome(true);
      localStorage.setItem(welcomeShownKey, currentTime.toString());

      // Hide after 10 seconds and mark as complete
      const timer = setTimeout(() => {
        setShowWelcome(false);
        localStorage.setItem(`${welcomeShownKey}_complete`, "true");
      }, 10000);

      return () => clearTimeout(timer);
    } else {
      // Check if welcome was already completed
      const isComplete = localStorage.getItem(`${welcomeShownKey}_complete`);

      if (isComplete === "true") {
        // Already shown and completed - don't show again
        setShowWelcome(false);
        return;
      }

      // Check if still within the 10-second window
      const timeDifference = currentTime - parseInt(welcomeTimestamp);

      if (timeDifference < 10000) {
        // Still within 10 seconds - show welcome
        setShowWelcome(true);

        // Hide after remaining time
        const remainingTime = 10000 - timeDifference;
        const timer = setTimeout(() => {
          setShowWelcome(false);
          localStorage.setItem(`${welcomeShownKey}_complete`, "true");
        }, remainingTime);

        return () => clearTimeout(timer);
      } else {
        // Time expired - don't show
        setShowWelcome(false);
        localStorage.setItem(`${welcomeShownKey}_complete`, "true");
      }
    }
  }, [user]);

  // Don't render if welcome shouldn't be shown
  if (!showWelcome) {
    return null;
  }

  return (
    <header className="p-8 border-b-2 border-gray-700 animate-in fade-in duration-500">
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
