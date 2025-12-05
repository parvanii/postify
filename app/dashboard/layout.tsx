"use client";

import React, { useEffect } from "react";
import SideBar from "@/components/dashboard/SideBar";
import Topbar from "@/components/dashboard/TopBar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="flex min-h-screen">
      <SideBar />

      <div className="flex-1 md:pl-64">
        <Topbar />

        <main className="px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
