import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="pt-30 w-full flex justify-center">
      <SignUp />
    </div>
  );
};

export default page;
