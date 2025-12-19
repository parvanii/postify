import Link from "next/link";
import Image from "next/image";
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
    <section
      className="w-full min-h-screen flex items-center"
      style={{ backgroundColor: "#5523E8" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-40 lg:py-45 relative overflow-visible w-full">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className={`${poppins.className} text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight`}>
            Make{" "}
            <span className="relative inline-block px-3 py-1 border-2 border-[#ADD402] rounded-xl font-semibold">
              Content
              <span className="absolute -top-2 -right-2 text-[#ADD402] text-xl">✦</span>
              <span className="absolute -bottom-2 -left-2 text-[#ADD402] text-xl">✦</span>
            </span>{" "}
            People Can&apos;t <span className="text-[#ADD402]">Ignore </span>
          </h1>

          <p className={`${openSans.className} text-white/80 mt-6 text-base sm:text-lg max-w-xl mx-auto`}>
            Because great posts shouldn&apos;t take hours.
          </p>

          <div className={`${openSans.className} mt-10 flex items-center justify-center gap-4`}>
            <SignUpButton>
              <button
                className="cursor-pointer transition-all bg-white text-black px-6 py-2 rounded-full border-black
                           border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                           active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Get started
              </button>
            </SignUpButton>

            <Link href="/about" rel="noreferrer">
              <button
                className="cursor-pointer transition-all bg-[#E823B6] text-white px-6 py-2 rounded-full border-[#11020d]
                           border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                           active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                More info
              </button>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="absolute top-32 left-0 transform -translate-x-1/4">
          <Image src="/facebook.png" alt="facebook card" width={280} height={280} className="drop-shadow-lg rounded-xl" />
        </div>

        <div className="absolute bottom-20 left-16">
          <Image src="/x.png" alt="x card" width={280} height={280} className="drop-shadow-lg rounded-xl" />
        </div>

        <div className="absolute top-40 right-0 transform translate-x-1/4">
          <Image src="/reddit.png" alt="reddit card" width={280} height={280} className="drop-shadow-lg rounded-xl" />
        </div>

        <div className="absolute bottom-10 right-20">
          <Image src="/instagram.png" alt="instagram card" width={280} height={280} className="drop-shadow-lg rounded-xl" />
        </div>

        {/* Background gradients */}
        <div
          className="absolute -left-40 -top-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(232,35,182,0.32), rgba(173,212,2,0.12))" }}
        />

        <div
          className="absolute -right-40 -bottom-32 w-[420px] h-[420px] rounded-full blur-2xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08), rgba(85,35,232,0.14))" }}
        />
      </div>
    </section>
  );
}
