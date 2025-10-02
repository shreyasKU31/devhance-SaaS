import { db } from "@/lib/db";
import { notFound } from "next/navigation";

const UsernamePage = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;

  // Check DB
  const user = await db.user.findFirst({
    where: { username },
  });

  if (!user) {
    notFound(); // Will render Next.js 404 page
  }

  return <div>{username}</div>;
};

export default UsernamePage;
