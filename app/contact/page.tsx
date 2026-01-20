// app/contact/page.tsx
"use client";

import React, { useState, FormEvent } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Image from "next/image";
import { Poppins, Manrope } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function ContactPage(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "#5523E8" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-8">
            <h1 className={`${poppins.className} text-4xl font-bold text-white`}>Contact Us</h1>
            <p className={`${manrope.className} mt-2 text-white/90 text-lg`}>Need help or have questions? We&apos;re here for you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <label className="block mb-4">
                <span className={`${manrope.className} text-sm text-gray-700`}>Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5523E8]"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="block mb-4">
                <span className={`${manrope.className} text-sm text-gray-700`}>Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#5523E8]"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>

              <label className="block mb-4">
                <span className={`${manrope.className} text-sm text-gray-700`}>Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-200 min-h-[130px] focus:ring-2 focus:ring-[#5523E8]"
                  placeholder="Tell us how we can help..."
                  required
                />
              </label>

              <div className="flex items-center gap-4 mt-4">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.01 }}
                  className="px-6 py-3 rounded-full bg-[#5523E8] text-white font-semibold"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "sent" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-500 text-sm">
                    Message sent!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
                    Fill all fields.
                  </motion.div>
                )}
              </div>

            </motion.form>

            <motion.aside initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                  <Image
                    src={"/logo.png"}
                    alt="Postify Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className={`${poppins.className} text-xl font-semibold text-white`}>Contact Info</h3>
                  <p className={`${manrope.className} text-sm text-white/90 mt-1`}>
                    Email: <a href="mailto:hello@postify.app" className="underline">hello@postify.app</a>
                  </p>
                  <p className={`${manrope.className} text-sm text-white/75`}>Response time: 1–2 days</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 text-white">
                <h4 className={`${poppins.className} text-md font-semibold`}>Follow us</h4>

                <div className="mt-4 flex gap-3 flex-wrap">
                  <motion.a initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.02 }} href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="1.2"/>
                      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" stroke="white" strokeWidth="1.2"/>
                      <circle cx="17.5" cy="6.5" r="0.8" fill="white"/>
                    </svg>
                    Instagram
                  </motion.a>

                  <motion.a initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.1 9.1 0 0 1-2.88 1.1A4.52 4.52 0 0 0 12.07 4.7C9.12 1.7 4.8 1.48 1.64 1.15A4.5 4.5 0 0 0 3.1 7.66 4.48 4.48 0 0 1 .88 7v.05a4.52 4.52 0 0 0 3.62 4.43A4.52 4.52 0 0 1 2 11.6v.06a4.52 4.52 0 0 0 3.62 4.43A9.1 9.1 0 0 1 0 18.99 12.84 12.84 0 0 0 6.95 21c8.33 0 12.88-6.9 12.88-12.88 0-.2 0-.4-.02-.6A9.22 9.22 0 0 0 23 3z" stroke="white" strokeWidth="0.7"/>
                    </svg>
                    Twitter
                  </motion.a>

                  <motion.a initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.2"/>
                      <path d="M8.5 11.5v5M8.5 9.5v.01M12.5 11.5v5M12.5 9.5a1.5 1.5 0 1 1 0 3" stroke="white" strokeWidth="1.2"/>
                    </svg>
                    LinkedIn
                  </motion.a>

                  <motion.a initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm flex items-center gap-2">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path d="M22 8.5s-.2-1.6-.8-2.3c-.8-1-1.7-1-2.1-1.1C15.9 4.8 12 4.8 12 4.8s-3.9 0-6.9.3c-.4.1-1.4.1-2.1 1.1C2.2 6.9 2 8.5 2 8.5S2 10.3 2 12.1v.8c0 1.8.2 3.6.2 3.6s.2 1.6.8 2.3c.8 1 1.9 1 2.4 1.1 1.7.1 7.6.3 7.6.3s3.9 0 6.9-.3c.4-.1 1.4-.1 2.1-1.1.6-.7.8-2.3.8-2.3s.2-1.9.2-3.6v-.8c0-1.8-.2-3.6-.2-3.6z" stroke="white" strokeWidth="0.7"/>
                      <path d="M10 15.5l5-3.5-5-3.5v7z" fill="white"/>
                    </svg>
                    YouTube
                  </motion.a>
                </div>
              </div>

              <div className="bg-white/6 rounded-xl p-4 text-white">
                <h4 className={`${poppins.className} text-md font-semibold`}>Support hours</h4>
                <p className={`${manrope.className} text-sm mt-2`}>Mon — Fri · 9:00 — 18:00 (IST)</p>
                <p className={`${manrope.className} text-sm mt-1`}>We usually reply within 1–2 business days.</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
