// app/[username]/[slug]/page.tsx
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, Code, Award } from "lucide-react";

// This interface defines the shape of the props for our page
interface StoryPageProps {
  params: Promise<{
    username: string;
    slug: string;
  }>;
}

/**
 * This is the public-facing page that displays a single, published project story.
 * It's a Server Component, so it can fetch data directly from the database.
 */
const StoryPage = async ({ params }: StoryPageProps) => {
  // 1. Await params (required in Next.js 15+)
  const { username, slug } = await params;

  // 2. Find the author by their username first. This is a robust pattern.
  const author = await db.user.findUnique({
    where: { username },
  });

  // If the author doesn't exist, the story can't exist. Show a 404 page.
  if (!author) {
    notFound();
  }

  // 3. Find the story using the author's ID and the story's slug.
  const story = await db.story.findFirst({
    where: {
      authorId: author.id,
      slug: slug,
      isPublished: true, // Only show published stories
    },
  });

  // If no story is found, show a 404 page.
  if (!story) {
    notFound();
  }

  // 4. Safely parse the JSON content from the database.
  const content = story.content as {
    what?: string;
    when?: string;
    why?: string;
    how?: string;
    userBenefit?: string;
  };

  // 5. Handle techStack - it's a string in the schema, so we need to split it
  const techStackArray = story.techStack
    ? story.techStack.split(",").map((tech) => tech.trim())
    : [];

  return (
    <div className="bg-white font-['Lexend'] text-neutral-800">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* --- Header --- */}
        <header className="mb-8 pb-8 border-b border-neutral-200">
          <Link
            href="/"
            className="text-sm text-purple-600 hover:text-purple-800 mb-6 inline-block"
          >
            ← Back to DevHance Home
          </Link>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {author.imageUrl && (
              <Image
                src={author.imageUrl}
                alt={author.username || "Author"}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h2 className="text-xl font-bold font-['Syne']">
                {author.username}
              </h2>
              <p className="text-sm text-neutral-500">
                Published on{" "}
                {new Date(story.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Story Title */}
          {content.when && (
            <p className="font-['Lexend'] text-sm text-neutral-500 uppercase tracking-wider mt-8">
              {content.when}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold font-['Syne'] mt-2">
            {story.title}
          </h1>
        </header>

        {/* --- Cover Image --- */}
        {story.projectImage && (
          <div className="my-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={story.projectImage}
              alt={story.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* --- Story Content --- */}
        <main className="space-y-12 prose prose-lg max-w-none">
          {content.what && (
            <section>
              <h2 className="flex items-center gap-2 font-['Syne']">
                <User className="text-purple-500" /> What? (The Project)
              </h2>
              <p>{content.what}</p>
            </section>
          )}

          {content.why && (
            <section>
              <h2 className="flex items-center gap-2 font-['Syne']">
                <User className="text-purple-500" /> Why? (The Problem)
              </h2>
              <p>{content.why}</p>
            </section>
          )}

          {content.how && (
            <section>
              <h2 className="flex items-center gap-2 font-['Syne']">
                <Code className="text-cyan-500" /> How? (The Solution)
              </h2>
              <p>{content.how}</p>
            </section>
          )}

          {content.userBenefit && (
            <section>
              <h2 className="flex items-center gap-2 font-['Syne']">
                <Award className="text-green-500" /> The Impact
              </h2>
              <p>{content.userBenefit}</p>
            </section>
          )}
        </main>

        {/* --- Tech Stack --- */}
        {techStackArray.length > 0 && (
          <section className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-bold font-['Syne'] mb-4">
              Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStackArray.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-100 text-neutral-700 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* --- Back to Profile CTA --- */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href={`/${username}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            View more projects by {author.firstName || author.username}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
