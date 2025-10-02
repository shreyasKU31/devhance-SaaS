import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - User Not Found</h1>
      <p className="mt-4">Sorry, a user with that name does not exist.</p>
      <Link href="/" className="mt-6 text-blue-500">
        Go back home
      </Link>
    </div>
  );
}
