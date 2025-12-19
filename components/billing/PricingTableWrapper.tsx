"use client";

import { PricingTable } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function PricingTableWrapper() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative"
    >

      <div
        className="rounded-2xl shadow-xl p-6 md:p-8"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
  
        <div
          className="h-2 rounded-t-2xl -mt-6 mb-6"
          style={{ background: "#5523E8" }}
        />

     
        <PricingTable
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "rounded-xl border border-gray-200 shadow-none",
              headerTitle: "text-xl font-bold text-gray-900",
              headerSubtitle: "text-gray-600",
              price: "text-3xl font-extrabold text-gray-900",
              interval: "text-sm text-gray-500",
              featureListItem: "text-gray-700",
              button:
                "rounded-full px-6 py-3 font-semibold transition hover:opacity-90",
            },
            variables: {
              colorPrimary: "#5523E8",
              colorText: "#111827",
              colorBackground: "#FFFFFF",
              borderRadius: "12px",
            },
          }}
        />
      </div>
    </motion.div>
  );
}
