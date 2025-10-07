"use server"; // This directive marks all functions in this file as Server Actions

import { useAuth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { StoryFormData } from "@/interfaces/formData";

/**
 * Server Action to create a new project story in the database.
 */
export async function createStory(formData: StoryFormData) {
  // 1. Authenticate the user on the server
  const { userId } = useAuth();
  if (!userId) {
    throw new Error("You must be logged in to create a story.");
  }

  // 2. Find the user in your own database to get their primary key
  const user = await db.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user) {
    throw new Error("User not found in database.");
  }

  // 3. Validate the incoming data (basic validation for now)
  const {
    title,
    slug,
    what,
    when,
    why,
    how,
    userBenefit,
    techStack,
    projectImage,
    isPublished,
  } = formData;
  if (!title || !slug) {
    throw new Error("Title and slug are required.");
  }

  // 4. Use Prisma to create the new story in your MongoDB database
  try {
    await db.story.create({
      data: {
        title,
        slug,
        projectImage,
        techStack,
        isPublished,
        authorId: user.id, // Link the story to the user
        // Consolidate narrative fields into a single JSON object
        content: {
          what,
          when,
          why,
          how,
          userBenefit,
        },
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create the story in the database.");
  }

  // 5. Revalidate paths to clear the cache and show the new data
  revalidatePath("/dashboard"); // Refresh the dashboard to show the new story card

  // 6. Redirect the user back to their dashboard
  redirect("/dashboard");
}
