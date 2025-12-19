export interface OpenRouterChoice {
  message?: {
    content?: string;
  };
  text?: string;
}

export interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
}

export async function generateWithOpenRouter(
  prompt: string,
  model = "meta-llama/llama-3-8b-instruct"
): Promise<string> {
  const url = "https://openrouter.ai/api/v1/chat/completions";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  const text = await res.text();

  if (!res.ok) {
    const err = new Error(`OpenRouter ${res.status}: ${text}`) as Error & { status?: number; body?: string };
    err.status = res.status;
    err.body = text;
    throw err;
  }

  let data: OpenRouterResponse;
  try {
    data = JSON.parse(text) as OpenRouterResponse;
  } catch {
    throw new Error(`OpenRouter returned non-json: ${text}`);
  }

  const content =
    data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? "";

  return content;
}
