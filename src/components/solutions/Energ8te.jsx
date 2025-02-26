"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Energ8te() {
  return (

      // Outer container with black background and large height.
    <div className="relative w-full lg:h-[200vh] bg-[#090A0B] ">
    {/* --- White Layer (pinned) --- */}
    {/* Use margins so you can see the black background around it */}
    <section className="lg:sticky top-4 lg:h-[calc(100vh-32px)] bg-white text-black z-20 
                          flex flex-col-reverse lg:flex-row items-center 
                          justify-center lg:rounded-4xl lg:mx-4 py-20 xl:py-0 2xl:px-[90px] 3xl:px-40">
        <div className="lg:w-1/2 text-left px-12 lg:max-w-[50vw] pt-12 lg:pt-0">
          <p className="text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 3xl:text-lg">
            ENERG8TE&trade;
          </p>
          <h2 className="3xl:text-6xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6">
          ADVANCED ENERGY STORAGE MANAGEMENT
          </h2>
          <p className="2xl:text-2xl text-xl xl:mb-10 mb-6 3xl:text-3xl">
            The ENERG8TE™ BMS Controller is a high-performance control solution designed to ensure efficient battery management of your Energy Storage System (ESS).
          </p>
          <ul className="list-disc font-semibold 2xl:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4">
            <li>Optimized Energy Efficiency</li>
            <li>System Reliability and Safety</li>
            <li>Flexible Integration</li>
          </ul>
          <div className="mt-12 3xl:block hidden">
            <motion.a
                href="/pdf/ENERG8TE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex 
                items-center 
                justify-center
                gap-2
                min-h-[40px]
                sm:min-h-[48px]
                px-3
                sm:px-6 py-1.5
                text-[.75rem]
                sm:text-base 
                3xl:text-lg
                font-semibold 
                leading-[16px]
                tracking-[0.2px]
                whitespace-nowrap
                cursor-pointer
                border-none
                rounded-md
                transition-colors
                duration-200
                ease-in-out
              bg-[#000]
              hover:bg-[#191919]
                shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                opacity-90
                hover:opacity-100
                text-white
                "
              >
              See our brochure
            </motion.a>
          </div>
        </div>
        
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            src="/vertical/energ8te.webp"
            alt="Emula8tr ESS Controller"
            width={1200}
            height={800}
            className="w-full lg:max-w-[50vw] h-auto"
          />
        </div>
      </section>

    {/* --- Gray Layer (pinned) --- */}
    <section className="lg:sticky top-8 lg:h-[calc(100vh-64px)] bg-gray-100 text-black z-30 
                          flex flex-col-reverse lg:flex-row items-center 
                          justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4 3xl:px-40">
        <div className="3xl:w-1/2 3xl:text-left 3xl:px-12 3xl:max-w-[50vw] 3xl:pt-0 max-w-8xl w-full mx-auto text-black sm:py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="3xl:text-6xl font-bold 3xl:mb-16 text-2xl sm:text-4xl mb-12">
            FEATURES
          </h2>

          <div className="border-2  border-[#016DFF] 3xl:border-none rounded-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_minmax(0,1fr)] 3xl:block">

              {/* 1) */}
                <p className="3xl:pb-4 font-semibold 3xl:text-4xl p-4 3xl:px-0 pb-0 lg:pb-4 lg:border-b border-[#016DFF] 3xl:border-none lg:text-xl">
                  ADVANCED CHARGING AND DISCHARGING CONTROL
                </p>

                <div className="p-4 3xl:p-0 border-b border-[#016DFF] lg:border-l lg:border-[#016DFF] 3xl:border-none lg:text-xl font-geist text-black/70 3xl:font-sans 3xl:text-black">
                  <p className="mb-1 3xl:text-[1.75rem] 3xl:leading-[2.5rem] 3xl:mb-4 3xl:pb-12">
                    ENERG8TE™ manages charging and discharging cycles with precision, ensuring optimal battery performance and extended lifespan, and crucial for extending lifespan and maximizing your energy storage investment.
                  </p>
                </div>

              {/* 2) */}
                <p className="3xl:pb-4 font-semibold 3xl:text-4xl p-4 3xl:px-0 pb-0 lg:pb-4 lg:border-b border-[#016DFF] 3xl:border-none lg:text-xl">
                GRID INTERACTION AND COMPLIANCE
                </p>

                <div className="p-4 3xl:p-0 border-b border-[#016DFF] lg:border-l lg:border-[#016DFF] 3xl:border-none lg:text-xl font-geist text-black/70 3xl:font-sans 3xl:text-black">
                  <p className="mb-1 3xl:text-[1.75rem] 3xl:leading-[2.5rem] 3xl:mb-4 3xl:pb-12">
                    ENERG8TE™ includes advanced grid management features like peak shaving, time-of-use management, and reactive power control. These features ensure that your energy storage system complies with local regulations and optimizes energy costs
                  </p>
                </div>

              {/* 3) */}
                <p className="3xl:pb-4 font-semibold 3xl:text-4xl p-4 3xl:px-0 pb-0 lg:pb-4 lg:border-b border-[#016DFF] 3xl:border-none lg:text-xl">
                ADVANCED CHARGING AND DISCHARGING CONTROL.
                </p>

                <div className="p-4 3xl:p-0 border-b border-[#016DFF] lg:border-l lg:border-[#016DFF] 3xl:border-none lg:text-xl font-geist text-black/70 3xl:font-sans 3xl:text-black">
                  <p className="mb-1 3xl:text-[1.75rem] 3xl:leading-[2.5rem] 3xl:mb-4 3xl:pb-12">
                    Easily integrate with various energy sources, including solar, wind, and grid power, making ENERG8TE™ adaptable for both small-scale installations and large industrial applications.
                  </p>
                </div>

            </div>
          </div>

          <div className="mt-12 3xl:hidden block">
            <motion.a
                href="/pdf/ENERG8TE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex 
                  items-center 
                  justify-center
                  gap-2
                  min-h-[40px]
                  sm:min-h-[48px]
                  px-3
                  sm:px-6 
                  py-1.5
                  text-[14px]
                  sm:text-[16px] 
                  font-semibold 
                  leading-[16px]
                  tracking-[0.2px]
                  whitespace-nowrap
                  cursor-pointer
                  border-none
                  rounded-md
                  transition-colors
                  duration-200
                  ease-in-out
                  bg-[#000]
                  hover:bg-[#191919]
                  shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                  opacity-90
                  hover:opacity-100
                  text-white
                  uppercase
                "
              >
              See our brochure
            </motion.a>
          </div>

        </div>

        <div className="justify-center mb-6 lg:mb-0 hidden 3xl:flex">
          <Image
            src="/vertical/emula8tr.webp"
            alt="Emula8tr ESS Controller"
            width={1200}
            height={800}
            className="w-full lg:max-w-[50vw] h-auto"
          />
        </div>

      </section>
  </div>
      
  );
}


