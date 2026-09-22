'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import DigitalBackground from "@/components/backgrounds/DigitalBackground";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";
import ECU8 from "@/components/logos/ECU8";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Bullets from "@/components/solutions/ecu8/Ecu8Bullet";

export default function ProductPage() {
  // State to track when the main image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative min-h-screen">

      <section>
        {/* Header with logo inside max-w-8xl container */}
        <h1 className="max-w-8xl mx-auto px-6 2xl:px-0 pt-36 lg:pt-52 relative z-30" role="img" aria-label="ECU8™ EV Battery Management ECU Prototype Platform">
          <ECU8 className="h-20 sm:h-28 3xl:h-32" />
        </h1>

        <motion.div
          key="main"
          initial={{ opacity: 0, x: -50 }}
          animate={imageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full"
        >
          <div className="h-full text-black flex flex-col xl:flex-row items-center xl:items-start justify-center max-w-8xl mx-auto lg:pt-8">

          {/* Main image for mobile */}
          <div className="flex justify-center sm:justify-start item-start align-left self-start w-full xl:mb-0 xl:hidden">
              <div className="w-[74%] sm:w-full sm:max-w-lg z-30 mt-0 sm:mt-8">
                <Image
                  src="/vertical/ecu8-board.webp"
                  alt="ECU8™ EV battery management ECU prototype platform"
                  width={960}
                  height={747}
                  quality={70}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="xl:max-w-[50vw] mx-auto xl:w-2/3 text-left px-6 2xl:px-0 flex ">
              <div className="text-left pt-4 ">
                <h2 className=" text-2xl sm:text-4xl font-bold xl:mb-6 mb-4 ">
                  ABOUT ECU8™
                </h2>
                <p className="mt-4 text-[1.125rem] md:text-[1.25rem] xl:max-w-[42rem] text-gray-600 ">
                ECU8™ is a prototype platform for EV Battery Management ECUs. This Infineon AURIX™ based design emphasizes safety ISO 26262 and security ISO 21434, and is available with any member of Infineon’s AURIX™ family. ECU8™ is intended as a path to certified production units, owned and built by the OEM.
                </p>

                <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
                  <a
                    href="/pdf/ecu8.pdf"
                    alt="ECU8™ EV Battery Management ECU Prototype Platform Product Brief"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[48px] px-3 sm:px-6 py-1.5 text-[1rem] sm:text-lg font-bold whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 opacity-90 hover:opacity-100 text-black uppercase"
                  >
                    View product brief{" "}
                    <ArrowUpRight className="w-5 h-5 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Image for desktop */}
            <div className="justify-center mb-6 xl:mb-0 hidden xl:flex xl:w-[45rem] xl:shrink-0">
              <div className="w-full xs:max-w-xs xl:max-w-[36rem] z-30">
                <Image
                  src="/vertical/ecu8-board.webp"
                  alt="ECU8™ EV battery management ECU prototype platform"
                  width={960}
                  height={747}
                  quality={70}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-auto"
                />
              </div>
            </div>     
          </div>
        </motion.div>
      </section>

      {/* Static SPECIFICATIONS Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="max-w-8xl w-full mx-auto text-black pt-20 lg:pt-24 pb-20 px-6 2xl:px-0"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-10">
          SPECIFICATIONS
        </h2>
        <div className="border-2 border-[#2F79F8] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] ">
            {/* PROCESSOR */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl lg:text-[1.375rem] 3xl:text-[22.4px] ">
              PROCESSOR
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] lg:text-[1.1875rem] lg:leading-[1.9rem] text-black/70 ">
                <p className="mb-1">Infineon AURIX™ based design</p>
                <p className="mb-1">Available with any member of Infineon’s AURIX™ family</p>
            </div>
            {/* INTERFACES */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl lg:text-[1.375rem] 3xl:text-[22.4px] ">
              INTERFACES
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] lg:text-[1.1875rem] lg:leading-[1.9rem] text-black/70 ">
                <p className="mb-1">Customizable with any BMS interface</p>
                <p className="mb-1">Ethernet network interface</p>
                <p className="mb-1">ISO SPI</p>
                <p className="mb-1">CAN / CAN FD</p>
                <p className="mb-1">Any additional interface required by your application</p>
            </div>
            {/* SAFETY & SECURITY */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl lg:text-[1.375rem] 3xl:text-[22.4px] ">
              SAFETY &amp; SECURITY
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] lg:text-[1.1875rem] lg:leading-[1.9rem] text-black/70">
              <p className="mb-1">ISO 26262 functional safety</p>
              <p className="mb-1">ISO 21434 cybersecurity</p>
            </div>
          </div>
        </div>
      </motion.section>

      <Bullets />
      <DigitalBackground />
      <NoiseOverlay />
    </div>
  );
}
