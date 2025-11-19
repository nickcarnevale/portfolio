import TextType from "@/animations/TextType";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-6 text-white"> 
      <TextType
        text={["Enter if you must."]}
        typingSpeed={70}
        pauseDuration={5000}
        showCursor={true}
        cursorCharacter="|"               
        className="text-6xl font-bold"
        loop={true}
      />
      {/* Navigation Button */}
      <Link
        href="/explorer"
        className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 
                  rounded-lg text-white border border-white/30
                  backdrop-blur-sm transition"
      >
        Enter
      </Link>
    </main>
  );
}
