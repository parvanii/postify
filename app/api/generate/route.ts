import { NextResponse } from "next/server";
import { generateWithOpenRouter } from "@/app/utils/openrouter";

type OpenRouterError = Error & {
  status?: number;
  body?: unknown;
};

function isOpenRouterError(err: unknown): err is OpenRouterError {
  return err instanceof Error;
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    console.log(
      "API /generate called. prompt length:",
      (prompt || "").length
    );
    console.log(
      "OPENROUTER_API_KEY present? ->",
      !!process.env.OPENROUTER_API_KEY
    );
    console.log(
      "OPENROUTER_API_KEY (first 8 chars):",
      (process.env.OPENROUTER_API_KEY || "").slice(0, 8)
    );

    const text = await generateWithOpenRouter(prompt);
    return NextResponse.json({ text });

  } catch (err: unknown) {
    let message = "Unknown error";
    let body: unknown = null;
    let status = 500;

    if (isOpenRouterError(err)) {
      message = err.message;
      body = err.body ?? null;
      status = err.status ?? 500;
    }

    console.error("OpenRouter Error (server):", message);
    console.error("Error stack:", err instanceof Error ? err.stack : null);
    console.error("Error body/details:", body);

    return NextResponse.json(
      { error: "fetch failed", details: body },
      { status }
    );
  }
}



