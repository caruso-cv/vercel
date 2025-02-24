"use client"
import React from "react";

export default function DigitalBackground() {
  return (
    <div className="hidden 2sm:block absolute inset-0 pointer-events-none digital-background">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Define the pattern of small grey dots */}
          <pattern id="dotPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" fill="gray" fillOpacity="0.25" />
          </pattern>

          {/* Bottom Left Corner Gradient */}
          <radialGradient id="cornerGradientBL" cx="0%" cy="100%" r="140%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Top Right Corner Gradient */}
          <radialGradient id="cornerGradientTR" cx="100%" cy="0%" r="100%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Bottom Right Corner Gradient */}
          <radialGradient id="cornerGradientBR" cx="100%" cy="100%" r="140%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Middle Right Gradient */}
          <radialGradient id="middleRightGradient" cx="85%" cy="50%" r="30%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Create a mask combining the gradients */}
          <mask id="fadeMask">
            {/* Start with a solid black rectangle (meaning fully masked out initially) */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />

            {/* Bottom Left Corner */}
            <rect x="0" y="50%" width="50%" height="50%" fill="url(#cornerGradientBL)" />

            {/* Top Right Corner */}
            <rect x="50%" y="0" width="50%" height="50%" fill="url(#cornerGradientTR)" />

            {/* Bottom Right Corner */}
            <rect x="50%" y="50%" width="50%" height="50%" fill="url(#cornerGradientBR)" />

            {/* Middle Right Gradient */}
            <rect x="55%" y="0" width="45%" height="100%" fill="url(#middleRightGradient)" />
          </mask>
        </defs>

        {/* Apply the dot pattern and mask to fill the whole screen */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#dotPattern)"
          mask="url(#fadeMask)"
        />
      </svg>
    </div>
  );
}