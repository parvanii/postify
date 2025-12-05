"use client";
import { Search } from "lucide-react";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
});

function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="p-10 flex flex-col justify-center items-center text-white rounded-xl"
      style={{ backgroundColor: "#5523E8" }}
    >
      <h2
        className={`${inter.className} text-3xl font-semibold mb-1`}
      >
        What would you like to create today?
      </h2>

      <p className="text-white/80 mb-5">
        Start by exploring templates or type your own prompt.
      </p>

      <div className="w-full flex justify-center">
        <div
          className="flex gap-3 items-center p-3 rounded-full bg-white w-[50%] 
          shadow-md border border-black/20"
        >
          <Search className="text-black w-5 h-5" />

          <input
            type="text"
            placeholder="Search templates..."
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black placeholder-black/60"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
