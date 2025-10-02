import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// --- Define your route matchers ---
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)", // Make all webhook routes public
]);

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/stories(.*)",
  "/settings(.*)",
]);

export default clerkMiddleware((auth, req: NextRequest) => {
  // --- 1. Handle Authentication for Protected Routes ---
  if (isProtectedRoute(req)) {
    auth.protect();
  }

  // --- 2. Skip Prisma checks here (Edge cannot run Prisma) ---

  // --- 3. Handle CORS ---
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204, headers: res.headers });
  }

  return res;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
