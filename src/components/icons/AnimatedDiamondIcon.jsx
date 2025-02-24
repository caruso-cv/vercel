'use client'
import React, { useEffect, useRef, useState } from "react";
import DiamondIcon from "@/components/icons/Parameter.jsx"; 

export default function AnimatedDiamondIcon() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`my-icon-anim ${active ? "active" : ""}`}>
      <DiamondIcon />
    </div>
  );
}