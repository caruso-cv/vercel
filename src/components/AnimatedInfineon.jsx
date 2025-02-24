'use client'
import React, { useEffect, useRef, useState } from "react";
import InfineonIcon from "@/components/icons/Infineon";

// Custom hook to determine if screen width is below 640px
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Safe-guard for SSR
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    setIsSmall(mediaQuery.matches);

    const handleChange = (e) => setIsSmall(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isSmall;
}

export default function AnimatedInfineon({ className = "", ...props }) {
  // 1. Always call the hook
  const isSmallScreen = useIsSmallScreen();

  // 2. Always set up refs and state, even if you won't use them on small screens
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If it's a small screen, skip the intersection observer logic
    if (isSmallScreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isSmallScreen]);

  // 3. Conditionally render based on screen size,
  // but do NOT conditionally call hooks
  if (isSmallScreen) {
    return <InfineonIcon className={className} {...props} />;
  }

  return (
    <div
      ref={containerRef}
      className={`animate-svg ${inView ? "active" : ""} w-full h-full flex items-center justify-center`}
    >
      <InfineonIcon className={className} {...props} />
    </div>
  );
}