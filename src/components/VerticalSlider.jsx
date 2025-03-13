"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Equ8ter from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";
import Elev8tr from "@/components/logos/ELEV8TR";



const pinnedSections = [

  // LAYER ONE
  {
    id: "get-started",
    sectionClasses:
    "lg:sticky top-[80px] lg:h-[calc(100vh-80px)] bg-white text-black z-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:rounded-4xl lg:mx-4 py-20 xl:py-0 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-2/3 3xl:w-1/2 text-left px-8 pt-12 lg:pt-0",
    topNote: {
      className:
        "",
    },
    logo: <Energate className="h-14 sm:h-24 3xl:h-28 md:mb-1" />,
    heading: (
      <>
       BMS CONTROLLER FOR BESS/ESS
      </>
    ),
    headingClasses:
      "",
    paragraphs: [
      {
        text: `The ENERG8TE™ ESS Controller is an advanced Energy Storage System management product designed to optimize the performance of Battery Energy Storage Systems (BESS).`,
        className: "",
      },
    ],
    bullets: [
      "Optimized Energy Efficiency",
      "System Reliability and Safety",
      "Flexible Integration",
    ],
    link: {
      href: "/solutions/energ8te",
      label: "Find out more",
    },
    imageClasses:'px-2 max-w-3xl',
    image: {
      src: "/vertical/energ8te-box.png",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER TWO
  {
    id: "ecu8tr",
    sectionClasses:
    "lg:sticky top-[96px] lg:h-[calc(100vh-112px)] bg-gray-100 text-black z-30 flex flex-col-reverse lg:flex-row items-center justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-1/2 text-left px-8 pt-12 lg:pt-0",
    topNote: {
      className:
        "text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 3xl:text-lg",
    },
    logo: <Equ8ter className="h-14 sm:h-24 3xl:h-28 md:mb-1" />,
    heading: (
      <>
        <span className="hidden sm:inline">
        Battery factory point tester
        </span>{" "}
  
      </>
    ),
    headingClasses:
      "",
    paragraphs: [
      {
        text: `ECU8TR™ is a cutting-edge battery factory point tester designed to ensure production quality.`,
        className: "",
      },
    ],
    bullets: [
      "Precision Monitoring",
      "ISO SPI and ISO UART Compatible",
      "Quality Management",
    ],
    link: {
      href: "/solutions/ecu8tr",
      label: "Find out more",
    },
    imageClasses:'max-w-3xl',
    image: {
      src: "/vertical/ecu8tr-box.png",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER THREE
  {
    id: "elev8tr",
    sectionClasses:
    "lg:sticky top-[112px] lg:h-[calc(100vh-144px)] bg-[#E2E2E2] text-black z-40 flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:rounded-4xl lg:mx-12 py-20 xl:py-0 lg:mb-8 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-2/3 3xl:w-1/2 text-left px-8 pt-12 lg:pt-0",
    topNote: {
      className:
        "",
    },
    logo: <Elev8tr className="h-14 sm:h-24 3xl:h-28 md:mb-1" />,
    heading: (
      <>
        <span className="hidden sm:inline">
        THE COMPLETE PLATFORM FOR
        </span>{" "}
        ACCELERATING BMS ALGORITHM DEVELOPMENT
      </>
    ),
    headingClasses:
      "",
    paragraphs: [
      {
        text: `ELEV8TR™ is a comprehensive package of advanced embedded development tools designed for OEMs looking to fast-track their Battery Management System (BMS) algorithms.`,
        className: "",
      },
    ],
    bullets: [
      "All-in-One Simulation Solution",
    ],
    link: {
      href: "/solutions/elev8tr",
      label: "Find out more",
    },
    imageClasses:'',
    image: {
      src: "/vertical/elev8tr.png",
      alt: "Emula8tr ESS Controller",
    },
  },
];

export default function VerticalSlider() {
  return (
    <div className="relative w-full lg:h-[calc(350vh-144px)] bg-[#090A0B] lg:rounded-t-4xl">
      {/* -----------------------
          BLACK LAYER (pinned)
          ----------------------- */}
      <section
        className="
          3xl:h-[50vh] 
          2xl:h-[55vh]
          lg:h-[50vh] 
          top-0 
          text-white 
          z-10 
          items-center 
          justify-center 
          lg:rounded-t-4xl 
          lg:py-24 
          py-12
          hidden lg:flex
        "
      >
        <div className="max-w-4xl p-8 text-center 3xl:max-w-5xl">
          <h2 className="lg:text-[2.5rem] text-3xl font-semibold mb-10 3xl:mb-10 3xl:text-[2.8rem] leading-[1.2]">
            OUR VISION
          </h2>
          <p className="lg:text-xl 2xl:text-2xl text-xl text-left mb-10 3xl:text-3xl">
            Our vision is to transform how {" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              energy is managed
            </span>{" "}
              and{" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              batteries are produced.
            </span>
          </p>
          <p className="lg:text-xl 2xl:text-2xl text-xl text-left mb-10 3xl:text-3xl">
          We’re focused on delivering cutting-edge battery management and control solutions that prioritize {" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
            efficiency, safety, and sustainability.
            </span>
          </p>
          <p className="lg:text-xl 2xl:text-2xl text-xl text-left 3xl:text-3xl">
          By combining innovative engineering with a commitment to quality, we help our clients lead the way in&nbsp;
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">energy controls</span>{" "}
            and&nbsp;
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
            industrial automation.
            </span>
          </p>
        </div>
      </section>

      {/* -----------------------------------------
          MAP OVER THE OTHER PINNED SECTIONS
         ----------------------------------------- */}
      {pinnedSections.map((item) => (
  <section key={item.id} id={item.id} className={item.sectionClasses}>
    {/* New wrapper for text and image content only */}
    <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-center">
      {/* Text side */}
      <div className={item.containerClasses}>
        {item.logo && item.logo}
        {item.topNote && (
          <p className={`${item.topNote.className} text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 2xl:text-lg`}>
            {item.topNote.text}
          </p>
        )}
        <h2
          style={{ lineHeight: "1.2" }}
          className={`${item.headingClasses} 2xl:text-3xl text-2xl sm:text-3xl font-bold mb-6 uppercase text-pretty`}
        >
          {item.heading}
        </h2>
        {item.paragraphs?.map((para, idx) => (
          <p
            key={idx}
            style={{ lineHeight: "1.5" }}
            className={`${para.className} font-medium text-xl md:text-2xl 2xl:text-2xl xl:mb-10 mb-6`}
          >
            {para.text}
          </p>
        ))}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="list-disc font-base text-lg md:text-xl xl:text-2xl 2xl:text-2xl pl-4 leading-[1.8] mb-8 lg:mb-14 xl:space-y-3 md:space-y-1">
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
        {item.link && (
          <Link href={item.link.href} passHref>
            <motion.div
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
                2xl:text-lg
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
                hover:bg-[#343434]
                shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                opacity-90
                hover:opacity-100
                text-white
                uppercase
              "
            >
              <span>{item.link.label}</span>
            </motion.div>
          </Link>
        )}
      </div>

      {/* Image side */}
      {item.image && (
        <div className={`${item.imageClasses} flex justify-center mb-6 lg:mb-0`}>
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={1200}
            height={800}
            className="w-full max-w-full lg:max-w-[50vw] h-auto"
          />
        </div>
      )}
    </div>
  </section>
))}
    </div>
  );
}