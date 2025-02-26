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
      "lg:sticky top-4 lg:h-[calc(100vh-32px)] bg-white text-black z-20 flex flex-col-reverse lg:flex-row items-center justify-center lg:rounded-4xl lg:mx-4 py-20 xl:py-0 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-1/2 text-left px-12 lg:max-w-[50vw] pt-12 lg:pt-0",
    logo: <Energate className="h-12 md:h-24 3xl:h-36 mb-10 md:mb-14" />,
    heading: "THE SMART SOLUTION FOR ADVANCED ENERGY STORAGE MANAGEMENT",
    headingClasses:
      "3xl:text-6xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6",
    paragraphs: [
      {
        text: `The ENERG8TE™ ESS Controller is an advanced Energy Storage System management product designed to optimize the performance of Battery Energy Storage Systems (BESS).`,
        className: "md:text-2xl text-xl xl:mb-10 mb-6 3xl:text-3xl",
      },
    ],
    bullets: [
      "Optimized Energy Efficiency",
      "System Reliability and Safety",
      "Flexible Integration",
    ],
    link: {
      href: "/solutions/ecu8tr",
      label: "Find out more",
    },
    image: {
      src: "/vertical/ENERG8TE-box.webp",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER TWO
  {
    id: "gray-layer",
    sectionClasses:
      "lg:sticky top-8 lg:h-[calc(100vh-64px)] bg-gray-100 text-black z-30 flex flex-col-reverse lg:flex-row items-center justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-1/2 text-left px-12 lg:max-w-[50vw] pt-12 lg:pt-0",
    topNote: {
      className:
        "text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 3xl:text-lg",
    },
    logo: <Equ8ter className="h-12 md:h-24 3xl:h-36 mb-10 md:mb-14" />,
    heading: "POWERING PRECISION: REVOLUTIONIZING QUALITY CONTROL",
    headingClasses:
      "3xl:text-6xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6",
    paragraphs: [
      {
        text: `ECU8TR™ is a cutting-edge tester crafted for the verification of cell monitor operations within battery modules or packs.`,
        className: "2xl:text-2xl text-xl xl:mb-10 mb-6 3xl:text-3xl",
      },
    ],
    bullets: [
      "Precision Monitoring",
      "ISO SPI and ISO UART compatible",
      "Quality Management",
    ],
    link: {
      href: "/solutions/energ8te",
      label: "Find out more",
    },
    image: {
      src: "/vertical/ecu8tr.webp",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER THREE
  {
    id: "white-layer-2",
    sectionClasses:
      "lg:sticky top-12 lg:h-[calc(100vh-96px)] bg-[#E2E2E2] text-black z-40 flex flex-col-reverse lg:flex-row items-center justify-center lg:rounded-4xl lg:mx-12 py-20 xl:py-0 lg:mb-8 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-1/2 text-left px-12 lg:max-w-[50vw] pt-12 lg:pt-0",
    topNote: {
      className:
        "text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 3xl:text-lg",
    },
    logo: <Elev8tr className="h-12 md:h-24 3xl:h-36 mb-10 md:mb-14" />,
    heading: "THE COMPLETE PLATFORM FOR ACCELERATING BMS ALGORITHM DEVELOPMENT",
    headingClasses:
      "3xl:text-6xl 2xl:text-4xl text-3xl font-bold xl:mb-10 mb-6",
    paragraphs: [
      {
        text: `ELEV8TR™ is a comprehensive package of automotive development tools designed for OEMs looking to fast-track their Battery Management System (BMS) algorithms.`,
        className: "2xl:text-2xl text-xl xl:mb-10 mb-6 3xl:text-3xl",
      },
    ],
    bullets: [
      "All-in-One Simulation Solution",
    ],
    link: {
      href: "/solutions/energ8te",
      label: "Find out more",
    },
    image: {
      src: "/vertical/elev8tr.webp",
      alt: "Emula8tr ESS Controller",
    },
  },
];

export default function VerticalSlider() {
  return (
    <div className="relative w-full lg:h-[350vh] bg-[#090A0B] lg:rounded-t-4xl">
      {/* -----------------------
          BLACK LAYER (pinned)
          ----------------------- */}
      <section
        className="
          lg:sticky 
          lg:h-[50vh] 
          top-0 
          text-white 
          z-10 
          flex 
          items-center 
          justify-center 
          lg:rounded-t-4xl 
          lg:py-24 
          py-12
        "
      >
        <div className="max-w-4xl p-8 text-center 3xl:max-w-5xl">
          <h2 className="lg:text-[2.5rem] text-2xl font-semibold mb-10 3xl:mb-14 3xl:text-[3.4rem] leading-[1]">
            ADVANCED DEVELOPMENT SOLUTIONS
          </h2>
          <p className="lg:text-2xl text-lg text-left mb-10 3xl:text-3xl">
            Our Advanced Development Solutions streamline your processes while
            ensuring compliance with{" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              safety
            </span>{" "}
            and{" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              security
            </span>{" "}
            standards.
          </p>
          <p className="lg:text-2xl text-lg text-left mb-10 3xl:text-3xl">
            Supported by a team of global engineering experts, our tools can be
            used in a variety of environments to provide you and your team the
            spark needed to{" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              accelerate
            </span>{" "}
            your initiatives.
          </p>
          <p className="lg:text-2xl text-lg text-left 3xl:text-3xl">
            Advanced&nbsp;
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">BMS</span>{" "}
            controllers for&nbsp;
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              ESS/BESS
            </span>{" "}
            installations.
          </p>
        </div>
      </section>

      {/* -----------------------------------------
          MAP OVER THE OTHER PINNED SECTIONS
         ----------------------------------------- */}
      {pinnedSections.map((item) => (
        <section key={item.id} id={item.id} className={item.sectionClasses}>
          <div className={item.containerClasses}>
            {/* Optional Logo */}
            {item.logo && item.logo}

            {/* Optional "top note" (red text in gray layer) */}
            {item.topNote && (
              <p className={item.topNote.className}>{item.topNote.text}</p>
            )}

            {/* Heading */}
            <h2 className={item.headingClasses}>{item.heading}</h2>

            {/* Paragraphs */}
            {item.paragraphs?.map((para, idx) => (
              <p key={idx} className={para.className}>
                {para.text}
              </p>
            ))}

            {/* Bullets */}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="list-disc font-semibold md:text-2xl text-lg pl-4 leading-[1.8] lg:mb-12 mb-8 xl:space-y-3 pb-4 3xl:text-3xl">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* CTA Link */}
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
                    3xl:text-lg
                    font-medium 
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
                  <span>{item.link.label}</span>
                </motion.div>
              </Link>
            )}
          </div>

          {/* Image side */}
          {item.image && (
            <div className="flex justify-center mb-6 lg:mb-0">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={1200}
                height={800}
                className="w-full max-w-full lg:max-w-[50vw] h-auto"
              />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}