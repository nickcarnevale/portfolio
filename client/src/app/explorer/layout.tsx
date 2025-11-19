// src/app/explorer/layout.tsx
import type { Metadata } from "next";
import Squares from "@/components/background/Squares";


export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-[#020103] text-white">
      <Squares 
        speed={0.3} 
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#e4dcbaff'
        hoverFillColor='#222'
        >
          {children}
        </Squares >
    </div>
  );
}
