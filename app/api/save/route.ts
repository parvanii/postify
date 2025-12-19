import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API /api/save incoming body:", JSON.stringify(body));
    const { formData, slug, aiResp, userEmail, createdAt } = body ?? {};

    if (!aiResp) {
      return NextResponse.json({ error: "aiResp required" }, { status: 400 });
    }

    const created = await prisma.aIOutput.create({
      data: {
        formData: typeof formData === "string" ? formData : JSON.stringify(formData),
        templateSlug: slug ?? "",
        aiResponse: aiResp,
        createdBy: userEmail ?? "",
        createdAt: createdAt ?? new Date().toISOString(),
      },
    });

    return NextResponse.json({ success: true, created });
  } catch (err: unknown) {
    let message = "Unknown error";

    if (err instanceof Error) {
      message = err.message;
    }

    console.error("API /api/save error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
