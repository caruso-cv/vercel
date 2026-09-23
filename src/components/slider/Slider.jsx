"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ECU8 from "@/components/logos/ECU8";
import ECU8TR from "@/components/logos/ECU8TR-slider";
import Energy from "@/components/icons/Energy";
import Manage from "@/components/icons/BatteryManage"

// How long each slide stays up before auto-advancing
const SLIDE_DURATION = 12000

// CENTRALIZED SLIDE CONTENT
const slidesData = [
  {
    slideId: 0,
    // Phones get this still instead of the video
    mobileImage: "/slider/ecu8-slider-mobile.webp",
    desktop: {
      videoSrc: "/vid/ecu8-slider-720.mp4",
      videoSrcMobile: "/vid/ecu8-slider-480.mp4",
      poster: "/slider/ecu8-slider-poster.webp",
      headingIcon: <Energy className="mr-3 w-10 h-6"/>,
      headingText: "EV BATTERY MANAGEMENT ECU PROTOTYPE PLATFORM",
      bodyTextBeforeSpan: "Built on Infineon AURIX™ with a focus on ISO 26262 safety and ISO 21434 security. ",
      bodyTextBeforeSpan2: "", 
      bodyTextSpan: "ECU8™ is a path to certified production units, owned and built by the OEM",
      bodyTextAfterSpan:
        " — customizable with any BMS interface, Ethernet, ISO SPI, or CAN/CAN FD.",
      ctaHref: "/solutions/ecu8",
      ctaLabel: "Explore solutions",
      ctaAriaLabel: "Explore details and specifications about ECU8",
      logo: <ECU8 className="h-[72px] w-auto"/>,
      logoContainerClasses:
        "absolute bottom-[152px] right-6 xl:right-12 2xl:right-20 bg-white/85 backdrop-blur-sm px-[38px] py-[40px] rounded-lg shadow-md border-white/30",
    },
  },
  {
    slideId: 1,
    desktop: {
      videoSrc: "/vid/ecu8tr-slider-720.mp4",
      videoSrcMobile: "/vid/ecu8tr-slider-480.mp4",
      poster: "/slider/ecu8tr-slider-poster.webp",
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
      logo: <ECU8TR className="h-14 w-auto" />,
      logoContainerClasses:
        "absolute bottom-44 right-6 xl:right-10 2xl:right-20 bg-white/85 backdrop-blur-sm px-[14px] py-14 rounded-lg shadow-md border-white/30",
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

  // Bumped whenever a <video> enters or leaves the tree, so video setup always runs
  // against a mounted element instead of racing the ref callbacks
  const [videoNodeVersion, setVideoNodeVersion] = useState(0);
  const videoRefSetters = useRef([]);
  const setVideoRef = (index) => {
    if (!videoRefSetters.current[index]) {
      videoRefSetters.current[index] = (el) => {
        if (videoRefs.current[index] === el) return;
        videoRefs.current[index] = el;
        if (el) setVideoNodeVersion((v) => v + 1);
      };
    }
    return videoRefSetters.current[index];
  };

  // Track slides that have been visited so once a video/image is loaded, we keep it in the DOM.
  const [visitedSlides, setVisitedSlides] = useState(() => new Set([0]))

  // Slides whose video has actually started, used to fade the video in over its poster
  const [playingSlides, setPlayingSlides] = useState(() => new Set())

  // Keep track of the previous slide index
  const prevSlide = useRef(currentSlide)

  // Mark as mounted after first client render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-advance, restarted on any manual navigation so a click or swipe isn't
  // immediately followed by the timer firing
  const keenRef = useRef(null)
  const autoplayRef = useRef(null)
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])
  const startAutoplay = useCallback(() => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => keenRef.current?.next(), SLIDE_DURATION)
  }, [stopAutoplay])

  // Initialize Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
    drag: true,
    slideChanged(slider) {
      const nextIndex = slider.track.details.rel
      setCurrentSlide(nextIndex)
      setVisitedSlides((prev) => new Set([...prev, nextIndex]))
    },
    created(slider) {
      keenRef.current = slider
      const initialIndex = slider.track.details.rel
      setCurrentSlide(initialIndex)
      if (initialIndex === 0) {
        restartAndPlaySlide(0)
      }
      startAutoplay()
    },
    dragStarted() {
      stopAutoplay()
    },
    dragEnded() {
      startAutoplay()
    },
  })

  const goToSlide = useCallback(
    (direction) => {
      if (direction === "prev") instanceRef.current?.prev()
      else instanceRef.current?.next()
      startAutoplay()
    },
    [instanceRef, startAutoplay]
  )

  // Function to restart & play the desktop video at a given slide index
  const restartAndPlaySlide = useCallback((index) => {
    const vid = videoRefs.current[index]
    if (vid) {
      vid.currentTime = 0
      vid.play().catch(() => {})
    }
  }, [])

  // Restart the new slide's desktop video on slide change
  useEffect(() => {
    if (visitedSlides.has(currentSlide) && currentSlide !== prevSlide.current) {
      restartAndPlaySlide(currentSlide)
    }
    prevSlide.current = currentSlide
  }, [currentSlide, visitedSlides, restartAndPlaySlide])

  useEffect(() => stopAutoplay, [stopAutoplay]);

  // Load and play the active slide's video only, reset on change
  useEffect(() => {
    const idx = currentSlide;
    const videoEl = videoRefs.current[idx];
    if (!videoEl) return;
    // Slides that ship a phone still never show their video there, so skip the fetch
    if (window.innerWidth < 640 && slidesData[idx].mobileImage) return;
    // Mobile autoplay only works on a muted, inline video
    videoEl.muted = true;
    videoEl.playsInline = true;
    const tryPlay = () =>
      videoEl
        .play()
        .then(() => setPlayingSlides((prev) => (prev.has(idx) ? prev : new Set([...prev, idx]))))
        .catch(() => {});
    videoEl.addEventListener('loadeddata', tryPlay);
    videoEl.addEventListener('canplay', tryPlay);

    // Phones get the smaller rendition so the first frame arrives on a cellular
    // connection
    const { videoSrc, videoSrcMobile } = slidesData[idx].desktop;
    const src = window.innerWidth < 640 && videoSrcMobile ? videoSrcMobile : videoSrc;
    if (!videoEl.src.endsWith(src)) {
      videoEl.src = src;
      videoEl.load();
    }
    videoEl.currentTime = 0;
    tryPlay();

    return () => {
      videoEl.removeEventListener('loadeddata', tryPlay);
      videoEl.removeEventListener('canplay', tryPlay);
    };
  }, [currentSlide, videoNodeVersion]);

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
          {slidesData.map((slide, index) => {
            // Cards reveal each time their slide becomes the active one
            const isActive = currentSlide === index
            const reveal = (offset, delay) => ({
              initial: { opacity: 0, ...offset },
              animate: isActive ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset },
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: isActive ? delay : 0 },
            })
            return (
            <div key={slide.slideId} className="keen-slider__slide relative">
              {/* DESKTOP */}
              <div className="flex flex-col items-center lg:flex-row lg:justify-center px-4 lg:pt-56 lg:pb-20 w-full h-full pt-24 pb-20">
                <div className="relative ">
                  {/* Poster sits under the video, so a blocked video never leaves
                      a native play button over the card */}
                  <motion.div
                    {...reveal({ x: -36 }, 0)}
                    className="lg:w-[800px] lg:h-[450px] lg:mr-44 lg:mb-20 bg-cover bg-center lg:rounded-lg rounded-t-lg"
                    style={{ backgroundImage: `url(${slide.desktop.poster})` }}
                  >
                    {slide.mobileImage && (
                      <img
                        src={slide.mobileImage}
                        alt=""
                        aria-hidden="true"
                        className="block sm:hidden w-full rounded-t-lg"
                      />
                    )}
                    {visitedSlides.has(index) && (
                      <video
                        ref={setVideoRef(index)}
                        className={`${slide.mobileImage ? 'hidden sm:block' : ''} w-full h-full object-cover lg:rounded-lg rounded-t-lg shadow-xl transition-opacity duration-500 ${playingSlides.has(index) ? 'opacity-100' : 'opacity-0'}`}
                        muted
                        playsInline
                        preload="auto"
                        poster={slide.desktop.poster}
                        onPlaying={() => setPlayingSlides((prev) => (prev.has(index) ? prev : new Set([...prev, index])))}
                        style={{ willChange: 'transform' }}
                        loop
                        autoPlay
                      />
                    )}
                  </motion.div>

                  {/* Video Info Box Desktop */}
                  <motion.div
                    {...reveal({ x: 44 }, 0.12)}
                    className="hidden lg:block absolute top-0 right-16 xl:-right-6 2xl:-right-12 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
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
                  </motion.div>

                  {/* Video Info Box Mobile */}
                  <motion.div
                    {...reveal({ y: 24 }, 0.1)}
                    className="text-white p-5 pt-7 block lg:hidden border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm w-[100%] rounded-b-lg shadow-lg">
                    <h3 className="text-lg font-bold flex items-center mb-4">
                    {slide.desktop.headingIcon}
                    {slide.desktop.headingText}
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
                      href={slide.desktop.ctaHref}
                      passHref
                      tabIndex={currentSlide === index ? 0 : -1}
                      aria-label={slide.desktop.ctaAriaLabel}
                    >
                      <motion.div className="inline-flex items-center justify-center uppercase py-2 px-2.5 md:px-3.5 text-sm font-bold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                        <span>{slide.desktop.ctaLabel}</span>
                      </motion.div>
                    </Link>
                  </motion.div>

                  
                </div>
                
                <div className="hidden lg:block">
                  {/* Desktop Logo Overlay */}
                  {slide.desktop.logo && (
                    <motion.div {...reveal({ y: 26 }, 0.26)} className={slide.desktop.logoContainerClasses}>
                      {slide.desktop.logo}
                    </motion.div>
                  )}
                </div>

              </div>
            </div>
            )
          })}
        </div>

        {/* Manual controls — autoplay restarts after each one so the timer
            doesn't fire right on top of a click */}
        <div className="absolute z-30 bottom-5 right-5 lg:right-auto lg:left-10 lg:bottom-10 flex gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goToSlide("prev")}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goToSlide("next")}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}Link