"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

export default function UsageTrack() {
  const { user, isLoaded } = useUser();
  const { has } = useAuth();
  const router = useRouter();

  const totalUsageCtx = useContext(TotalUsageContext);
  const updateCreditUsageCtx = useContext(UpdateCreditUsageContext);

  const [maxWords, setMaxWords] = useState(10_000);
  const [loading, setLoading] = useState(true);

  const totalUsage = totalUsageCtx?.totalUsage ?? 0;
  const setTotalUsage = totalUsageCtx?.setTotalUsage ?? (() => {});
  const updateCreditUsage = updateCreditUsageCtx?.updateCreditUsage ?? 0;

  const hasPremiumAccess = has?.({ plan: "monthly" }) ?? false;

  useEffect(() => {
    setMaxWords(hasPremiumAccess ? 25_000 : 10_000);
  }, [hasPremiumAccess]);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const now = new Date();
    const currentMonth = now.getMonth();
    const storedMonth = Number(localStorage.getItem("usageMonth") ?? currentMonth);

    if (currentMonth !== storedMonth) {
      setTotalUsage(0);
      localStorage.setItem("usageMonth", String(currentMonth));
      localStorage.setItem("totalUsage", "0");
    } else {
      const storedUsage = Number(localStorage.getItem("totalUsage") ?? 0);
      setTotalUsage(storedUsage);
    }

    fetchUsage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user, updateCreditUsage]);

  async function fetchUsage() {
    setLoading(true);
    try {
      const res = await fetch("/api/usage");
      const data = await res.json();
      const usage = Number(data.totalUsage ?? 0);
      setTotalUsage(usage);
      localStorage.setItem("totalUsage", String(usage));
    } catch (err) {
      console.error("Failed to fetch usage:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleButtonClick = () => {
    router.push("/dashboard/billing");
  };

  if (!isLoaded) {
    return <div className="m-5 text-white">Loading…</div>;
  }

  return (
    <div className="m-5">
      <div className="bg-[#E823B6] text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>

        <div className="h-2 bg-white w-full rounded-full">
          <div
            className="h-2 bg-[#B6E723] rounded-full"
            style={{ width: `${Math.min(100, (totalUsage / maxWords) * 100)}%` }}
          />
        </div>

        <h2 className="text-sm my-2">
          {loading ? "Loading…" : `${totalUsage}/${maxWords} credits used`}
        </h2>
      </div>

      <Button
        className="w-full my-3 bg-[#E823B6]"
        onClick={handleButtonClick}
      >
        {hasPremiumAccess ? "Manage Plan" : "Upgrade"}
      </Button>
    </div>
  );
}
