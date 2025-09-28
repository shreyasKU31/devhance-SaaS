// lib/db.ts
import { PrismaClient } from "@prisma/client";

// This declaration is for TypeScript to recognize the global `prisma` variable.
declare global {
  var prisma: PrismaClient | undefined;
}

// This line prevents creating new PrismaClient instances during hot-reloads in development.
// It checks if a prisma instance already exists on the global object. If not, it creates one.
export const db = globalThis.prisma || new PrismaClient();

// In non-production environments, we assign the instance to the global object.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
