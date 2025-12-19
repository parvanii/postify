import React from "react";
import Image from "next/image";
import { Poppins, Manrope } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500"],
});

const Howdoesitwork = () => {
  return (
    <section
      className="w-full py-32 md:py-40"
      style={{ backgroundColor: "#E823B6" }}
    >
      <div
        className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start"
        style={{ gap: "60px" }}
      >
        <div className="max-w-xl md:max-w-2xl">
          <h2
            className={`${poppins.className} text-4xl md:text-6xl font-medium text-white leading-tight transition-all duration-300 hover:scale-[1.03]`}
          >
            How does{" "}
            <span style={{ color: "#B6E723" }} className="font-bold">
              it
            </span>{" "}
            work?
          </h2>

          <p
            className={`${manrope.className} text-white text-2xl md:text-[28px] mt-8 leading-relaxed transition-all duration-300 hover:translate-x-2 hover:opacity-90`}
            style={{ maxWidth: "520px" }}
          >
            Just follow three quick steps, tweak a few settings, and you&apos;re all
            set. Fast, smooth, and built to make content creation effortless.
          </p>
        </div>

        <div className="w-[380px] md:w-[460px] flex-shrink-0 transition-all duration-300 hover:scale-[1.04] hover:drop-shadow-2xl">
          <Image
            src="/steps.png"
            alt="Steps"
            width={500}
            height={450}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Howdoesitwork;
