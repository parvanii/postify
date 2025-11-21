"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const buttons = [
  { id: "content", label: "Creator", img: "/contentcreator.png" },
  { id: "agencies", label: "Agencies", img: "/agency.png" },
  { id: "ecom", label: "E-commerce", img: "/ecommerce.png" },
  { id: "writers", label: "Writers", img: "/writer.png" },
  { id: "marketing", label: "Marketing", img: "/marketing.png" },
  { id: "students", label: "Students", img: "/student.png" },
];

const Foryou = () => {
  const [selected, setSelected] = useState("marketing");
  const current = buttons.find((b) => b.id === selected)!;

  return (
    <section className="w-full py-24 md:py-32" style={{ backgroundColor: "#5523E8" }}>
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start gap-16">

      
        <div className="flex-1 text-left md:pr-8">


          <h2
            className={`${poppins.className} text-white text-5xl md:text-6xl font-medium leading-tight max-w-[420px]`}
          >
            Postify is made
            <br />
            for <span className="font-bold" style={{ color: "#B6E723" }}>YOU</span>
          </h2>

       
          <div className="mt-10 w-full max-w-[480px]">
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">

              {buttons.map((b) => {
                const active = selected === b.id;

                return (
                  <button
                    key={b.id}
                    onClick={() => setSelected(b.id)}
                    className={`
                      bg-white text-black px-6 py-3
                      rounded-full border-b-[4px] border-black
                      whitespace-nowrap text-[15px] font-medium
                      transition-all duration-300
                      shadow-md
                      hover:-translate-y-[3px] hover:scale-[1.05] hover:shadow-xl hover:brightness-105
                      active:translate-y-[1px] active:brightness-95
                      ${active ? "scale-[1.06]" : ""}
                    `}
                    style={{
                      transform: active ? "skew(-6deg) translateY(-3px)" : "none",
                    }}
                  >
                    <span
                      style={{
                        transform: active ? "skew(6deg)" : "none",
                        display: "inline-block",
                        transition: "transform .25s ease",
                      }}
                    >
                      {b.label}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>
        </div>

     
        <div className="w-full md:w-[550px] lg:w-[720px] flex-shrink-0">
          <div className="
            relative w-full h-[420px] md:h-[500px] lg:h-[600px]
            flex items-center justify-center
            md:-mt-16 lg:-mt-20
          ">
            <Image
              key={current.img}
              src={current.img}
              alt={current.label}
              width={1200}
              height={900}
              className="w-auto h-full object-contain transition-transform duration-300 hover:scale-[1.05]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Foryou;
