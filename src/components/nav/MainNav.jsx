"use client";
import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import NavLogo from "@/components/logos/Logo";
import NavLinks from "./NavLinks";
import ContactButton from "./ContactButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Elev8tr from "@/components/logos/ELEV8TR";
import Equ8tr from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";
import MinimalNav from "@/components/nav/MinimalNav";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const dropdownContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
  exit: {},
};

const dropdownItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function MainNav({ isOpen, setIsOpen, secondaryNavReady }) {
  const navRef = useRef(null);
  const DESKTOP_NAV_HEIGHT = 106;
  const MOBILE_NAV_HEIGHT = 85;
  const dropdownExtraHeight = 410;
  const [navHeight, setNavHeight] = useState(DESKTOP_NAV_HEIGHT);
  const [isMobile, setIsMobile] = useState(false);

  // Get the current pathname for potential future logic
  const pathname = usePathname();
  const isSolutionsPage = pathname.startsWith("/solutions");

  // Adjust nav height and update mobile flag
  useEffect(() => {
    function updateNav() {
      if (window.innerWidth < 1024) {
        setNavHeight(MOBILE_NAV_HEIGHT);
        setIsMobile(true);
      } else {
        setNavHeight(DESKTOP_NAV_HEIGHT);
        setIsMobile(false);
      }
    }
    updateNav();
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  }, []);

  // Show minimal nav on desktop after scrolling past the main nav
  const [showMinimalNav, setShowMinimalNav] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (!navRef.current) return;
      const scrolledPast =
        window.scrollY > navRef.current.getBoundingClientRect().height;
      setShowMinimalNav(scrolledPast);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown on scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen]);

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  // Define your desktop background (matching the footer)
  const desktopBackground = "linear-gradient(to bottom, #07080a, rgba(0,0,0,0.7))";

  return (
    <>
      {/* Minimal nav (desktop only) once user scrolls past main nav */}
      <AnimatePresence>{showMinimalNav && <MinimalNav />}</AnimatePresence>

      <header
        ref={navRef}
        className="fixed lg:absolute top-0 left-0 w-full z-50 lg:pt-0"
        suppressHydrationWarning
      >
        {/* Overlay behind the nav if mobile menu is open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Main nav container */}
        <motion.div
          initial={{
            opacity: 0,
            height: navHeight,
            // If it's mobile, use the mobile gradient;
            // otherwise, if on solutions page => solid black,
            // else the flipped gradient
            background: isMobile
            ? "linear-gradient(to top, #0f0e0e, #0f0e0e)"
            : isSolutionsPage
            ? "linear-gradient(to bottom, #0f0e0e, #0f0e0e)"
            : desktopBackground,
          boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
        }}
        animate={{
          opacity: 1,
          height: isOpen ? navHeight + dropdownExtraHeight : navHeight,
          background: isMobile
            ? isOpen
              ? "linear-gradient(to top, #ffffff, #ffffff)"
              : "linear-gradient(to top, #0f0e0e, #0f0e0e)"
            : isOpen
            ? isSolutionsPage
              ? "linear-gradient(to bottom, #ffffff, #ffffff)"
              : "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9))"
            : isSolutionsPage
            ? "linear-gradient(to bottom, #0f0e0e, #0f0e0e)"
            : desktopBackground,
          boxShadow: isOpen
            ? "0 8px 20px rgba(0,0,0,0.3)"
            : "0 4px 4px rgba(0,0,0,0.25)",
        }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            backdrop-blur-[2000px]
            w-full 
            py-6 
            flex flex-col 
            relative z-50 
            border-[#181818] border-t border-x
          "
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mx-auto max-w-8xl w-full px-6 2xl:px-0">
          {/* Top Navigation Row */}
          <div className="flex items-center relative">
            {/* LOGO */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <motion.div
                className="
                  w-44
                  absolute -top-3 left-0
                  lg:static lg:top-auto lg:left-auto
                "
                animate={{ color: isOpen ? "#000" : "#fff", opacity: [0, 1] }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <NavLogo />
              </motion.div>
            </Link>

            {/* DESKTOP NAV LINKS (hidden on mobile) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavLinks />
            </div>

            {/* CONTACT BUTTON + MOBILE HAMBURGER */}
            <div className="flex items-center ml-auto">
              <ContactButton className="hidden lg:block" />

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  block
                  lg:hidden
                  mr-3 p-4
                  absolute -top-3 -right-4
                "
                aria-label="Toggle mobile menu"
              >
                <motion.svg
                  initial="closed"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  variants={{
                    closed: { color: "#fff" },
                    open: { color: "#000" },
                  }}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.3 }}
                >
                  <Path
                    variants={{
                      closed: { d: "M 3 6 L 21 6" },
                      open: { d: "M 4 19 L 20 5" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <Path
                    variants={{
                      closed: { d: "M 3 12 L 21 12", opacity: 1 },
                      open: { d: "M 3 12 L 21 12", opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <Path
                    variants={{
                      closed: { d: "M 3 18 L 21 18" },
                      open: { d: "M 4 5 L 20 19" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.button>
            </div>
          </div>
          </div>

          {/* Dropdown Content (mobile) */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                variants={dropdownContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => {
                  if (!e.target.closest("a")) {
                    setIsOpen(false);
                  }
                }}
                className="
                  left-8 w-full 
                  flex sm:flex-row flex-col justify-around items-stretch 
                  pt-20 sm:pt-28 pb-8 pl-6 sm:pl-0
                "
              >
                {/* Company Links */}
                <motion.div
                  variants={dropdownItemVariants}
                  className="flex flex-col"
                >
                  <p className="sm:text-lg text-sm font-bold mb-6 text-black uppercase tracking-[7px]">
                    Company
                  </p>
                  <div
                    className="
                      flex flex-col space-y-3 sm:space-y-4 
                      text-sm sm:text-base uppercase 
                      tracking-[3px] font-semibold text-gray-500
                    "
                  >
                    <Link
                      href="/services"
                      className="hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/careers"
                      className="hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  variants={dropdownItemVariants}
                  className="w-[1.5px] bg-black/10 self-stretch sm:block hidden"
                />

                {/* Solutions Icons */}
                <motion.div
                  variants={dropdownItemVariants}
                  className="flex flex-col mt-10 sm:mt-0"
                >
                  <p className="sm:text-lg text-sm font-bold mb-6 text-black uppercase tracking-[7px]">
                    Solutions
                  </p>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <Link
                      href="/solutions/ecu8tr"
                      onClick={() => setIsOpen(false)}
                    >
                      <Equ8tr className="h-8 sm:h-10 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                    </Link>
                    <Link
                      href="/solutions/elev8tr"
                      onClick={() => setIsOpen(false)}
                    >
                      <Elev8tr className="h-8 sm:h-10 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                    </Link>
                    <Link
                      href="/solutions/energ8te"
                      onClick={() => setIsOpen(false)}
                    >
                      <Energate className="h-8 sm:h-10 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out" />
                    </Link>
                  </div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  );
}