import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Hero() {
  return (
    <section className="w-full" style={{ backgroundColor: "#5523E8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36 relative overflow-hidden">

        <div className="text-center max-w-3xl mx-auto">
          <h1
            className={`${poppins.className} text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight`}
          >
            Create Content that{" "}
            <span className="inline-block font-bold" style={{ color: "#ADD402" }}>
              Clicks
            </span>
          </h1>

          <p className={`${openSans.className} text-white/80 mt-6 text-base sm:text-lg max-w-xl mx-auto`}>
            Because great posts shouldn&apos;t take hours.
          </p>

          {/* Buttons */}
          <div className={`${openSans.className} mt-10 flex items-center justify-center gap-4`}>
            
            {/* SIGN UP BUTTON */}
            <SignUpButton>
              <button className="px-7 py-3 rounded-[20px] bg-white text-black text-sm font-semibold shadow-sm hover:shadow-md transition-all">
                Get started
              </button>
            </SignUpButton>

            {/* More Info */}
            <Link href="/about"  rel="noreferrer">
              <button
                className="px-7 py-3 rounded-[20px] text-white text-sm font-semibold"
                style={{ backgroundColor: "#E823B6" }}
              >
                More info
              </button>
            </Link>
          </div>
        </div>

        {/* Background Blobs */}
        <div
          className="absolute -left-40 -top-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(232,35,182,0.32), rgba(173,212,2,0.12))",
          }}
        />

        <div
          className="absolute -right-40 -bottom-32 w-[420px] h-[420px] rounded-full blur-2xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08), rgba(85,35,232,0.14))",
          }}
        />
      </div>
    </section>
  );
}
