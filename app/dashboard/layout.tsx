"use client";

import SideBar from "@/components/dashboard/SideBar";
import Topbar from "@/components/dashboard/TopBar";
import Providers from "@/app/(context)/Providers";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null;

  return (
    <Providers>
      <div className="flex min-h-screen">
        <SideBar />

        <div className="flex-1 md:pl-64">
          <Topbar />
          <main className="px-6 py-6">{children}</main>
        </div>
      </div>
    </Providers>
  );
}
