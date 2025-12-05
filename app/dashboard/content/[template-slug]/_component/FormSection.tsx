"use client";

import React, { useMemo, useState } from "react";
import { TEMPLATE } from "@/components/dashboard/workspace/TemplateListSection";
import Image from "next/image";

interface Props {
  selectedTemplate?: TEMPLATE;
  onGenerate?: (formValues: any) => void;
}

const tones = ["Polite", "Witty", "Enthusiastic", "Friendly", "Informational", "Funny", "Formal"];

export default function FormSection({ selectedTemplate, onGenerate }: Props) {
  const [prompt, setPrompt] = useState("");
  const [selectedTone, setSelectedTone] = useState<string>("Polite");
  const [approxWords, setApproxWords] = useState<number>(35);
  const [generateHashtags, setGenerateHashtags] = useState(false);
  const [includeEmoji, setIncludeEmoji] = useState(false);
  const [postsToGenerate, setPostsToGenerate] = useState<number>(3);
  const [isLoading, setIsLoading] = useState(false);

  const formValues = useMemo(
    () => ({
      prompt,
      tone: selectedTone,
      approxWords,
      generateHashtags,
      includeEmoji,
      postsToGenerate,
      templateSlug: selectedTemplate?.slug ?? null,
    }),
    [prompt, selectedTone, approxWords, generateHashtags, includeEmoji, postsToGenerate, selectedTemplate]
  );

  const handleGenerate = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!onGenerate) return;

    setIsLoading(true);
    await onGenerate(formValues);
    setIsLoading(false);
  };

  return (
    <aside
      className="p-6 rounded-xl shadow-md border text-white"
      style={{
        background: "#5523E8",
        width: "100%", 
        height: "98vh",
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
         
          {selectedTemplate?.icon ? (
            <Image src={selectedTemplate.icon} alt="icon" width={40} height={40} className="object-contain" />
          ) : (
            <div className="w-8 h-8" />
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {selectedTemplate?.name ?? "Create content"}
          </h3>
        </div>
      </div>

     
      <form onSubmit={handleGenerate}>
        <div className="mb-4">
          <label className="font-medium mb-2 block text-white">Your prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt here..."
            className="w-full min-h-[120px] rounded-lg p-3 bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="font-medium mb-2 block text-white">Tone of voice</label>

          <div className="flex flex-wrap gap-3">
            {tones.map((tone) => {
              const active = tone === selectedTone;
              return (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  type="button"
                  className={`px-4 py-2 rounded-md border text-sm transition ${active ? "text-white" : "text-white/70"}`}
                  style={{
                    background: active ? "#E823B6" : "transparent",
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  {tone}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="font-medium text-white">Approximate words</label>
            <input
              type="number"
              min={5}
              max={200}
              value={approxWords}
              onChange={(e) => setApproxWords(Number(e.target.value))}
              className="w-20 rounded-md bg-white/20 border border-white/30 px-2 py-1 text-white"
            />
          </div>

          <input
            type="range"
            min={5}
            max={200}
            value={approxWords}
            onChange={(e) => setApproxWords(Number(e.target.value))}
            className="w-full h-2 rounded-lg"
            style={{
              accentColor: "#B6E723",
            }}
          />
        </div>

        <div className="mb-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-white">Generate hashtags</span>
            <input
              type="checkbox"
              checked={generateHashtags}
              onChange={(e) => setGenerateHashtags(e.currentTarget.checked)}
              className="h-4 w-4 accent-[#B6E723]"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white">Include emoji</span>
            <input
              type="checkbox"
              checked={includeEmoji}
              onChange={(e) => setIncludeEmoji(e.currentTarget.checked)}
              className="h-4 w-4 accent-[#B6E723]"
            />
          </div>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <label className="font-medium text-white">Posts to generate</label>
          <input
            type="number"
            min={1}
            max={10}
            value={postsToGenerate}
            onChange={(e) => setPostsToGenerate(Number(e.target.value))}
            className="w-20 rounded-md bg-white/20 border border-white/30 px-2 py-1 text-white"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            isLoading || !prompt.trim() ? "bg-white/30 text-white/40 cursor-not-allowed" : "bg-white text-black hover:bg-white/90"
          }`}
        >
          {isLoading ? "Generating..." : "Generate"}
        </button>
      </form>
    </aside>
  );
}
