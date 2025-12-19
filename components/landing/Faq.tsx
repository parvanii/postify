"use client";

import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "What is Postify?",
    a: "Postify is your AI-powered content assistant, helping you generate captions, posts, ideas, and more — quickly and effortlessly.",
  },
  {
    q: "Who can use Postify?",
    a: "Postify is designed for creators, freelancers, agencies, marketing teams, students, and anyone who wants to create content faster.",
  },
  {
    q: "Do I need design or writing skills?",
    a: "Not at all! Postify takes care of the content creation, so you can focus on sharing and publishing.",
  },
  {
    q: "Is there a free version of Postify?",
    a: "Yes! Postify offers a free plan with essential features, along with premium options for more credits and advanced tools.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can easily upgrade from the free plan to premium at any time for additional credits and features.",
  },
  
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, []);

  const toggleFaq = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full py-24" style={{ backgroundColor: "#E823B6" }}>
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-white text-center text-4xl md:text-5xl font-semibold mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="
                  bg-white 
                  rounded-xl 
                  overflow-hidden 
                  transition-all 
                  duration-300 
                  shadow-[0px_8px_0px_#000]   /* <<< ADDED BLACK SHADOW */
                "
              >
                
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg md:text-xl font-medium text-black">
                    {item.q}
                  </h3>

                  <span
                    className={`text-2xl font-bold transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  style={{
                    maxHeight: isOpen
                      ? contentRefs.current[i]?.scrollHeight
                        ? `${contentRefs.current[i]!.scrollHeight}px`
                        : "400px"
                      : "0px",
                    transition: "max-height 350ms ease",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={`px-6 pb-6 pt-0 text-black/85 leading-relaxed transform transition-all duration-300 ${
                      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
