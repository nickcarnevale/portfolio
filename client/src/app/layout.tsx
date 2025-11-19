import "./globals.css";
import type { Metadata } from "next";
import LetterGlitch from "@/components/background/LetterGlitch";
import Squares from "@/components/background/Squares";

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
          glitchSpeed={70}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        >
          {children}
        </LetterGlitch>

        {/* <Squares 
        speed={0.3} 
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#e4dcbaff'
        hoverFillColor='#222'
        >
          {children}
        </Squares > */}

      </body>
    </html>
  );
}
