import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4">
      <h1 className="text-2xl font-semibold text-white">404 - Page Not Found</h1>
      <p className="mt-2 text-slate-400">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-gradient-to-r from-violet-500 to-blue-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        Go to Home
      </Link>
    </div>
  );
}
