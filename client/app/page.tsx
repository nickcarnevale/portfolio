import TextType from "@/animations/TextType";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-6 text-white">
      <TextType
        text={["Nicholas Carnevale"]}     // typing text
        typingSpeed={60}                  // adjust typing speed
        pauseDuration={2000}              // pause before deleting or stopping
        showCursor={true}                 // blinking cursor
        cursorCharacter="|"               
        className="text-6xl font-bold"    // same styling as your <h1>
        loop={false}                      // only type once
      />
      {/* <p className="text-xl opacity-90">Full Stack Engineer</p> */}
    </main>
  );
}
