"use client";

import React, { KeyboardEvent, useState } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Poppins, Manrope } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type Feature = {
  id: number;
  title: string;
  desc: string;
  tagColor: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "AI Content Generation",
    desc: "Create captions, scripts and blog drafts in seconds — give a topic and get ready to post.",
    tagColor: "#E823B6",
  },
  {
    id: 2,
    title: "Hashtag Creator",
    desc: "Auto-suggest hashtag groups tuned for reach and relevance.",
    tagColor: "#B6E723",
  },
  {
    id: 3,
    title: "Adjust Tone & Settings",
    desc: "Switch voice between friendly, bold, witty or professional with one click.",
    tagColor: "#5523E8",
  },
  {
    id: 4,
    title: "Authentication",
    desc: "Simple, secure sign-in to protect your workspace and drafts.",
    tagColor: "#E823B6",
  },
  {
    id: 5,
    title: "10,000 Credits / Month",
    desc: "A creator-friendly allotment so you can post every day with freedom.",
    tagColor: "#B6E723",
  },
  {
    id: 6,
    title: "Smart Suggestions",
    desc: "Alternative hooks, opening lines and short-form variations for fast testing.",
    tagColor: "#5523E8",
  },
];

export default function FeaturesPage() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onKeyFlip = (e: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip(id);
    }
  };

  
  const cardSurface = "linear-gradient(180deg,#6B47F8 0%, #5E3FEF 100%)";

  return (
    <>
      <Header />

      <main className="min-h-screen" style={{ backgroundColor: "#5523E8" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
       
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-1 text-left">
              <h1
                className={`${poppins.className} text-4xl md:text-5xl font-bold text-white`}
              >
                Features made for creators
              </h1>
              <p
                className={`${manrope.className} mt-3 text-lg text-white/90`}
              >
                Clear, simple tools to help you create better content — faster.
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5">
            </div>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => {
              const isFlipped = !!flipped[f.id];

              return (
                <div key={f.id} className="relative" style={{ perspective: 1200 }}>
                  <motion.div
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    onClick={() => toggleFlip(f.id)}
                    onKeyDown={(e) => onKeyFlip(e, f.id)}
                    className="relative w-full h-full cursor-pointer outline-none"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    style={{
                      transformStyle: "preserve-3d",
                      WebkitTransformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                 
                    <article
                      className="rounded-3xl p-8 shadow-2xl border border-transparent flex flex-col justify-center"
                      style={{
                        background: cardSurface,
                        minHeight: 220,
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        boxShadow: "0 20px 50px rgba(8,8,30,0.35)",
                        transition: "transform .22s ease, box-shadow .22s ease",
                      }}
                    >
                    
                      <div
                        aria-hidden
                        className="absolute top-0 left-0 right-0 h-3 rounded-t-3xl"
                        style={{ background: f.tagColor, opacity: 0.98 }}
                      />

                      <div className="relative z-10">
                        <h3
                          className={`${poppins.className} text-2xl font-bold`}
                          style={{ color: "#FFFFFF" }}
                        >
                          {f.title}
                        </h3>

                        <div className="mt-4">
                          <span
                            className={`${manrope.className} text-sm`}
                            style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}
                          >
                            Click to flip
                          </span>
                        </div>
                      </div>

                   
                      <style jsx>{`
                        article:hover {
                          transform: translateY(-6px) scale(1.02);
                        }
                      `}</style>
                    </article>

                  
                    <article
                      className="rounded-3xl p-8 border border-transparent absolute top-0 left-0 w-full"
                      style={{
                        background: cardSurface,
                        minHeight: 220,
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        boxShadow: "0 20px 50px rgba(8,8,30,0.35)",
                      }}
                    >
                      <div
                        aria-hidden
                        className="absolute top-0 left-0 right-0 h-3 rounded-t-3xl"
                        style={{ background: f.tagColor, opacity: 0.98 }}
                      />

                      <div className="relative z-10">
                        <h3
                          className={`${poppins.className} text-2xl font-bold`}
                          style={{ color: "#FFFFFF" }}
                        >
                          {f.title}
                        </h3>

                        <p
                          className={`${manrope.className} mt-4 text-sm leading-relaxed`}
                          style={{ color: "rgba(255,255,255,0.95)", fontWeight: 600 }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    </article>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
