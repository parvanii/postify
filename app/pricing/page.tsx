"use client";

import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Poppins, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "600"] });

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 18 },
  },
};

export default function PricingPage(){
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (isSignedIn) {
      router.push("/dashboard/billing");
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen" style={{ backgroundColor: "#5523E8" }}>
        <div className="max-w-5xl mx-auto px-6 py-20 text-white">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className={`${poppins.className} text-4xl md:text-5xl font-bold`}>
              Pricing
            </h1>
            <p className={`${manrope.className} mt-3 text-lg text-white/90`}>
  Simple plans for creators — start free and upgrade when you&apos;re ready.
</p>

          </motion.div>

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* BASIC */}
            <motion.div variants={cardVariant} whileHover={{ y: -6, scale: 1.02 }}>
              <div className="rounded-2xl p-8 shadow-xl bg-white min-h-[320px]">
                <div className="h-3 rounded-t-2xl -mt-6 mb-6 bg-[#E823B6]" />

                <h3 className={`${poppins.className} text-2xl font-bold text-gray-900`}>
                  Basic
                </h3>

                <p className={`${manrope.className} mt-3 text-gray-700`}>
                  Perfect to start creating — free and packed with value.
                </p>

                <ul className="mt-6 ml-4 list-disc text-sm text-gray-700 space-y-2">
                  <li><strong>10,000 credits</strong> per month</li>
                  <li><strong>Unlimited</strong> copy & download</li>
                  <li><strong>1 month</strong> history</li>
                  <li>Hashtag & tone suggestions</li>
                </ul>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClick}
                  className="mt-6 px-6 py-3 rounded-full font-semibold bg-[#5523E8] text-white"
                >
                  Get Basic
                </motion.button>
              </div>
            </motion.div>

           
            <motion.div variants={cardVariant} whileHover={{ y: -6, scale: 1.02 }}>
              <div className="rounded-2xl p-8 shadow-xl bg-white min-h-[320px]">
                <div className="h-3 rounded-t-2xl -mt-6 mb-6 bg-[#B6E723]" />

                <div className="flex items-center justify-between">
                  <h3 className={`${poppins.className} text-2xl font-bold text-gray-900`}>
                    Pro
                  </h3>
                  <div className={`${poppins.className} text-lg font-bold text-gray-900`}>
                    $12
                    <span className={`${manrope.className} text-sm font-medium`}>
                      {" "}
                      / month
                    </span>
                  </div>
                </div>

                <p className={`${manrope.className} mt-3 text-gray-700`}>
                  For power users and teams who need more generation and history.
                </p>

                <ul className="mt-6 ml-4 list-disc text-sm text-gray-700 space-y-2">
                  <li><strong>25,000 credits</strong> per month</li>
                  <li><strong>Unlimited</strong> copy & download</li>
                  <li><strong>1 year</strong> history</li>
                  <li>Priority generation</li>
                </ul>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClick}
                  className="mt-6 px-6 py-3 rounded-full font-semibold bg-[#E823B6] text-white"
                >
                  Start Pro
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <p className={`${manrope.className} text-sm text-white/80 mt-8`}>
            Need custom credits or team plans? Contact us anytime.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
