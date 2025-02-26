"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Ecu8tr() {
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
            ECU8TR&trade;
          </p>
          <h2 className="3xl:text-6xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6">
            REVOLUTIONIZING QUALITY CONTROL
          </h2>
          <p className="2xl:text-2xl text-xl xl:mb-10 mb-6 3xl:text-3xl">
            ECU8TR™ is a cutting-edge tester crafted for the verification of
            cell monitor operations within battery modules or packs.
          </p>
          <ul className="list-disc font-semibold 2xl:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4">
            <li>Precision Monitoring</li>
            <li>iso SPI and iso UART compatible</li>
            <li>Quality Management</li>
          </ul>
        </div>
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            src="/vertical/ecu8tr.webp"
            alt="Emula8tr ESS Controller"
            width={1200}
            height={800}
            className="w-full lg:max-w-[50vw] h-auto"
          />
        </div>
      </section>

    {/* --- Gray Layer (pinned) --- */}
    {/* Give it bigger margins so we see white around it */}
    <section
      className="lg:sticky top-8 lg:h-[calc(100vh-64px)] bg-gray-100 text-black z-30 
                flex flex-col-reverse lg:flex-row items-center 
                justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4"
    >
      <div className="max-w-8xl 3xl:max-w-[2000px] 4xl:max-w-[2400px] w-full mx-auto text-black sm:py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold mb-12 3xl:text-5xl">SPECIFICATIONS</h2>

        {/* Outer container with a solid border */}
        <div className="border-2 border-[#016DFF] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] 3xl:grid-cols-[260px_minmax(0,1fr)] ">  
            {/* 1) DIMENSIONS */}
            <div className="p-4 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold lg:text-xl 3xl:text-2xl">
              DIMENSIONS
            </div>
            <div className="p-4 border-b border-[#016DFF] md:border-l md:border-[#016DFF] lg:text-xl font-geist text-black/70 3xl:text-2xl">
              <p className="mb-1">Standard 1U Chassis size</p>
              <p className="mb-1">8.000&#34; L x 16.600&#34; W x 1.750&#34; H</p>
              <p>203.20mm x 421.64mm x 44.45mm</p>
            </div>

            {/* 2) SAFETY CERTIFICATIONS */}
            <div className="p-4 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold lg:text-xl 3xl:text-2xl">
              SAFETY CERTIFICATIONS
            </div>
            <div className="p-4 border-b border-[#016DFF] md:border-l md:border-[#016DFF] lg:text-xl font-geist text-black/70 3xl:text-2xl">
              UL 61010
            </div>

            {/* 3) POWER */}
            <div className="p-4 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold lg:text-xl 3xl:text-2xl">POWER</div>
            <div className="p-4 border-b border-[#016DFF] md:border-l md:border-[#016DFF] lg:text-xl font-geist text-black/70 3xl:text-2xl">
              12V 36 W AC/DC External Desktop (Class I) Adapter International,<br />
              90 &#126; 264 VAC
            </div>

            {/* 4) INTERFACES */}
            <div className="p-4 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold lg:text-xl 3xl:text-2xl">
              INTERFACES
            </div>
            <div className="p-4 border-b border-[#016DFF] md:border-l md:border-[#016DFF] lg:text-xl font-geist text-black/70 3xl:text-2xl">
              <p className="mb-1">
                iso SPI and iso UART analog frontend communications options via
                circular connectors
              </p>
              <p className="mb-1">Ethernet network interface – 10/100 baseT</p>
              <p className="mb-1">CAN FD interface via 9-pin Dsub connector</p>
              <p>12V power input via barrel jack</p>
            </div>

            {/* 5) INDICATORS */}
            <div className="p-4 pb-0 md:pb-4 font-semibold lg:text-xl 3xl:text-2xl">INDICATORS</div>
            <div className="p-4 md:border-l md:border-[#016DFF] lg:text-xl font-geist text-black/70 3xl:text-2xl">
              Large LED indicator to display test modes and test results
            </div>
          </div>
        </div>

        {/* Download button */}
        <div className="mt-12">
        <motion.a
            href="/pdf/ECU8TR.pdf"
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
    </section>
  </div>
      
  );
}