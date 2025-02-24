"use client";
import React, { useEffect, useRef, useState } from "react";
import TopRight from "@/components/icons/TopRight";

export default function SecondaryNav({ setSecondaryNavReady }) {
  const [isReady, setIsReady] = useState(false);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Check for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Immediately mark as ready without animation
      setIsReady(true);
      if (setSecondaryNavReady) setSecondaryNavReady(true);
      return;
    }

    // Duplicate the marquee items
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerItems = Array.from(scrollerInner.children);

    scrollerItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });

    // Enable marquee animation
    scroller.setAttribute("data-animated", "true");

    // Once duplication is done, mark as ready
    setIsReady(true);
    if (setSecondaryNavReady) setSecondaryNavReady(true);
  }, [setSecondaryNavReady]);

  return (
    <div className="3md:px-4 hidden lg:block relative z-20">
      <div
        className={`noise-bg sm:h-11 h-[2px] flex items-center text-white text-sm 3md:rounded-b-lg max-w-8xl mx-auto transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <div ref={scrollerRef} className="scroller" data-speed="slow" data-direction="right">
          <ul className="scroller__inner">
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
            <MarqueeItem />
          </ul>
        </div>
      </div>

      <style jsx>{`
        .noise-bg {
          position: relative;
          background: transparent;
          border-bottom-radius: 20px;
          padding: 20px;
          overflow: hidden;
          transition: opacity 0.7s ease, color 0.3s ease;
          z-index: 1;
          color: #bdbdbd;
        }
        .noise-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(67, 95, 225, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: inherit;
          z-index: -1;
        }
        .noise-bg:hover {
          color: white;
          cursor: pointer;
        }
        .scroller {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .scroller__inner {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        .scroller[data-animated="true"] {
          -webkit-mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
          mask: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
        }
        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }
        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }
        .scroller[data-direction="left"] {
          --_animation-direction: normal;
        }
        .scroller[data-speed="fast"] {
          --_animation-duration: 20s;
        }
        .scroller[data-speed="slow"] {
          --_animation-duration: 120s;
        }
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function MarqueeItem() {
  return (
    <li className="inline-block whitespace-nowrap font-semibold sm:text-[15px] text-[12px]">
      INTERSOLAR | Event Feb 25–27, 2025
      <a
        href="https://www.intersolar.us/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline pr-8 pl-12 font-normal"
        style={{ textUnderlineOffset: "6px" }}
      >
        Learn more <TopRight className="inline-block w-4 h-4 mb-1" />
      </a>
    </li>
  );
}