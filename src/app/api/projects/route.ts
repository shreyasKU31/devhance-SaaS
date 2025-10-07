import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }
    // Find the user by clerkId to get the MongoDB ObjectId
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    // Find all stories for this user
    const stories = await db.story.findMany({
      where: { authorId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, stories });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Get the current user's Clerk ID from the server-side auth
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }
    // Find the user by clerkId to get the MongoDB ObjectId
    const user = await db.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }
    const story = await db.story.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: {
          what: data.what,
          when: data.when,
          why: data.why,
          how: data.how,
          userBenefit: data.userBenefit,
        },
        projectImage: data.projectImage,
        techStack: data.techStack,
        isPublished: data.isPublished ?? false,
        authorId: user.id, // Use the MongoDB ObjectId
      },
    });
    return NextResponse.json({ success: true, story });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
