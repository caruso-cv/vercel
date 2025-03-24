"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the DesktopSlider, disabling SSR and without any loading fallback.
const DesktopSlider = dynamic(() => import("./DesktopSlider"), {
  ssr: false,
  loading: () => null,
});

export default function SliderWrapper() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // For mobile devices, return null so nothing displays.
  return isDesktop ? <DesktopSlider /> : null;
}