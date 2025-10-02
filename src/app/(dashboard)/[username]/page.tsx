import React from "react";

const page = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;
  return <div>{username || "User"}</div>;
};

export default page;
