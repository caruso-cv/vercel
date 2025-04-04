import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import NavLogo from "@/components/logos/Logo";
import NavLinks from "./NavLinks";
import ContactButton from "./ContactButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MinimalNav from "@/components/nav/MinimalNav";

export default function DesktopNav() {
  const navRef = useRef(null);
  const DESKTOP_NAV_HEIGHT = 106;
  const [showMinimalNav, setShowMinimalNav] = useState(false);

  const pathname = usePathname();
  const isSolutionsPage = pathname.startsWith("/solutions");

  // Minimal nav shows when scrolling past the main nav
  useEffect(() => {
    function handleScroll() {
      if (!navRef.current) return;
      const scrolledPast = window.scrollY > navRef.current.getBoundingClientRect().height;
      setShowMinimalNav(scrolledPast);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopBackground = "linear-gradient(to left, #07080a, rgba(0,0,0,0.6))";

  return (
    <>
      {/* Minimal nav (desktop only) */}
      <AnimatePresence>{showMinimalNav && <MinimalNav />}</AnimatePresence>

      <header
        ref={navRef}
        className="fixed lg:absolute top-0 left-0 w-full z-50 lg:pt-0"
        suppressHydrationWarning
      >
        <motion.div
          initial={{
            opacity: 0,
            height: DESKTOP_NAV_HEIGHT,
            background: pathname === '/' 
              ? 'transparent'
              : isSolutionsPage 
                  ? "linear-gradient(to bottom, #0f0e0e, #0f0e0e)"
                  : desktopBackground,
          }}
          animate={{
            opacity: 1,
            height: DESKTOP_NAV_HEIGHT,
            background: pathname === '/' 
              ? 'transparent'
              : isSolutionsPage 
                  ? "linear-gradient(to bottom, #0f0e0e, #0f0e0e)"
                  : desktopBackground,
          }}
          transition={{
            opacity: { duration: 0.3, ease: "easeOut" },
            height: { duration: 0.3, ease: "easeOut" },
            background: { duration: 0 },
          }}
          className={`${pathname === '/' ? '' : 'backdrop-blur-[200px]'} w-full py-6 flex flex-col relative z-50`}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mx-auto max-w-8xl w-full px-6 2xl:px-0">
            <div className="flex items-center relative">
            <Link 
              href="/" 
              className="w-44 absolute -top-3 left-0 lg:static lg:top-auto lg:left-auto" 
              aria-label="Neutron Controls Logo"
            >
              <NavLogo className="text-white" />
            </Link>
              <div className="hidden lg:flex flex-1 justify-center">
                <NavLinks />
              </div>
              <div className="flex items-center ml-auto">
                <ContactButton className="hidden lg:block" />
                {/* On desktop the mobile hamburger isn’t rendered */}
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}