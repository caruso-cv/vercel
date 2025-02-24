"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VerticalSlider() {
  return (
    // Outer container with black background and large height.
    <div className="relative w-full lg:h-[250vh] bg-[#090A0B] lg:rounded-t-4xl">
      {/* --- Black Layer (pinned) --- */}
      <section className="lg:sticky lg:h-[50vh] top-0 text-white z-10 flex items-center justify-center lg:rounded-t-4xl lg:py-24 py-12">
        <div className="max-w-3xl p-8 text-center 3xl:max-w-5xl">
          <h2 className="lg:text-[2.5rem] text-2xl font-semibold mb-10 3xl:mb-14 3xl:text-[3.4rem]">
            CUSTOM ENGINEERING SERVICES
          </h2>
          <p className="lg:text-2xl text-lg text-left mb-10 3xl:text-3xl">
            Power your energy systems with tailored{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">BMS</span> and{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">ECU</span>{" "}
            solutions designed for efficiency, reliability, and safety.
          </p>
          <p className="lg:text-2xl text-lg text-left mb-10 3xl:text-3xl">
            From electric vehicles to industrial and renewable applications, our
            expertise ensures{" "}
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">
              optimized performance
            </span>{" "}
            and extended battery life.
          </p>
          <p className="lg:text-2xl text-lg text-left 3xl:text-3xl">
            <span className=" px-[2.5px] bg-[#435FE1] rounded-sm">
              Safety is at our core,
            </span>{" "}
            with designs built to meet ISO 26262 standards and protect both
            people and environments.
          </p>
        </div>
      </section>

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
          <ul className="list-disc font-semibold 2xl:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4 3xl:text-3xl">
            <li>Precision Monitoring</li>
            <li>iso SPI and iso UART compatible</li>
            <li>Quality Management</li>
          </ul>
          <Link href="/solutions/ecu8tr" passHref>
            <motion.div
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
              <span>Find out more</span>
            </motion.div>
          </Link>
        </div>
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            src="/vertical/ecu8tr.webp"
            alt="Emula8tr ESS Controller"
            width={1200}
            height={800}
            className="w-full max-w-full lg:max-w-[50vw] h-auto"
          />
        </div>
      </section>

      {/* --- Gray Layer (pinned) --- */} 
      {/* Give it bigger margins so we see white around it */}
      <section className="lg:sticky top-8 lg:h-[calc(100vh-64px)] bg-gray-100 text-black z-30 
                          flex flex-col-reverse lg:flex-row items-center 
                          justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4 2xl:px-[90px] 3xl:px-40">
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
          <Link href="/solutions/energ8te" passHref>
            <motion.div
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
              
              <span>Find out more</span>
            </motion.div>
          </Link>
        </div>
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            src="/vertical/emula8tr.webp"
            alt="Emula8tr ESS Controller"
            width={1200}
            height={800}
            className="w-full max-w-full lg:max-w-[50vw] h-auto"
          />
        </div>
      </section>
    </div>
  );
}