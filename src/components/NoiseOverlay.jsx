"use client";
import React from "react";

export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          {/* fractalNoise or turbulence */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.4"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          opacity=".2" // Adjust for visibility
        />
      </svg>
    </div>
  );
}