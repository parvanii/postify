// app/api/generate/route.ts
import { NextResponse } from "next/server";
import { generateWithOpenRouter } from "@/app/utils/openrouter";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    console.log("API /generate called. prompt length:", (prompt || "").length);
    console.log("OPENROUTER_API_KEY present? ->", !!process.env.OPENROUTER_API_KEY);
    console.log("OPENROUTER_API_KEY (first 8 chars):", (process.env.OPENROUTER_API_KEY || "").slice(0, 8));

    const text = await generateWithOpenRouter(prompt);
    return NextResponse.json({ text });
  } catch (err: any) {
   
    console.error("OpenRouter Error (server):", err?.message ?? err);
    console.error("Error stack:", err?.stack);
    console.error("Error body/details:", err?.body ?? null);
    const status = err?.status || 500;
    return NextResponse.json({ error: "fetch failed", details: err?.body ?? null }, { status });
  }
}
