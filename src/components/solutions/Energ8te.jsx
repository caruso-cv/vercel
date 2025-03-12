'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import DigitalBackground from "@/components/DigitalBackground";
import NoiseOverlay from "@/components/NoiseOverlay";
import Elev8tr from "@/components/logos/ENERG8TE";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Bullets from "@/components/solutions/Energ8teBullet";

export default function ProductPage() {
  // State to track when the main image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  // Calculate aspect ratio percentage for the image placeholder
  const aspectRatio = (1145 / 1916) * 100;

  return (
    <div className="relative min-h-screen">
      {/* Header with logo inside max-w-8xl container */}
      <div className="max-w-8xl mx-auto px-6 2xl:px-0 pt-32 lg:pt-48 relative z-30">
        <Elev8tr className="h-16 sm:h-28 xl:h-32" />
      </div>

      <motion.div
        key="main"
        initial={{ opacity: 0, x: -50 }}
        animate={imageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-full"
      >
        <div className="h-full text-black flex flex-col xl:flex-row items-center justify-center max-w-8xl mx-auto lg:pt-2">

        {/* Main image for mobile */}
        <div className="flex justify-center xl:mb-0 xl:hidden">
            <div className="relative w-full xs:max-w-6xl z-30 mt-8">
              {/* Invisible placeholder to reserve space until the image loads */}
              {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
              <Image
                src="/vertical/energ8te.png"
                alt="Emula8tr ESS Controller"
                width={1916}
                height={1145}
                quality={70}
                priority
                onLoad={() => setImageLoaded(true)}
                className={`w-full xs:max-w-6xl h-auto ${!imageLoaded ? "invisible" : "visible"}`}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="xl:max-w-[50vw] mx-auto xl:w-2/3 text-left px-6 2xl:px-0">
            <div className="text-left pt-12 xl:pt-0">
              <h2 className=" text-2xl sm:text-4xl font-bold xl:mb-6 mb-4">
                ABOUT ENERG8TE™
              </h2>
              <p className="font-medium text-xl md:text-2xl 2xl:text-[1.6rem] 2xl:leading-[1.4] xl:mb-10 mb-6">
              ENERG8TE™ is rated the highest level of Function Safety, targeted for UL9540 and tailored for use in diverse energy environments, the ENERG8TE™ seamlessly integrates with various energy sources.
              </p>
             
              <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
                <Link
                  href="/pdf/ENERG8TE.pdf"
                  alt="BMS Controls for energy storage"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[48px] px-3 sm:px-6 py-1.5 text-[1rem] sm:text-lg font-bold whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 opacity-90 hover:opacity-100 text-black uppercase"
                >
                  View product brief{" "}
                  <ArrowUpRight className="w-5 h-5 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Image for desktop */}
          <div className="justify-center mb-6 xl:mb-0 hidden xl:flex">
            <div className="relative w-full xs:max-w-6xl z-30">
              {/* Invisible placeholder to reserve space until the image loads */}
              {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
              <Image
                src="/vertical/energ8te.png"
                alt="Emula8tr ESS Controller"
                width={1916}
                height={1145}
                quality={70}
                priority
                onLoad={() => setImageLoaded(true)}
                className={`w-full xs:max-w-6xl h-auto ${!imageLoaded ? "invisible" : "visible"}`}
              />
            </div>
          </div>

          
        </div>
      </motion.div>

      {/* FEATURES */}
      <div className="max-w-8xl w-full mx-auto text-black pt-20 lg:pt-24 pb-28 px-6 2xl:px-0">
        <h2 className=" text-2xl sm:text-4xl font-bold mb-10 ">
          FEATURES
        </h2>
        <div className="border-2 border-[#2F79F8] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 ">
            {/* ADVANCED CHARGING AND DISCHARGING CONTROL */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-gray-200 font-semibold xs:text-xl lg:text-[1.4rem] ">
              ADVANCED CHARGING AND DISCHARGING CONTROL
            </div>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] xs:text-lg lg:text-2xl font-geist text-black/70 ">
              <p className="mb-1">ENERG8TE™ manages charging and discharging cycles with precision,
              ensuring optimal battery performance and an extended lifespan. This is
              crucial for maximizing your energy storage investment.</p>
            </div>
            {/* GRID INTERACTION AND COMPLIANCE */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-gray-200 font-semibold xs:text-xl lg:text-[1.4rem] ">
            GRID INTERACTION AND COMPLIANCE
            </div>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] xs:text-lg lg:text-2xl font-geist text-black/70">
              <p className="mb-1">
              ENERG8TE™ includes advanced grid management features like peak shaving,
              time-of-use management, and reactive power control. These features
              ensure your energy storage system complies with local regulations while
              optimizing energy costs.

              </p>
            </div>
            {/* ADVANCED CHARGING AND DISCHARGING CONTROL */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-gray-200 font-semibold xs:text-xl lg:text-[1.4rem] ">
            ADVANCED CHARGING AND DISCHARGING CONTROL
            </div>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] xs:text-lg lg:text-2xl font-geist text-black/70 ">
              <p className="mb-1">Easily integrate with various energy sources, including solar, wind,
              and grid power, making ENERG8TE™ adaptable for both small-scale installations
              and large industrial applications.</p>
            </div>
          </div>
        </div>
      </div>

      <Bullets />
      <DigitalBackground />
      <NoiseOverlay />
    </div>
  );
}