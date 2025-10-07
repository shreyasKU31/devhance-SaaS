import Link from "next/link";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function StoryListPage() {
  let stories;
  try {
    stories = await db.story.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (e) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-2">
          Error loading stories
        </h2>
        <p className="text-gray-400 mb-4">Please try again later.</p>
        <Link href="/" className="text-indigo-500 underline">
          Go Home
        </Link>
      </div>
    );
  }
  if (!stories || stories.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold mb-2">No Stories Found</h2>
        <p className="text-gray-400 mb-4">
          There are no published stories yet. Be the first to share your
          project!
        </p>
        <Link
          href="/story/new"
          className="brand py-2 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Create new story +
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Stories</h1>
        <Link
          href="/story/new"
          className="brand py-2 px-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Create new story +
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={`/${story.authorId}/${story.slug || story.id}`}
            className="block p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {story.title}
            </h3>
            <p className="text-gray-400 text-sm mb-1">{story.slug}</p>
            <p className="text-xs text-gray-500">
              {new Date(story.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
