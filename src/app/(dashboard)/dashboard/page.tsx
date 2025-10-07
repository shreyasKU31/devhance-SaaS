// app/(dashboard)/dashboard/page.tsx

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Suspense } from "react";

async function DashboardContent() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const user = await db.user.findUnique({
    where: { clerkId: userId },
    include: {
      stories: {
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Welcome back, {user?.firstName || "User"}!
          </p>
        </div>
        <Link href="/story/new">
          <button className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
            + New Story
          </button>
        </Link>
      </div>
      {/* Stories section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Your Stories</h2>
        {user.stories && user.stories.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.stories.map((story) => (
              <Link key={story.id} href={`/story/${story.slug || story.id}`}>
                <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors cursor-pointer">
                  <h3 className="text-xl font-bold text-white">
                    {story.title}
                  </h3>
                  <div className="mt-2">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        story.isPublished
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {story.isPublished ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">
                    {new Date(story.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-4 p-6 text-center border-2 border-dashed border-gray-600 rounded-lg">
            <h3 className="text-xl font-medium text-white">No stories yet.</h3>
            <p className="mt-1 text-sm text-gray-400">
              Ready to tell your first story?
            </p>
            <div className="mt-6">
              <Link href="/story/new">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Create your first story
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DashboardContent />
    </Suspense>
  );
}
