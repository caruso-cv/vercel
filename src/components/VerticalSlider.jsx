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
    "lg:sticky top-[65px] lg:h-[calc(100vh-80px)] bg-[#E8E8E8] lg:bg-white text-black z-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:rounded-4xl lg:mx-4 py-20 xl:py-0 2xl:px-[90px] 3xl:px-40",
    containerClasses: "lg:w-2/3 3xl:w-1/2 text-left px-8 pt-0 sm:pt-4 lg:pt-0",
    topNote: {
      className:
        "",
    },
    logo: <Energate className="h-14 xs:h-16 sm:h-24 3xl:h-28 md:mb-1" />,
    logoClasses: 'mb-12',
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
      src: "/vertical/energ8te-box-hero.webp",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER TWO
  {
    id: "ecu8tr",
    sectionClasses:
    "lg:sticky top-[85px] lg:h-[calc(100vh-112px)] bg-[#E8E8E8] lg:bg-gray-100 text-black z-30 flex flex-col-reverse lg:flex-row items-center justify-center lg:rounded-4xl lg:mx-8 py-20 xl:py-0 lg:mb-4 2xl:px-[90px] 3xl:px-40 mt-4 lg:mt-0",
    containerClasses: "lg:w-1/2 text-left px-8 pt-0 sm:pt-4 lg:pt-0 ",
    topNote: {
      className:
        "text-[#E00000] font-bold lg:text-[14px] text-[.75rem] tracking-[6px] mb-6 3xl:text-lg",
    },
    logo: <Equ8ter className="h-14 xs:h-16 sm:h-24 3xl:h-28 md:mb-1" />,
    logoClasses: '',
    heading: (
      <>
      Battery factory point tester
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
      src: "/vertical/ecu8tr-box.webp",
      alt: "Emula8tr ESS Controller",
    },
  },

  // LAYER THREE
  {
    id: "elev8tr",
    sectionClasses:
    "lg:sticky top-[105px] lg:h-[calc(100vh-144px)] bg-[#E8E8E8] lg:bg-[#E2E2E2] text-black z-40 flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:rounded-4xl lg:mx-12 py-20 xl:py-0 lg:mb-8 2xl:px-[90px] 3xl:px-40 mt-4 lg:mt-0",
    containerClasses: "lg:w-2/3 3xl:w-1/2 text-left px-8 pt-0 sm:pt-4 lg:pt-0",
    topNote: {
      className:
        "",
    },
    logo: <Elev8tr className="h-14 xs:h-16 sm:h-24 3xl:h-28 md:mb-1" />,
    logoClasses: 'mb-12',
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
      src: "/vertical/elev8tr.webp",
      alt: "Emula8tr ESS Controller",
    },
  },
];

export default function VerticalSlider() {
  return (
    <div className="relative w-full lg:h-[calc(350vh-144px)] bg-white lg:bg-[#090A0B] lg:rounded-t-4xl">
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
        <h2 className="lg:text-[40px] text-3xl font-semibold mb-10 3xl:mb-10 3xl:text-[45px] leading-[1.2]">
            OUR VISION
          </h2>
          <p className="text-[20px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[28px] leading-[28px] lg:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] text-left mb-10 ">
            Our vision is to transform how {" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              energy is managed
            </span>{" "}
              and{" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
              batteries are produced.
            </span>
          </p>
          <p className="text-[20px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[28px] leading-[28px] lg:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] text-left mb-10 ">
          We’re focused on delivering cutting-edge battery management and control solutions that prioritize {" "}
            <span className="px-[2.5px] bg-[#435FE1] rounded-sm">
            efficiency, safety, and sustainability.
            </span>
          </p>
          <p className="text-[20px] lg:text-[20px] 2xl:text-[24px] 3xl:text-[28px] leading-[28px] lg:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] text-left ">
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
        
        
        
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row lg:items-center justify-center">

          {/* Mobile-only logo – placed at the very top for mobile */}
          <div className={`${item.logoClasses} order-first lg:hidden px-[32px]`}>
            {item.logo}
          </div>


          {/* Image side remains in its original mobile order */}
          {item.image && (
            <div className={`${item.imageClasses} order-first lg:order-last flex justify-center mb-[24px] lg:mb-0`}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={1200}
                height={800}
                quality={20}
                className="w-full max-w-full lg:max-w-[50vw] h-auto"
              />
            </div>
          )}
          
          {/* Text side – logo hidden on mobile so it doesn’t duplicate */}
          <div className={`${item.containerClasses} order-last lg:order-first`}>
            <div className="hidden lg:block">
              {item.logo}
            </div>
            {item.topNote && (
              <p className={`${item.topNote.className} text-[#E00000] font-bold lg:text-[14px] text-[12px] tracking-[6px] mb-[24px] 2xl:text-[18px] leading-[18px]`}>
                {item.topNote.text}
              </p>
            )}
            <h2
              style={{ lineHeight: "1.2" }}
              className={`${item.headingClasses} 2xl:text-[30px] text-[1.3rem] sm:text-[30px] font-bold mb-[24px] uppercase text-pretty`}
            >
              {item.heading}
            </h2>
            {item.paragraphs?.map((para, idx) => (
              <p
                key={idx}
                style={{ lineHeight: "1.5" }}
                className={`${para.className} font-base text-[1.1rem] sm:text-[20px] md:text-[24px] 2xl:text-[24px] xl:mb-[40px] mb-[24px] leading-[30px] md:leading-[36px]`}
              >
                {para.text}
              </p>
            ))}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="list-disc font-light text-[1.1rem] md:text-[20px] xl:text-[24px] 2xl:text-[24px] pl-[16px] sm:leading-[32px] mb-[32px] lg:mb-[56px] xl:space-y-[12px] md:space-y-[4px]">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <Link href={item.link.href} passHref>
                <motion.div className="inline-flex items-center justify-center gap-[8px] min-h-[40px] sm:min-h-[48px] px-[12px] sm:px-[24px] py-[6px] text-[16px] sm:text-[18px] 2xl:text-[18px] font-semibold leading-[16px] tracking-[0.2px] whitespace-nowrap cursor-pointer border-none rounded-md transition-colors duration-200 ease-in-out bg-[#000] hover:bg-[#343434] shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)] opacity-90 hover:opacity-100 text-white uppercase">
                  <span>{item.link.label}</span>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>
    ))}
    </div>
  );
}