// app/(context)/UpdateCreditUsageContext.tsx
import { createContext } from "react";

export type UpdateCreditUsageContextType = {
  updateCreditUsage: number;
  setUpdateCreditUsage: (n: number) => void;
} | null;

export const UpdateCreditUsageContext =
  createContext<UpdateCreditUsageContextType>(null);
