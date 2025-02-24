"use client";
import PartnersLogo from "./PartnersLogo";

export default function Partners() {
  // list of images
  const images = [
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/infineon.webp",
    "/partners/matlab.webp",
    "/partners/tasking.webp",
    "/partners/matlab.webp",
  ];

  // Duplicate images statically for seamless scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <div className="pb-28 relative flex flex-col items-center justify-center">
      <p className="text-center mb-1 text-xl lg:text-[1.5625rem] 3xl:text-3xl font-bold uppercase pb-3 sm:pb-1">
        Trusted by partners worldwide
      </p>
      <p className="text-center mb-12 lg:text-xl font-medium 3xl:text-2xl">
        We build relationships rooted in trust, respect, and shared success.
      </p>

      <div
        className="scroller max-w-7xl"
        data-animated="true"
        data-speed="custom"
        data-direction="right"
      >
        <div className="scroller__inner flex flex-nowrap gap-8">
          {duplicatedImages.map((img, idx) => (
            <PartnersLogo image={img} key={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroller {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .scroller[data-animated="true"] {
          /* Mask to hide overflow edges */
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
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
          --_animation-direction: forwards;
        }
        /* Using "custom" speed here */
        .scroller[data-speed="custom"] {
          --_animation-duration: 40s;
        }
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
        /* Disable animation if the user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scroller[data-animated="true"] .scroller__inner {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}