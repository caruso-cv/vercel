"use client";
import PartnersLogo from "./PartnersLogo";

export default function Partners() {
  // list of images
  const images = [
    { src: "/partners/infineon.webp", alt: "Infineon" },
    { src: "/partners/mathworks.webp", alt: "MathWorks" },
    { src: "/partners/tasking.webp", alt: "Tasking" },
    { src: "/partners/npx.webp", alt: "NPX" },
    { src: "/partners/infineon.webp", alt: "Infineon" },
    { src: "/partners/jabil.webp", alt: "Jabil" },
    { src: "/partners/analog.webp", alt: "Analog Devices" },
  ];

  // Duplicate images statically for seamless scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <section aria-labelledby="partners-heading" className="pb-28 relative flex flex-col items-center justify-center">
      <h2 id="partners-heading" className="text-center mb-1 text-[24px] leading-[32px] lg:text-[30px] lg:leading-[38px] 3xl:text-[30px] 3xl:leading-[38px] font-bold uppercase pb-3 sm:pb-1 px-4">
        Trusted by partners worldwide
      </h2>
      <p className="text-center mb-12 text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] 3xl:text-[24px] 3xl:leading-[32px] font-medium ">
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
            <PartnersLogo image={img.src} alt={img.alt} key={idx} />
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
    </section>
  );
}