'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import DigitalBackground from "@/components/backgrounds/DigitalBackground";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";
import ECU8TR from "@/components/logos/ECU8TR";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Bullets from "@/components/solutions/ecu8tr/Ecu8trBullet";

export default function ProductPage() {
  // State to track when the main image has loaded
  const [imageLoaded, setImageLoaded] = useState(false);
  // Calculate aspect ratio percentage for the image placeholder
  const aspectRatio = (1145 / 1916) * 100;

  return (
    <div className="relative min-h-screen bg-white">
      <section>
        {/* Header with logo inside max-w-8xl container */}
        <div className="max-w-8xl mx-auto px-6 2xl:px-0 pt-36 lg:pt-52 relative z-30">
          <h1 role="img" aria-label="ECU8TR™ Battery Point Tester">
            <ECU8TR className="h-16 sm:h-28 3xl:h-32" />
          </h1>
        </div>

        <motion.div
          key="main"
          initial={{ opacity: 0, x: -50 }}
          animate={imageLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full"
        >
          <div className="h-full text-black flex flex-col xl:flex-row items-center justify-between max-w-8xl mx-auto lg:pt-8">

          {/* Main image for mobile */}
          <div className="flex justify-center sm:justify-start item-start align-left self-start xl:mb-0 xl:hidden">
              <div className="relative w-full z-30 mt-8">
                {/* Invisible placeholder to reserve space until the image loads */}
                {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
                <Image
                  src="/vertical/ecu8tr-mobile.webp"
                  alt="ECU8TR™ Battery Factory Point Tester"
                  width={500}
                  height={500}
                  quality={70}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-auto ${!imageLoaded ? "invisible" : "visible"}`}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className=" text-left px-6 2xl:px-0 flex">
              <div className="text-left pt-12 xl:pt-0 ">
                <h2 className=" text-2xl sm:text-4xl font-bold xl:mb-6 mb-4 ">
                  ABOUT ECU8TR™
                </h2>
                <p className="mt-4 text-[1.125rem] md:text-[1.25rem] xl:max-w-[42rem] text-gray-600">
                An advanced tester designed to verify cell monitor operations in battery modules or packs. Its intuitive design integrates seamlessly into manufacturing, offering real-time monitoring to help manufacturers make informed decisions and address issues at any stage.
                </p>
              
                <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
                  <a
                    href="/pdf/ECU8TR.pdf"
                    alt="ECU8TR™ Battery Point Tester Product Brief"
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
              <div className="relative w-full xs:max-w-xs xl:max-w-3xl z-30 aspect-[1916/1145]">
                {/* Invisible placeholder to reserve space until the image loads */}
                {!imageLoaded && <div style={{ paddingBottom: `${aspectRatio}%` }} />}
                <Image
                  src="/vertical/ecu8tr.webp"
                  alt="ECU8TR™ Batter Factory Point Tester"
                  width={500}
                  height={500}
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
        <h2 className=" text-2xl sm:text-4xl font-bold mb-10" id="specs-heading">
          SPECIFICATIONS
        </h2>
        <div className="border-2 border-[#2F79F8] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] ">
            {/* DIMENSIONS */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              INTERFACES
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70 ">
              <p className="mb-1">ISO COMM (Analog Devices ISO SPI BMS Devices, Infineon ISO UART BMS Devices, NXP BMS Devices, and Texas Instruments BMS Devices) analog frontend
                Ethernet network interface - 10/100 baseT
                CAN FD Interface via 9-pin DSub connector
                12V Power Input via Barrel Jack</p>
            </div>
            {/* DIMENSIONS */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              DIMENSIONS
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70">
              <p className="mb-1">
                Standard 1U Chassis Size
              </p>
              <p className="mb-1">8.000"L x 16.600"W x 1,750"H</p>
              <p className="mb-1">203.20mm x 421.64mm x 44.45mm</p>
            </div>
            {/* POWER */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              POWER
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70 ">
              <p className="mb-1">12V/36W AC/DC External Desktop (Class 1)</p>
              <p className="mb-1">Adapter International, 90 ~ 264 VAC</p>
            </div>
            {/* INTERFACES */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
              INDICATORS
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70 ">
              <p className="mb-1">
                Test mode and results LED indicator
              </p>
            </div>
            {/* CERTIFICATIONS */}
            <h3 className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#2F79F8] font-semibold xs:text-xl 3xl:text-[22.4px] ">
               CERTIFICATIONS
            </h3>
            <div className="p-4 lg:p-6 border-b border-[#2F79F8] md:border-l md:border-[#2F79F8] xs:text-[1.125rem] xs:leading-[1.75rem] text-black/70 ">
              UL Certified (UL61010)
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