"use client";
import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function ResponsiveNav({ secondaryNavReady }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateNav() {
      setIsMobile(window.innerWidth < 1024);
    }
    updateNav();
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  }, []);

  return isMobile ? (
    <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
  ) : (
    <DesktopNav isOpen={isOpen} setIsOpen={setIsOpen} secondaryNavReady={secondaryNavReady} />
  );
}