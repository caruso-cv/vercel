'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalBackground from "@/components/DigitalBackground";
import NoiseOverlay from "@/components/NoiseOverlay";
import Elev8tr from "@/components/logos/ECU8TR";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MoveLeft } from "lucide-react";

/* -------------------------------------------
   1) SPECIFICATIONS SECTION 
------------------------------------------- */
function SpecificationsView({ containerHeight, onClose }) {
  return (
    <motion.div
      key="specs"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      // Apply the minHeight based on the parent's measured height
      style={{ minHeight: containerHeight || "auto" }}
      className="relative w-full pt-36"
    >
      <div className="max-w-8xl w-full mx-auto text-black px-4 sm:px-6 lg:px-8 xs:pt-6 md:pt-20 lg:pt-24 pb-28 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl xs:text-[1.75rem] sm:text-5xl font-bold mb-10 3xl:text-6xl">
            SPECIFICATIONS
          </h2>
          <button
            onClick={onClose}
            className="rounded-md text-black uppercase font-bold bg-gray-100 hover:bg-gray-200 py-2 px-4 mb-11 sm:mb-9 xl:mb-4"
          >
            <MoveLeft className="w-6 h-6 text-gray-500 inline-flex mr-1 md:mr-3" />{" "}
            <span className='hidden xs:inline'>Back </span>
            <span className="hidden md:inline">to product</span>
          </button>
        </div>

        <div className="border-2 border-[#016DFF] rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] 3xl:grid-cols-[260px_minmax(0,1fr)]">
            {/* 1) DIMENSIONS */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold xs:text-xl lg:text-[1.4rem] 3xl:text-2xl">
              DIMENSIONS
            </div>
            <div className="p-4 lg:p-6 border-b border-[#016DFF] md:border-l md:border-[#016DFF] xs:text-lg lg:text-2xl font-geist text-black/70 3xl:text-2xl">
              <p className="mb-1">Standard 1U Chassis size</p>
              <p className="mb-1">8.000&#34; L x 16.600&#34; W x 1.750&#34; H</p>
              <p>203.20mm x 421.64mm x 44.45mm</p>
            </div>
            {/* 2) SAFETY CERTIFICATIONS */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold xs:text-xl lg:text-[1.4rem] 3xl:text-2xl">
              SAFETY CERTIFICATIONS
            </div>
            <div className="p-4 lg:p-6 border-b border-[#016DFF] md:border-l md:border-[#016DFF] xs:text-lg lg:text-2xl font-geist text-black/70 3xl:text-2xl">
              UL 61010
            </div>
            {/* 3) POWER */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold xs:text-xl lg:text-[1.4rem] 3xl:text-2xl">
              POWER
            </div>
            <div className="p-4 lg:p-6 border-b border-[#016DFF] md:border-l md:border-[#016DFF] xs:text-lg lg:text-2xl font-geist text-black/70 3xl:text-2xl">
              12V 36 W AC/DC External Desktop (Class I) Adapter International,<br />
              90 &#126; 264 VAC
            </div>
            {/* 4) INTERFACES */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold xs:text-xl lg:text-[1.4rem] 3xl:text-2xl">
              INTERFACES
            </div>
            <div className="p-4 lg:p-6 border-b border-[#016DFF] md:border-l md:border-[#016DFF] xs:text-lg lg:text-2xl font-geist text-black/70 3xl:text-2xl">
              <p className="mb-1">
                iso SPI and iso UART analog frontend communications
              </p>
              <p className="mb-1">Ethernet network interface – 10/100 baseT</p>
              <p className="mb-1">CAN FD interface via 9-pin Dsub connector</p>
              <p>12V power input via barrel jack</p>
            </div>
            {/* 5) INDICATORS */}
            <div className="p-4 lg:p-6 pb-0 md:pb-4 md:border-b border-[#016DFF] font-semibold xs:text-xl lg:text-[1.4rem] 3xl:text-2xl">
              INDICATORS
            </div>
            <div className="p-4 lg:p-6 border-b border-[#016DFF] md:border-l md:border-[#016DFF] xs:text-lg lg:text-2xl font-geist text-black/70 3xl:text-2xl">
              Large LED indicator to display test modes and test results
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------
   2) MAIN CONTENT (the original landing content)
------------------------------------------- */
function MainView({ onShowSpecs }) {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full"
    >
      <div
        className="h-full text-black flex flex-col xl:flex-row items-center justify-center relative z-30 max-w-8xl 2xl:max-w-[1900px] mx-auto pb-28 md:pb-52 lg:pt-28 xl:pt-64 3xl:pt-72"
      >
        <div className="flex justify-start mb-6 xl:mb-0 w-full pl-8 lg:pl-14 pt-32 xl:hidden">
          <Elev8tr className="h-[4rem] xs:h-[5rem] sm:h-24 mb-12" />
        </div>
        <div className="flex justify-center mb-6 xl:mb-0">
          <Image
            src="/vertical/ecu8tr.webp"
            alt="Emula8tr ESS Controller"
            width={1916}
            height={1145}
            className="w-full xs:max-w-full h-auto"
          />
        </div>
        <div className="xl:max-w-[50vw] mx-auto xl:w-1/2 text-left xs:px-2 lg:px-8">
          <div className="text-left px-8 pt-12 xl:pt-0">
            <Elev8tr className="h-16 sm:h-24 3xl:h-36 md:mb-5 hidden xl:block" />
            <h2 className="3xl:text-4xl text-2xl sm:text-4xl font-bold xl:mb-10 mb-6">
              REVOLUTIONIZING QUALITY CONTROL
            </h2>
            <p className="font-medium text-xl md:text-2xl 3xl:text-3xl xl:mb-10 mb-6">
              ECU8TR™ is a cutting-edge tester crafted for the verification of
              cell monitor operations within battery modules or packs.
            </p>
            <ul className="list-disc font-base text-lg md:text-xl xl:text-2xl 3xl:text-3xl pl-4 leading-[1.8] mb-8 xl:mb-14 xl:space-y-3 md:space-y-1">
              <li>Precision Monitoring</li>
              <li>iso SPI and iso UART compatible</li>
              <li>Quality Management</li>
            </ul>
            <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
              <button
                onClick={onShowSpecs}
                className="inline-flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[48px] px-3 sm:px-6 py-1.5 text-[1rem] sm:text-lg 3xl:text-lg font-semibold whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-[#000] hover:bg-[#191919] shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)] opacity-90 hover:opacity-100 text-white uppercase"
              >
                Specifications
              </button>

              <Link
                href="/pdf/ECU8TR.pdf"
                alt="Ecu8tr Battery Point Tester"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[48px] px-3 sm:px-6 py-1.5 text-[1rem] sm:text-lg 3xl:text-lg font-bold whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-gray-100 hover:bg-gray-200 opacity-90 hover:opacity-100 text-black uppercase"
              >
                View brochure{" "}
                <ArrowUpRight className="w-5 h-5 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------
   3) PARENT PAGE COMPONENT
------------------------------------------- */
export default function Example() {
  const [showSpecs, setShowSpecs] = useState(false);
  const mainRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Measure the main view's height on mount
  useEffect(() => {
    if (mainRef.current) {
      setContainerHeight(mainRef.current.offsetHeight);
    }
  }, []);

  const handleShowSpecs = () => {
    if (window.innerWidth < 1268) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setShowSpecs(true);
  };

  return (
    <div
      // Ensure the container never shrinks below the measured mainView height
      style={{ minHeight: containerHeight ? containerHeight : "auto" }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {showSpecs ? (
          <SpecificationsView
            containerHeight={containerHeight}
            onClose={() => setShowSpecs(false)}
          />
        ) : (
          <div ref={mainRef}>
            <MainView onShowSpecs={handleShowSpecs} />
          </div>
        )}
      </AnimatePresence>

      <DigitalBackground />
      <NoiseOverlay />
    </div>
  );
}