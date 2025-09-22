import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="pt-30 w-full flex justify-center">
      <SignIn />
    </div>
  );
};

export default page;
