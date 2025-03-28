'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import DigitalBackground from "@/components/backgrounds/DigitalBackground";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";
import ELEV8TR from "@/components/logos/ELEV8TR";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Bullets from "@/components/solutions/elev8tr/Elev8trBullet";

export default function ProductPage() {
  // State to track when the main image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  // Calculate aspect ratio percentage for the image placeholder
  const aspectRatio = (1145 / 1916) * 100;

  return (
    <div className="relative min-h-screen">

      <section>
        {/* Header with logo inside max-w-8xl container */}
        <h1 className="max-w-8xl mx-auto px-6 2xl:px-0 pt-36 lg:pt-52 relative z-30" role="img" aria-label="ELEV8TR™ Battery Algorithm Simulator">
          <ELEV8TR className="h-16 sm:h-28 3xl:h-32" />
        </h1>

        <motion.div
          key="main"
          initial={{ opacity: 0, x: -50 }}
          animate={imageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full"
        >
          <div className="h-full text-black flex flex-col xl:flex-row items-center justify-center max-w-8xl mx-auto lg:pt-8">

          {/* Main image for mobile */}
          <div className="flex justify-center sm:justify-start item-start align-left self-start  xl:mb-0 xl:hidden">
              <div className="relative w-full xs:max-w-xl z-30 mt-8">
                {/* Invisible placeholder to reserve space until the image loads */}
                {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
                <Image
                  src="/vertical/elev8tr.webp"
                  alt="ELEV8TR™ Battery Algorithm Simulator"
                  width={1916}
                  height={1145}
                  quality={70}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-auto ${!imageLoaded ? "invisible" : "visible"}`}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="xl:max-w-[50vw] mx-auto xl:w-2/3 text-left px-6 2xl:px-0 flex ">
              <div className="text-left pt-12 xl:pt-0 ">
                <h2 className=" text-2xl sm:text-4xl font-bold xl:mb-6 mb-4 ">
                  ABOUT ELEV8TR™
                </h2>
                <p className="mt-4 text-[1.125rem] md:text-[1.25rem] xl:max-w-[42rem] text-gray-600 ">
                ELEV8TR™ is an automotive toolkit for OEMs aiming to accelerate their Battery Management Systems with advanced algorithms. It integrates real-time battery interaction, simulation, and MATLAB/Simulink compatibility.
                </p>
              
                <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
                  <a
                    href="/pdf/ELEV8TR.pdf"
                    alt="ELEV8TR™ Battery Algorithm Simulator Product Brief"
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
            <div className="justify-center mb-6 xl:mb-0 hidden xl:flex">
              <div className="relative w-full xs:max-w-xs xl:max-w-3xl z-30">
                {/* Invisible placeholder to reserve space until the image loads */}
                {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
                <Image
                  src="/vertical/elev8tr.webp"
                  alt="ELEV8TR™ Battery Algorithm Simulator"
                  width={1916}
                  height={1145}
                  quality={70}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-auto ${!imageLoaded ? "invisible" : "visible"}`}
                />
              </div>
            </div>     
          </div>
        </motion.div>
      </section>

      {/* Static SPECIFICATIONS Section */}
      <section className="max-w-8xl w-full mx-auto text-black pt-20 lg:pt-24 pb-20 px-6 2xl:px-0" aria-labelledby="specs-heading">
        <h2 className=" text-2xl sm:text-4xl font-bold mb-10 ">
          SPECIFICATIONS
        </h2>
        <div className="border-2 border-[#2F79F8] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] ">
            {/* DIMENSIONS */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              INTERFACES
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70 ">
                <p className="mb-1">Integrated 800W Bi-directional Power Supply, configurable up to 15kW</p>
                <p className="mb-1">Multi-IO Terminal Blocks</p>
                <p className="mb-1">so COMM (ISO SPI, ISO UART) analog frontend</p>
                <p className="mb-1">Ethernet network interface - 10/100 baseT</p>
                <p className="mb-1">CAN FD Interface via 9-pin DSub connector</p>
                <p className="mb-1">12V Power Input via Barrel Jack</p>
            </div>
            {/* POWER*/}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              POWER
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70">
              <p className="mb-1">
              12V/36W AC/DC External Desktop (Class 1) Adapter International, 90 ~ 264 VAC
              </p>
            </div>
          </div>
        </div>
      </section>

      <Bullets />
      <DigitalBackground />
      <NoiseOverlay />
    </div>
  );
}