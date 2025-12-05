"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Topbar() {
  return (
    <header
      className="w-full bg-[#5523E8] sticky top-0 z-40 border-b border-white/20"
    >
      <div className="px-6 py-3 flex items-center justify-end">
        
      
        <div className="ml-4">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10", 
              },
            }}
          />
        </div>

      </div>
    </header>
  );
}
