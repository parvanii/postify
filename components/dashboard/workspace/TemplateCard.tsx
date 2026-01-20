"use client";

import Image from "next/image";
import Link from "next/link";
import type { TEMPLATE } from "./TemplateListSection";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item.slug.replace(" ", "-")}`}>
      <div
        className="
          p-5 rounded-2xl bg-[#5523E8] border border-white/10
          flex flex-col gap-4 cursor-pointer h-full
          transition-all duration-300 ease-out
          hover:scale-105 hover:-translate-y-1 hover:shadow-xl
        "
      >
        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center backdrop-blur-sm">
          <Image
            src={item.icon}
            alt="icon"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <h2 className="font-semibold text-lg text-white">
          {item.name}
        </h2>

        <p className="text-white/80 line-clamp-3 text-sm">
          {item.desc}
        </p>
      </div>
    </Link>
  );
};

export default TemplateCard;
