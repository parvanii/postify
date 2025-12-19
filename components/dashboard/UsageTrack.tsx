"use client";

import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

export default function UsageTrack() {
  const { user, isLoaded } = useUser();

  const totalUsageCtx = useContext(TotalUsageContext);
  const userSubscriptionCtx = useContext(UserSubscriptionContext);
  const updateCreditUsageCtx = useContext(UpdateCreditUsageContext);

  const [maxWords, setMaxWords] = useState(10_000);
  const [loading, setLoading] = useState(true);

  const totalUsage = totalUsageCtx?.totalUsage ?? 0;
  const setTotalUsage = totalUsageCtx?.setTotalUsage;
  const userSubscription = userSubscriptionCtx?.userSubscription ?? false;
  const setUserSubscription = userSubscriptionCtx?.setUserSubscription;
  const updateCreditUsage = updateCreditUsageCtx?.updateCreditUsage ?? 0;

 
  useEffect(() => {
    setMaxWords(userSubscription ? 1_000_000 : 10_000);
  }, [userSubscription]);


  useEffect(() => {
    if (!isLoaded || !user) return;
    fetchUsage();
  }, [isLoaded, user, updateCreditUsage]);

  async function fetchUsage() {
    setLoading(true);
    try {
      const res = await fetch("/api/usage");
      const data = await res.json();

      setTotalUsage?.(Number(data.totalUsage ?? 0));
      setUserSubscription?.(Boolean(data.isSubscribed));
    } catch (err) {
      console.error("Failed to fetch usage:", err);
    } finally {
      setLoading(false);
    }
  }

  
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
            style={{
              width: `${Math.min(100, (totalUsage / maxWords) * 100)}%`,
            }}
          />
        </div>

        <h2 className="text-sm my-2">
          {loading
            ? "Loading…"
            : `${totalUsage}/${maxWords} credits used`}
        </h2>
      </div>

      <Button className="w-full my-3 bg-[#E823B6]">Upgrade</Button>
    </div>
  );
}
