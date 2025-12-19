"use client";

import { useEffect, useState } from "react";
import { TotalUsageContext } from "./TotalUsageContext";
import { UserSubscriptionContext } from "./UserSubscriptionContext";
import { UpdateCreditUsageContext } from "./UpdateCreditUsageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [totalUsage, setTotalUsage] = useState(0);
  const [userSubscription, setUserSubscription] = useState(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState(0);

  useEffect(() => {
    setUpdateCreditUsage(Date.now());
  }, []);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsageContext.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          {children}
        </UpdateCreditUsageContext.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
}
