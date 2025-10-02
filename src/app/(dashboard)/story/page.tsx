import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      story
      <Link href="/story/new" className="brand py-2 px-4 rounded-full">
        Create new story +
      </Link>
    </div>
  );
};

export default page;
