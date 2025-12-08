// app/api/usage/route.ts
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    const userEmail =
      (user as any)?.primaryEmailAddress?.emailAddress ||
      (user as any)?.email ||
      (user as any)?.emailAddresses?.[0]?.emailAddress ||
      null;

    if (!userEmail) {
      return NextResponse.json({ error: "No user email found" }, { status: 400 });
    }

    // sum total characters (or words) used in aiResponse; choose characters length as "credits"
    const rows = await prisma.aIOutput.findMany({
      where: { createdBy: userEmail },
      select: { aiResponse: true },
    });

    const totalUsage = rows.reduce((acc, r) => acc + (r.aiResponse?.length ?? 0), 0);

    // check subscription
    const sub = await prisma.userSubscription.findFirst({
      where: { email: userEmail },
    });

    const isSubscribed = Boolean(sub);
    const maxWords = isSubscribed ? 1_000_000 : 10_000;

    return NextResponse.json({ totalUsage, isSubscribed, maxWords });
  } catch (err: any) {
    console.error("API /api/usage error:", err);
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
