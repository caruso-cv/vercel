"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { motion } from "framer-motion"
import Link from "next/link"
import Hls from 'hls.js';
import ENERG8TE from "@/components/logos/Energate";
import ECU8TR from "@/components/logos/ECU8TR-slider";
import Energy from "@/components/icons/Energy";
import Manage from "@/components/icons/BatteryManage"

// CENTRALIZED SLIDE CONTENT
const slidesData = [
  {
    slideId: 0,
    desktop: {
      videoSrc: "https://d3jn5509arnhlw.cloudfront.net/slider/1/master.m3u8",
      poster: "/slider/12.webp",
      videoSources: [
        { src: "/vids/storage.mp4", type: "video/mp4" },
      ],
      headingIcon: <Energy className="mr-3 w-10 h-6"/>,
      headingText: "BATTERY MANAGEMENT FOR ESS/BESS INSTALLATIONS",
      bodyTextBeforeSpan: "We deliver a customizable ",
      bodyTextBeforeSpan2: "", 
      bodyTextSpan: "BMS called ENERG8TE™ for energy storage",
      bodyTextAfterSpan:
        " designed to maximize efficiency, safety, and reliability in industrial power systems.",
      ctaHref: "/solutions/energ8te",
      ctaLabel: "Explore solutions",
      ctaAriaLabel: "Explore details and specifications about ENERG8TE",
      logo: <ENERG8TE className="h-8 w-auto"/>,
      logoContainerClasses:
        "absolute bottom-36 right-6 xl:right-12 2xl:right-20 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30",
    },
    mobile: {
      image: "/slider/12.webp",
      headingIcon: <Energy className="mr-3 w-10 h-6"/>,
      headingText: "BATTERY MANAGEMENT FOR ESS/BESS INSTALLATIONS",
      bodyTextBeforeSpan: "We deliver a customizable ",
      bodyTextSpan: "BMS called ENERG8TE™ for energy storage",
      bodyTextAfterSpan:
        " designed to maximize efficiency, safety, and reliability in industrial power systems.",
      ctaHref: "/solutions/energ8te",
      ctaLabel: "Optimize Energy Storage",
      ctaAriaLabel: "Optimize energy storage solutions and learn more about ENERG8TE",
    },
  },
  {
    slideId: 1,
    desktop: {
      videoSrc: "https://d3jn5509arnhlw.cloudfront.net/slider/2/master.m3u8",
      poster: "/slider/7.webp",
      videoSources: [
        { src: "/vids/battery.mp4", type: "video/mp4" },

      ],
      headingIcon: <Manage className="w-7 mr-3" />,
      headingText: "BATTERY FACTORY LINE TESTERS",
      bodyTextBeforeSpan: "Tailored for verifying cell monitor operations within modules and packs.",
      bodyTextBeforeSpan2: "Flexible Communication:",
      bodyTextSpan: "Infineon ISO UART, Analog Devices ISO SPI, and Texas Instruments UART/SPI.",
      bodyTextAfterSpan:
        "",
      ctaHref: "/solutions/ecu8tr",
      ctaLabel: "SEE SPECIFICATIONS",
      ctaAriaLabel: "See Battery Management Specifications for ECU8TR",
      logo: <ECU8TR className="h-12 w-auto" />,
      logoContainerClasses:
        "absolute bottom-40 right-6 xl:right-10 2xl:right-20 bg-white/85 backdrop-blur-sm px-8 py-[60px] rounded-lg shadow-md border-white/30",
    },
    mobile: {
      image: "/slider/7.webp",
      headingIcon: <Manage className="w-6 mr-3" />,
      headingText: "BATTERY FACTORY LINE TESTERS",
      bodyTextBeforeSpan: "Tailored for verifying cell monitor operations within modules and packs.",
      bodyTextBeforeSpan2: "Flexible Communication:",
      bodyTextSpan: "Infineon ISO UART, Analog Devices ISO SPI, and Texas Instruments UART/SPI.",
      bodyTextAfterSpan:
        "",
      ctaHref: "/solutions/ecu8tr",
      ctaLabel: "Learn More about ECU8TR",
      ctaAriaLabel: "Learn More about ECU8TR",
    },
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Store one desktop video ref per slide
  const videoRefs = useRef([]);
  // Track which slides have had HLS initialized to avoid re-fetching
  const initializedSlides = useRef(new Set());

  // so we know when the DOM-mounted videoRefs are ready
  const [refsReady, setRefsReady] = useState(false);

  // Track slides that have been visited so once a video/image is loaded, we keep it in the DOM.
  const [visitedSlides, setVisitedSlides] = useState(() => new Set([0]))

  // Keep track of the previous slide index
  const prevSlide = useRef(currentSlide)

  // Mark as mounted after first client render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Signal that our <video> refs are now in the tree
  useEffect(() => { setRefsReady(true); }, []);

  // Initialize an array of video refs matching slidesData
  useEffect(() => {
    videoRefs.current = slidesData.map(() => null)
  }, [])

  // Initialize HLS whenever a desktop video is rendered on a large screen
  useEffect(() => {
    slidesData.forEach((slide, index) => {
      const videoEl = videoRefs.current[index];
      // Only initialize HLS once per slide
      if (videoEl && visitedSlides.has(index) && !initializedSlides.current.has(index)) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(slide.desktop.videoSrc);
          hls.attachMedia(videoEl);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoEl.play().catch(() => {});
          });
        } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
          videoEl.src = slide.desktop.videoSrc;
          videoEl.play().catch(() => {});
        }
        initializedSlides.current.add(index);
      }
    });
  }, [visitedSlides, refsReady]);

  // Ensure the very first slide plays as soon as HLS is attached
  useEffect(() => {
    if (visitedSlides.has(0) && initializedSlides.current.has(0)) {
      restartAndPlaySlide(0);
    }
  }, [visitedSlides, mounted, initializedSlides.current]);

  // Function to restart & play the desktop video at a given slide index
  const restartAndPlaySlide = useCallback((index) => {
    const vid = videoRefs.current[index]
    if (vid) {
      vid.currentTime = 0
      vid.play().catch(() => {})
    }
  }, [])

  // Initialize Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
    drag: false,
    slideChanged(slider) {
      const nextIndex = slider.track.details.rel
      setCurrentSlide(nextIndex)
      setVisitedSlides((prev) => new Set([...prev, nextIndex]))
    },
    created(slider) {
      const initialIndex = slider.track.details.rel
      setCurrentSlide(initialIndex)
      if (initialIndex === 0) {
        restartAndPlaySlide(0)
      }
    },
  })

  // Restart the new slide's desktop video on slide change
  useEffect(() => {
    if (visitedSlides.has(currentSlide) && currentSlide !== prevSlide.current) {
      restartAndPlaySlide(currentSlide)
    }
    prevSlide.current = currentSlide
  }, [currentSlide, visitedSlides, restartAndPlaySlide])

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isLargeScreen && currentSlide === 0) {
      restartAndPlaySlide(0);
    }
  }, [isLargeScreen, currentSlide, restartAndPlaySlide]);

  // RENDER
  return (
    <section className="mx-auto w-full flex justify-center">
      <div className="relative w-full max-w-8xl bg-black xl:rounded-3xl overflow-hidden z-40">
        {/* Right-side background image */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/slider/slider-bg.webp")' }}
        />

        {/* Title */}
        <h2 className="w-full text-center text-white lg:text-4xl text-2xl font-bold z-10 absolute lg:top-24 top-8">
          OUR INDUSTRY FOCUS
        </h2>

        {/* Keen Slider */}
        <div ref={sliderRef} className="keen-slider h-full w-full relative z-10">
          {slidesData.map((slide, index) => (
            <div key={slide.slideId} className="keen-slider__slide relative">
              {/* DESKTOP */}
              <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center px-4 pt-56 pb-20 w-full h-full">
                <div className="relative">
                  <div className="w-[800px] h-[450px] mr-44 mb-20">
                    {visitedSlides.has(index) && (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        muted
                        playsInline
                        preload="auto"
                        poster={slide.desktop.poster}
                        style={{ willChange: 'transform' }}
                        loop
                        autoPlay
                      />
                    )}
                  </div>

                  {/* Video Info Box */}
                  <div className="hidden lg:block absolute top-12 right-6 xl:-right-24 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
                    <h3 className="text-lg uppercase font-bold flex items-center mb-4">
                      {slide.desktop.headingIcon}
                      {slide.desktop.headingText}
                    </h3>
                    <p className="text-lg text-gray-200 mb-6 tracking-wide">
                        {slide.desktop.bodyTextBeforeSpan}
                        {slide.desktop.bodyTextBeforeSpan2 && (
                            <span className="block mt-[10px] font-semibold">
                            {slide.desktop.bodyTextBeforeSpan2}
                            </span>
                        )}
                        <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                            {slide.desktop.bodyTextSpan}
                        </span>{" "}
                        {slide.desktop.bodyTextAfterSpan}
                    </p>
                    <Link
                      href={slide.desktop.ctaHref}
                      passHref
                      tabIndex={currentSlide === index ? 0 : -1}
                      aria-label={slide.desktop.ctaAriaLabel}
                    >
                      <motion.div className="uppercase inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-sm font-bold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                        <span>{slide.desktop.ctaLabel}</span>
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Desktop Logo Overlay */}
                {slide.desktop.logo && (
                  <div className={slide.desktop.logoContainerClasses}>
                    {slide.desktop.logo}
                  </div>
                )}
              </div>

              {/* MOBILE */}
              <div className="lg:hidden flex flex-col items-center w-full px-4 pt-24 pb-8">
                <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                  <div className="relative w-full aspect-video">
                    {visitedSlides.has(index) && (
                      <Image
                        src={slide.mobile.image}
                        alt={slide.mobile.headingText}
                        fill
                        loading="lazy"
                        className="object-cover border-b border-white/10"
                      />
                    )}
                  </div>
                  <div className="text-white p-5 pt-7">
                    <h3 className="text-lg font-bold flex items-center mb-4">
                      {slide.mobile.headingIcon}
                      {slide.mobile.headingText}
                    </h3>
                    <p className="text-base text-gray-200 mb-6 tracking-wide">
                    {slide.desktop.bodyTextBeforeSpan}
                        {slide.desktop.bodyTextBeforeSpan2 && (
                            <span className="block mt-[10px] font-semibold">
                            {slide.desktop.bodyTextBeforeSpan2}
                            </span>
                        )}
                        <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                            {slide.desktop.bodyTextSpan}
                        </span>{" "}
                        {slide.desktop.bodyTextAfterSpan}
                    </p>
                    <Link
                      href={slide.mobile.ctaHref}
                      passHref
                      tabIndex={currentSlide === index ? 0 : -1}
                      aria-label={slide.mobile.ctaAriaLabel}
                    >
                      <motion.div className="inline-flex items-center justify-center uppercase py-2 px-2.5 md:px-3.5 text-sm font-bold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                        <span>{slide.mobile.ctaLabel}</span>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}Link