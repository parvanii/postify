
"use client";

import React from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Image from "next/image";
import { Poppins, Manrope } from "next/font/google";
import { motion } from "framer-motion";

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
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 18 } },
};

export default function PricingPage(): JSX.Element {
  return (
    <>
      <Header />

      <main className="min-h-screen" style={{ backgroundColor: "#5523E8" }}>
        <div className="max-w-5xl mx-auto px-6 py-20 text-white">
        
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-8 mb-12"
          >
            <div className="flex-1">
              <h1 className={`${poppins.className} text-4xl md:text-5xl font-bold`}>
                Pricing
              </h1>
              <p className={`${manrope.className} mt-3 text-lg text-white/90`}>
                Simple plans for creators — start free and upgrade when you're ready.
              </p>
            </div>
          </motion.div>

         
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
        
            <motion.div
              variants={cardVariant}
              className="relative"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  minHeight: 300,
                }}
              >
                <div
                  className="h-3 rounded-t-2xl -mt-6 mb-6"
                  style={{ background: "#E823B6" }}
                />

                <h3 className={`${poppins.className} text-2xl font-bold text-gray-900`}>
                  Basic
                </h3>

                <p className={`${manrope.className} mt-3 text-gray-700`}>
                  Perfect to start creating — free and packed with value.
                </p>

                <div className="mt-6">
                  <div className={`${poppins.className} text-3xl font-extrabold text-gray-900`}>
                    Free
                  </div>
                  <div className={`${manrope.className} mt-2 text-sm text-gray-600`}>
                    Includes:
                  </div>

                  <ul className="mt-3 ml-4 list-disc text-sm text-gray-700 space-y-2">
                    <li><strong>10,000 credits</strong> per month</li>
                    <li><strong>Unlimited</strong> download & copy</li>
                    <li><strong>1 month</strong> of history</li>
                    <li>Hashtag suggestions & tone adjustments</li>
                  </ul>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-3 rounded-full font-semibold"
                    style={{
                      backgroundColor: "#5523E8",
                      color: "#FFFFFF",
                      border: "2px solid rgba(0,0,0,0.06)",
                    }}
                    aria-label="Get Basic"
                  >
                    Get Basic
                  </motion.button>
                </div>
              </div>
            </motion.div>

           
            <motion.div
              variants={cardVariant}
              className="relative"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  minHeight: 300,
                }}
              >
                <div
                  className="h-3 rounded-t-2xl -mt-6 mb-6"
                  style={{ background: "#B6E723" }}
                />

                <div className="flex items-center justify-between">
                  <h3 className={`${poppins.className} text-2xl font-bold text-gray-900`}>
                    Pro
                  </h3>
                  <div className={`${poppins.className} text-lg font-bold text-gray-900`}>
                    $12<span className={`${manrope.className} text-sm font-medium`}> / month</span>
                  </div>
                </div>

                <p className={`${manrope.className} mt-3 text-gray-700`}>
                  For power users and teams who need more power and history.
                </p>

                <div className="mt-6">
                  <div className={`${manrope.className} mt-2 text-sm text-gray-600`}>
                    Includes everything in Basic, plus:
                  </div>

                  <ul className="mt-3 ml-4 list-disc text-sm text-gray-700 space-y-2">
                    <li><strong>25,000 credits</strong> per month</li>
                    <li><strong>Unlimited</strong> download & copy</li>
                    <li><strong>1 year</strong> of history</li>
                    <li>Priority generation & advanced controls</li>
                 
                  </ul>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-3 rounded-full font-semibold"
                    style={{
                      backgroundColor: "#E823B6",
                      color: "#FFFFFF",
                      border: "2px solid rgba(0,0,0,0.06)",
                    }}
                    aria-label="Start Pro"
                  >
                    Start Pro
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

         
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className={`${manrope.className} text-sm text-white/80 mt-8`}
          >
            Need custom credits or a team plan? Contact us and we’ll create a plan that fits.
          </motion.p>
        </div>
      </main>

      <Footer />
    </>
  );
}
