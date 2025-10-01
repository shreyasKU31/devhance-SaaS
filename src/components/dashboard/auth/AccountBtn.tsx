import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const AccountBtn = () => {
  return (
    <div className="mb-4 flex items-end justify-end">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default AccountBtn;
