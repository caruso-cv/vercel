"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLogo from "@/components/logos/Logo";
import Elev8tr from "@/components/logos/ELEV8TR";
import Equ8tr from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";

export default function MobileNav({ isOpen, setIsOpen }) {
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    setScrollBarWidth(width);
    if (isOpen && window.innerHeight >= 530) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${width}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-120 bg-[#0E0E0E]/90 backdrop-blur-2xl">
      {/* Container transitions height from 85px to full screen */}
      <div
        className={`w-full py-6 flex flex-col relative z-50 border-b border-[#111213] transition-[height] duration-300 ease-in-out ${isOpen ? "h-screen" : "h-[85px]"} ${isOpen && windowHeight < 530 ? "overflow-auto" : "overflow-hidden"}`}
      >
        <div className="mx-auto max-w-8xl w-full px-6 2xl:px-0">
          <div className="flex items-center relative">
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="w-44 absolute -top-3 left-0 text-white transition-opacity duration-100 ease-in-out" style={ isOpen ? { opacity: 0}: {}}>
                <NavLogo />
              </div>
            </Link>

            {/* Hamburger button */}
            <div className="flex items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                // Apply a transform to shift the button left by the scrollbar width when open
                style={isOpen ? { transform: `translateX(-${scrollBarWidth}px)` } : {}}
                className="p-4 absolute -top-2 -right-4"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block h-[2px] bg-white transition-all duration-300 ${isOpen ? "top-[8px] w-0 left-[50%]" : "top-0 w-full left-0"}`}></span>
                  <span className={`absolute block h-[2px] bg-white transition-all duration-300 origin-center top-[8px] w-full left-0 ${isOpen ? "rotate-45" : ""}`}></span>
                  <span className={`absolute block h-[2px] bg-white transition-all duration-300 origin-center top-[8px] w-full left-0 ${isOpen ? "-rotate-45" : ""}`}></span>
                  <span className={`absolute block h-[2px] bg-white transition-all duration-300 ${isOpen ? "top-[8px] w-0 left-[50%]" : "top-[16px] w-full left-0"}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav – conditionally rendered */}
        {isOpen && (
          <nav className="w-full  flex flex-col items-start justify-start ml-12 mt-16">
            {/* Company Links */}
            <div className="flex flex-col items-start mb-16">
              <div className="flex flex-col space-y-4 text-xl uppercase tracking-[3px] font-semibold text-white">
                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/careers" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>

            {/* Solutions Icons */}
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium mb-6 text-white/70 uppercase tracking-[7px]">
                Solutions
              </p>
              <div className="flex flex-col gap-3 -ml-2">
                <Link href="/solutions/ecu8tr" onClick={() => setIsOpen(false)}>
                  <Equ8tr className="h-10 text-white sm:opacity-60 hover:opacity-100 transition-all" />
                </Link>
                <Link href="/solutions/elev8tr" onClick={() => setIsOpen(false)}>
                  <Elev8tr className="h-10 text-white sm:opacity-60 hover:opacity-100 transition-all" />
                </Link>
                <Link href="/solutions/energ8te" onClick={() => setIsOpen(false)}>
                  <Energate className="h-10 text-white sm:opacity-60 hover:opacity-100 transition-all" />
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}