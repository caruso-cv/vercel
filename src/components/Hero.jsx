"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const [arrowOpacity, setArrowOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100;
      const newOpacity = Math.max(1 - window.scrollY / maxScroll, 0);
      setArrowOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative isolate overflow-hidden hidden lg:block z-40">
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl
                   sm:left-[calc(50%-18rem)]
                   lg:left-48
                   lg:top-[calc(50%-30rem)]
                   xl:left-[calc(50%-24rem)]"
      ></div>

      <div className="mx-auto max-w-8xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        
        {/* Animated text container */}
        <motion.div
          className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mt-24 sm:mt-32 lg:mt-16 opacity-70">
            <span className="rounded-full bg-gradient-to-r from-[#121212]/70 to-[#232323]/70 px-6 py-3 text-xl 2xl:text-2xl font-medium text-white">
              Designed for efficiency, safety, and reliability
            </span>
          </div>

          <h1 className="mt-12 text-7xl font-bold text-white sm:text-[5.2rem] uppercase text-balance">
            Contain Your Energy
          </h1>

          <p className="mt-10 text-pretty text-lg font-medium text-white sm:text-4xl">
            Advanced BMS controllers for ESS/BESS installations.
          </p>

          <div className="mt-14 flex items-center gap-x-6">
            <Link
              href="#get-started"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("get-started");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <motion.div
                className="hidden lg:inline-flex items-center justify-center py-5 px-2.5 md:px-3.5 text-xl font-bold 
                           tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors 
                           duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md 
                           opacity-90 hover:opacity-100 text-black"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>GET STARTED</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Animated image container */}
        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-16 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl">
            <Image
              alt="App screenshot"
              src="/hero/ECU8HERO.png"
              width={3837}
              height={2007}
              className="w-[68rem]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll arrow with fade-out effect on scroll */}
      <div
        style={{ opacity: arrowOpacity, transition: "opacity 0.5s ease-out" }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 3xl:hidden pb-6"
      >
        <ChevronDownIcon className="h-8 w-8 text-white animate-bounce" />
      </div>
    </div>
  );
}