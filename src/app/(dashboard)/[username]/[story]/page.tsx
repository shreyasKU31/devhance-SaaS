// app/[username]/[slug]/page.tsx
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { User, Code, Award, ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

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
 * Shows dashboard layout if logged in, blog layout if not.
 */
const StoryPage = async ({ params }: StoryPageProps) => {
  // 1. Check authentication status
  let userId, isLoggedIn, username, slug, author, story, content;
  try {
    ({ userId } = await auth());
    isLoggedIn = !!userId;
    ({ username, slug } = await params);
    author = await db.user.findUnique({ where: { username } });
    if (!author) notFound();
    story = await db.story.findFirst({
      where: {
        authorId: author.id,
        slug: slug,
        isPublished: true,
      },
    });
    if (!story) notFound();
    content = story.content as {
      what?: string;
      when?: string;
      why?: string;
      how?: string;
      userBenefit?: string;
    };
  } catch (e) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Error loading story</h2>
        <p className="text-gray-400 mb-4">This story could not be loaded. It may not exist or there was a server error.</p>
        <a href="/" className="text-indigo-500 underline">Go Home</a>
      </div>
    );
  }
  // ...existing code...
  // (rest of the file remains unchanged)
  // ...existing code...
  // (all rendering logic below remains unchanged)

  // 6. Handle techStack - it's a string in the schema, so we need to split it
  const techStackArray = story.techStack
    ? story.techStack.split(",").map((tech) => tech.trim())
    : [];

  // Conditional wrapper class based on login status
  const containerClass = isLoggedIn
    ? "bg-[var(--bg)] text-slate-100" // Dashboard style
    : "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"; // Blog style

  return (
    <div className={`${containerClass} font-['Lexend']`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Back Button - Different destination based on login status */}
        <div className="mb-12">
          <a
            href={isLoggedIn ? "/dashboard" : "/"}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {isLoggedIn ? "Dashboard" : "Home"}</span>
          </a>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          {/* Author Info Card */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-2xl blur-xl"></div>
            <div className="relative backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50">
              <div className="flex items-center gap-4">
                {author.imageUrl && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full blur-md opacity-60"></div>
                    <Image
                      src={author.imageUrl}
                      alt={author.username || "Author"}
                      width={50}
                      height={50}
                      className="relative rounded-full border-2 border-slate-700/50"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold font-['Syne'] text-white mb-1">
                    {author.username}
                  </h2>
                  <p className="text-sm text-slate-400">
                    Published on{" "}
                    {new Date(story.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Title */}
          <div>
            {content.when && (
              <p className="font-['Lexend'] text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 uppercase tracking-wider mb-3 font-semibold">
                {content.when}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold font-['Syne'] text-white leading-tight">
              {story.title}
            </h1>
          </div>
        </header>

        {/* Cover Image */}
        {story.projectImage && (
          <div className="mb-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50">
              <img
                src={story.projectImage}
                alt={story.title}
                className="m-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Story Content */}
        <main className="space-y-10 mb-16">
          {content.what && (
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/5 via-transparent to-transparent rounded-2xl"></div>
              <div className="relative">
                <h2 className="flex items-center gap-3 font-['Syne'] text-xl font-bold text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center border border-purple-400/30">
                    <User className="w-5 h-5 text-purple-400" />
                  </div>
                  <span>
                    What?{" "}
                    <span className="text-slate-500 font-normal text-lg">
                      (The Project)
                    </span>
                  </span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg pl-[52px]">
                  {content.what}
                </p>
              </div>
            </section>
          )}

          {content.why && (
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/5 via-transparent to-transparent rounded-2xl"></div>
              <div className="relative">
                <h2 className="flex items-center gap-3 font-['Syne'] text-2xl font-bold text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center border border-cyan-400/30">
                    <User className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span>
                    Why?{" "}
                    <span className="text-slate-500 font-normal text-lg">
                      (The Problem)
                    </span>
                  </span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg pl-[52px]">
                  {content.why}
                </p>
              </div>
            </section>
          )}

          {content.how && (
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/5 via-transparent to-transparent rounded-2xl"></div>
              <div className="relative">
                <h2 className="flex items-center gap-3 font-['Syne'] text-2xl font-bold text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/20 to-green-600/20 flex items-center justify-center border border-green-400/30">
                    <Code className="w-5 h-5 text-green-400" />
                  </div>
                  <span>
                    How?{" "}
                    <span className="text-slate-500 font-normal text-lg">
                      (The Solution)
                    </span>
                  </span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg pl-[52px]">
                  {content.how}
                </p>
              </div>
            </section>
          )}

          {content.userBenefit && (
            <section className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/5 via-cyan-400/5 to-green-400/5 rounded-2xl"></div>
              <div className="relative">
                <h2 className="flex items-center gap-3 font-['Syne'] text-2xl font-bold text-white mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400/20 via-cyan-400/20 to-green-400/20 flex items-center justify-center border border-purple-400/30">
                    <Award
                      className="w-5 h-5 bg-clip-text bg-gradient-to-r from-purple-400 to-green-400"
                      style={{ fill: "url(#gradient)" }}
                    />
                  </div>
                  <span>The Impact</span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg pl-[52px]">
                  {content.userBenefit}
                </p>
              </div>
            </section>
          )}
        </main>

        {/* Tech Stack */}
        {techStackArray.length > 0 && (
          <section className="mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-cyan-400/10 to-green-400/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/50">
                <h2 className="text-2xl font-bold font-['Syne'] text-white mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-8 bg-gradient-to-b from-purple-400 via-cyan-400 to-green-400 rounded-full"></span>
                  Tech Stack & Tools
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techStackArray.map((tech, index) => (
                    <span
                      key={index}
                      className="relative group px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 text-sm font-medium rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-400/20"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-cyan-400/0 to-green-400/0 group-hover:from-purple-400/10 group-hover:via-cyan-400/10 group-hover:to-green-400/10 rounded-lg transition-all"></span>
                      <span className="relative">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="pt-8">
          <a
            href={`/${username}`}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 brand text-white rounded-xl font-semibold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-400/50 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></span>
            <span className="relative">
              View more projects by {author.firstName || author.username}
            </span>
            <ExternalLink className="relative w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* SEO Enhancement */}
      <div className="sr-only">
        <h1>
          {story.title} by {author.username}
        </h1>
        <p>Published on {new Date(story.createdAt).toLocaleDateString()}</p>
        <p>Tech Stack: {techStackArray.join(", ")}</p>
      </div>
    </div>
  );
};

export default StoryPage;
