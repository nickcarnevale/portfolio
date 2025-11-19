import "./globals.css";
import type { Metadata } from "next";
import LetterGlitch from "@/components/background/LetterGlitch";
import TransitionWrapper from "@/components/background/transitions/TransitionWrapper";

export const metadata: Metadata = {
  title: "Nicholas Carnevale",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 w-full h-full">
        <LetterGlitch
          glitchSpeed={70}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        >
          <TransitionWrapper>{children}</TransitionWrapper>
        </LetterGlitch>
      </body>
    </html>
  );
}
