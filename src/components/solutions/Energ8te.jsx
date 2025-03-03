'use client'

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalBackground from "@/components/DigitalBackground";
import NoiseOverlay from "@/components/NoiseOverlay";
import Elev8tr from "@/components/logos/ENERG8TE";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MoveLeft } from "lucide-react";

/* -------------------------------------------
   1) SPECIFICATIONS SECTION (Now breaks at 2xl)
------------------------------------------- */
function SpecificationsView({ containerHeight, onClose }) {
  return (
    <motion.div
      key="specs"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ minHeight: containerHeight || "auto" }}
      className="relative w-full pt-36"
    >
      <div
        className="
          max-w-8xl 
          w-full 
          mx-auto 
          text-black 
          px-4 
          sm:px-6 
          lg:px-8 
          xs:pt-6 
          md:pt-20 
          lg:pt-24 
          pb-28
          /* 2xl overrides (instead of 3xl) */

          2xl:text-left
          2xl:px-12

          2xl:pt-20
        "
      >
        {/* Header Row: FEATURES + Back */}
        <div className="flex justify-between items-center">
          <h2
            className="
              text-[2.3rem] 
              sm:text-5xl 
              font-bold 
              mb-10 
              2xl:mb-16
            "
          >
            FEATURES
          </h2>
          <button
            onClick={onClose}
            className="
              rounded-md 
              text-black 
              uppercase 
              font-bold 
              bg-gray-100 
              hover:bg-gray-200 
              py-2 
              px-4 
              mb-11 
              sm:mb-9 
              xl:mb-4
            "
          >
            <MoveLeft className="w-6 h-6 text-gray-500 inline-flex mr-1 md:mr-3" />
            <span className="hidden xs:inline">Back </span>
            <span className="hidden md:inline">to product</span>
          </button>
        </div>

        {/* Main container: keep border for sub-2xl, remove it at 2xl */}
        <div
          className="
            border-2 
            border-[#016DFF] 
            rounded-md 
            overflow-hidden 
            2xl:border-none
          "
        >
          {/* Use original grid for sub-2xl, switch to block at 2xl */}
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-[240px_minmax(0,1fr)]
              2xl:grid-cols-1
              2xl:block
            "
          >
            {/* 1) ADVANCED CHARGING AND DISCHARGING CONTROL */}
            <div
              className="
                p-4 
                lg:p-6 
                pb-0 
                md:pb-4 
                md:border-b 
                border-[#016DFF] 
                font-semibold 
                xs:text-xl 
                lg:text-[1.4rem] 
                2xl:text-4xl
                2xl:pb-4
                2xl:px-0
                2xl:border-none
              "
            >
              ADVANCED CHARGING AND DISCHARGING CONTROL
            </div>
            <div
              className="
                p-4 
                lg:p-6 
                border-b 
                border-[#016DFF] 
                md:border-l 
                md:border-[#016DFF] 
                xs:text-lg 
                lg:text-2xl 
                font-geist 
                text-black/70 
                2xl:text-black
                2xl:font-sans
                2xl:text-[1.75rem]
                2xl:leading-[2.5rem]
                2xl:mb-4
                2xl:pb-6
                2xl:border-none
                2xl:p-0
              "
            >
              <p>
                ENERG8TE™ manages charging and discharging cycles with precision,
                ensuring optimal battery performance and extended lifespan, and
                crucial for extending lifespan and maximizing your energy
                storage investment.
              </p>
            </div>

            {/* 2) GRID INTERACTION AND COMPLIANCE */}
            <div
              className="
                p-4 
                lg:p-6 
                pb-0 
                md:pb-4 
                md:border-b 
                border-[#016DFF] 
                font-semibold 
                xs:text-xl 
                lg:text-[1.4rem] 
                2xl:text-4xl
                2xl:pb-4
                2xl:px-0
                2xl:border-none
              "
            >
              GRID INTERACTION AND COMPLIANCE
            </div>
            <div
              className="
                p-4 
                lg:p-6 
                border-b 
                border-[#016DFF] 
                md:border-l 
                md:border-[#016DFF] 
                xs:text-lg 
                lg:text-2xl 
                font-geist 
                text-black/70 
                2xl:text-black
                2xl:font-sans
                2xl:text-[1.75rem]
                2xl:leading-[2.5rem]
                2xl:mb-4
                2xl:pb-6
                2xl:border-none
                2xl:p-0
              "
            >
              <p>
                ENERG8TE™ includes advanced grid management features like peak
                shaving, time-of-use management, and reactive power control.
                These features ensure that your energy storage system complies
                with local regulations and optimizes energy costs.
              </p>
            </div>

            {/* 3) ADVANCED CHARGING AND DISCHARGING CONTROL */}
            <div
              className="
                p-4 
                lg:p-6 
                pb-0 
                md:pb-4 
                md:border-b 
                border-[#016DFF] 
                font-semibold 
                xs:text-xl 
                lg:text-[1.4rem] 
                2xl:text-4xl
                2xl:pb-4
                2xl:px-0
                2xl:border-none
              "
            >
              ADVANCED CHARGING AND DISCHARGING CONTROL
            </div>
            <div
              className="
                p-4 
                lg:p-6 
                border-b 
                border-[#016DFF] 
                md:border-l 
                md:border-[#016DFF] 
                xs:text-lg 
                lg:text-2xl 
                font-geist 
                text-black/70 
                2xl:text-black
                2xl:font-sans
                2xl:text-[1.75rem]
                2xl:leading-[2.5rem]
                2xl:mb-4
                2xl:pb-6
                2xl:border-none
                2xl:p-0
              "
            >
              <p>
                Easily integrate with various energy sources, including solar,
                wind, and grid power, making ENERG8TE™ adaptable for both
                small-scale installations and large industrial applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------
   2) MAIN CONTENT (Unchanged from original)
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
        className="
          h-full 
          text-black 
          flex 
          flex-col 
          xl:flex-row 
          items-center 
          justify-center 
          relative 
          z-30 
          max-w-8xl 
          2xl:max-w-[1900px] 
          mx-auto 
          pb-28 
          md:pb-52 
          lg:pt-28 
          xl:pt-64 
          3xl:pt-72
        "
      >
        <div className="flex justify-start mb-6 xl:mb-0 w-full pl-8 lg:pl-14 pt-32 xl:hidden">
          <Elev8tr className="h-[4rem] xs:h-[5rem] sm:h-24 mb-12" />
        </div>
        <div className="flex justify-center mb-6 xl:mb-0">
          <Image
            src="/vertical/energ8te.webp"
            alt="BMS Controls for energy storage"
            width={1916}
            height={1145}
            className="w-full xs:max-w-full h-auto"
          />
        </div>
        <div className="xl:max-w-[50vw] mx-auto xl:w-1/2 text-left xs:px-2 lg:px-8">
          <div className="text-left px-8 pt-12 xl:pt-0">
            <Elev8tr className="h-16 sm:h-24 3xl:h-36 md:mb-5 hidden xl:block" />
            <h2 className="3xl:text-4xl text-2xl sm:text-3xl font-bold xl:mb-10 mb-6">
              THE SMART SOLUTION FOR ADVANCED ENERGY STORAGE MANAGEMENT
            </h2>
            <p className="font-medium text-xl md:text-2xl 3xl:text-3xl xl:mb-10 mb-6">
              The ENERG8TE™ ESS Controller is an advanced Energy Storage System
              management product designed to optimize the performance of Battery
              Energy Storage Systems (BESS).
            </p>
            <ul className="list-disc font-base text-lg md:text-xl xl:text-2xl 3xl:text-3xl pl-4 leading-[1.8] mb-8 xl:mb-14 xl:space-y-3 md:space-y-1">
              <li>Optimized Energy Efficiency</li>
              <li>System Reliability and Safety</li>
              <li>Flexible Integration</li>
            </ul>
            <div className="mt-10 flex gap-6 relative flex-col 4sm:flex-row items-start">
              <button
                onClick={onShowSpecs}
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
                  text-[1rem] 
                  sm:text-lg 
                  3xl:text-lg 
                  font-semibold 
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
                Features
              </button>

              <Link
                href="/pdf/ENERG8TE.pdf"
                target="_blank"
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
                  text-[1rem] 
                  sm:text-lg 
                  3xl:text-lg 
                  font-bold 
                  whitespace-nowrap 
                  cursor-pointer 
                  border-none 
                  rounded-md 
                  transition-colors 
                  duration-200 
                  ease-in-out 
                  bg-gray-100 
                  hover:bg-gray-200 
                  opacity-90 
                  hover:opacity-100 
                  text-black 
                  uppercase
                "
              >
                View brochure
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