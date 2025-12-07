// utils/openrouter.ts
export async function generateWithOpenRouter(prompt: string, model = "meta-llama/llama-3-8b-instruct") {
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
  
    const text = await res.text(); // read raw body for better diagnostics
  
    if (!res.ok) {
      // include status and body for server logs / client
      const err = new Error(`OpenRouter ${res.status}: ${text}`);
      (err as any).status = res.status;
      (err as any).body = text;
      throw err;
    }
  
    // parse JSON safely
    let data: any;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error(`OpenRouter returned non-json: ${text}`);
    }
  
    // canonical content location (adjust if model/provider differs)
    const content = data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? "";
    return String(content);
  }
  