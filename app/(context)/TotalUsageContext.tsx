"use client";
import { createContext } from "react";

export type TotalUsageType = {
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
};

export const TotalUsageContext = createContext<TotalUsageType | null>(null);
