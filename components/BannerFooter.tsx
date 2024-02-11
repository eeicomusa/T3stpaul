"use client";

import Link from "next/link";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { bannerfooterlinks } from "./constants";
import { usePathname } from "next/navigation";

const BannerFooter = () => {
  const pathname = usePathname();
  return (
    <section className="w-full border-t border-white/30  bg-gradient-to-r from-[#29AB87] to-[#ffc15c]">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 flex flex-wrap flex-row gap-4  md:gap-6 lg:gap-8 items-center justify-center sm:justify-between py-2 text-white  text-sm">
        <p className="text-white/80">
          &#169;2023 paulosafaris - All rights reserved
        </p>
        <div className="flex flex-row items-center text-sm text-white/80">
         
        </div>
      </div>
    </section>
  );
};

export default BannerFooter;
