import Link from "next/link";

export default function Explorer() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-5xl font-bold">Welcome to my explorer page</h1>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 
                  rounded-lg text-white border border-white/30
                  backdrop-blur-sm transition"
      >
        Back
      </Link>
    </main>
  );
}