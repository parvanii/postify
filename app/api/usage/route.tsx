import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const userEmail =
      user.primaryEmailAddress?.emailAddress ??
      user.emailAddresses?.[0]?.emailAddress ??
      null;

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    const rows = await prisma.aIOutput.findMany({
      where: { createdBy: userEmail },
      select: { aiResponse: true },
    });

    const totalUsage = rows.reduce(
      (sum, r) => sum + (r.aiResponse?.length ?? 0),
      0
    );

    const subscription = await prisma.userSubscription.findFirst({
      where: { email: userEmail },
    });

    return NextResponse.json({
      totalUsage,
      isSubscribed: Boolean(subscription),
      maxWords: subscription ? 1_000_000 : 10_000,
    });
  } catch (err: unknown) {
    let message = "Unknown error";

    if (err instanceof Error) {
      message = err.message;
    }

    console.error("API /api/usage error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
