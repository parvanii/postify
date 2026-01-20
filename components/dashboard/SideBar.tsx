"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import UsageTrack from "./UsageTrack";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });



type IconKey = "home" | "history" | "billing" | "settings";

interface SidebarLink {
  label: string;
  href: string;
  icon: IconKey;
}



const icons: Record<IconKey, JSX.Element> = {
  home: (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.6">
      <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" />
    </svg>
  ),

  history: (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.6">
      <path d="M21 12a9 9 0 1 1-2.6-6.1L21 5" />
      <path d="M12 7v6l4 2" />
    </svg>
  ),

  billing: (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.6">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </svg>
  ),

  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="1.6">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M19.4 15.1c.2.5.3 1 .1 1.5-.3.7-.8 1.2-1.5 1.5-.5.2-1 .1-1.5-.1-.4-.2-.9-.1-1.2.2-.4.3-.7.7-.9 1.2-.2.5-.7.8-1.3.8s-1.1-.3-1.3-.8c-.2-.5-.5-.9-.9-1.2-.3-.3-.8-.4-1.2-.2-.5.2-1 .3-1.5.1-.7-.3-1.2-.8-1.5-1.5-.2-.5-.1-1 .1-1.5.2-.4.1-.9-.2-1.2.3-.4.7-.7 1.2-.9.5-.2.8-.7.8-1.3s-.3-1.1-.8-1.3c-.5-.2-.9-.5-1.2-.9-.3-.3-.4-.8-.2-1.2-.2-.5-.3-1-.1-1.5.3-.7.8-1.2 1.5-1.5.5-.2 1-.1 1.5.1.4.2.9.1 1.2-.2.4-.3.7-.7.9-1.2.2-.5.7-.8 1.3-.8s1.1.3 1.3.8c.2.5.5.9.9 1.2.3.3.8.4 1.2.2.5-.2 1-.3 1.5-.1.7.3 1.2.8 1.5 1.5.2.5.1 1-.1 1.5.2.4.1.9-.2 1.2.3.4.7.7 1.2.9.5.2.8.7.8 1.3s-.3 1.1-.8 1.3c-.5.2-.9.5-1.2.9-.3.3-.4.8-.2 1.2z" />
    </svg>
  ),
};



const SideBar = () => {
  const pathname = usePathname();

  const links: SidebarLink[] = [
    { label: "Home", href: "/", icon: "home" },
    { label: "History", href: "/dashboard/history", icon: "history" },
    { label: "Billing", href: "/dashboard/billing", icon: "billing" },
    { label: "Settings", href: "/dashboard/settings", icon: "settings" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#5523E8] text-white z-50 hidden md:flex flex-col">
      <div className="px-6 pt-6 pb-3 flex items-center gap-3">
        <Image src="/logo.png" alt="logo" width={44} height={44} />
        <span className={`${inter.className} font-bold text-xl`}>
          Postify
        </span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">
        {links.map((item) => {
          const active = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition ${
                  active ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                {icons[item.icon]}
                <span className={`${inter.className} text-base font-medium`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-6">
        <UsageTrack />
      </div>
    </aside>
  );
};

export default SideBar;
