"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Down from "@/components/icons/Down";
import RightArrow from "@/components/icons/RightArrow";
import Equ8ter from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";
import Elev8tr from "@/components/logos/ELEV8TR";
import Link from "next/link";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  // Ref on the <li> that wraps the "Solutions" link + dropdown
  const dropdownContainerRef = useRef(null);

  // Close dropdown if click is outside the dropdown container
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Framer Motion variants
  const parentVariants = {
    rest: { backgroundColor: "rgba(0, 0, 0, 0)" },
    hover: { backgroundColor: "#1E2020" },
  };

  const logoVariants = {
    rest: { opacity: 0.6 },
    hover: { opacity: 1 },
  };

  const arrowVariants = {
    rest: { opacity: 0, x: 0 },
    hover: { opacity: 1, x: 5 },
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-center gap-12 list-none m-0 p-0 text-[#C7C2BE]">
        {/* Wrap "Solutions" + Dropdown in a single <li> with a ref */}
        <li ref={dropdownContainerRef} className="relative">
          <div
            className="text-[0.85rem] 4xl:text-sm uppercase tracking-[3px] font-semibold hover:text-white inline-flex items-center cursor-pointer "
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            Solutions
            <motion.div
              className="w-4 h-4 ml-1 flex items-center justify-center"
              animate={{
                rotate: isOpen ? -180 : 0,
                y: isOpen ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Down className="w-full h-full fill-current" />
            </motion.div>
          </div>

          {/* Dropdown */}
          <motion.ul
            className={`
              absolute top-10 -left-6 
              text-white
              border-[#222326] border
              bg-gradient-to-tr from-[#090909] to-[#181818]
              shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)]
              backdrop-blur-[40px] 
              text-base
              w-64
              rounded-xl
              transition-all 
              duration-150
              ${isOpen ? "block" : "hidden"}
            `}
          >
            <li>
              <Link
                href="/solutions/ecu8tr"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={parentVariants}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 mx-3 py-4 mt-3 rounded-lg text-white cursor-pointer"
                >
                  <motion.div
                    variants={logoVariants}
                    transition={{ duration: 0.2 }}
                    className="mr-2"
                  >
                    <Equ8ter className="h-8" />
                  </motion.div>
                  <motion.div
                    variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <RightArrow className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/elev8tr"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={parentVariants}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 mx-3 py-4 rounded-lg text-white cursor-pointer"
                >
                  <motion.div
                    variants={logoVariants}
                    transition={{ duration: 0.2 }}
                    className="mr-2"
                  >
                    <Elev8tr className="h-8" />
                  </motion.div>
                  <motion.div
                    variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <RightArrow className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </li>
            <li>
              <Link
                href="/solutions/energ8te"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={parentVariants}
                  transition={{ duration: 0.2 }}
                  className="flex items-center px-4 mx-3 mb-3 py-4 rounded-lg text-white cursor-pointer"
                >
                  <motion.div
                    variants={logoVariants}
                    transition={{ duration: 0.2 }}
                    className="mr-2"
                  >
                    <Energate className="h-8" />
                  </motion.div>
                  <motion.div
                    variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <RightArrow className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </li>
          </motion.ul>
        </li>

        <li>
          <Link
            href="/services"
            className="text-[0.85rem] 4xl:text-sm uppercase tracking-[3px] font-semibold hover:text-white"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-[0.85rem] 4xl:text-sm uppercase tracking-[3px] font-semibold hover:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className="text-[0.85rem] 4xl:text-sm uppercase tracking-[3px] font-semibold hover:text-white"
          >
            Careers
          </Link>
        </li>
      </ul>
    </nav>
  );
}