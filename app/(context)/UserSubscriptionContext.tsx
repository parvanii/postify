// app/(context)/UserSubscriptionContext.tsx
import { createContext } from "react";

export type UserSubscriptionContextType = {
  userSubscription: boolean;
  setUserSubscription: (v: boolean) => void;
} | null;

export const UserSubscriptionContext =
  createContext<UserSubscriptionContextType>(null);
