import LoadingSpinner from "@/components/ui/LoadingSpinner";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
