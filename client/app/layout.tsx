import "./globals.css";
import type { Metadata } from "next";
import LetterGlitch from "@/components/ui/LetterGlitch";

export const metadata: Metadata = {
  title: "Nicholas Carnevale's Portfolio",
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
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        >
          {children}
        </LetterGlitch>
      </body>
    </html>
  );
}
