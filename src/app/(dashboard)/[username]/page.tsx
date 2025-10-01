import React from "react";

const page = ({ params }: { params: { username: string } }) => {
  const { username } = params;
  return <div>{username}</div>;
};

export default page;
