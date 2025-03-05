"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { motion, useAnimationControls } from "framer-motion"
import Link from "next/link"

// Logos / Icons
import Energate from "@/components/logos/Energate"
import Equ8ter from "@/components/logos/Equ8ter"
import Energy from "@/components/icons/Energy"
import Manage from "@/components/icons/BatteryManage"

// CENTRALIZED SLIDE CONTENT
const slidesData = [
  {
    slideId: 0,
    desktop: {
      videoSources: [
        { src: "/vids/storage.webm", type: "video/webm" },
        { src: "/vids/storage.mp4", type: "video/mp4" },
      ],
      headingIcon: <Energy className="mr-3 w-10 h-6" />,
      headingText: "BATTERY MANAGEMENT FOR ESS/BESS INSTALLATIONS",
      bodyTextBeforeSpan: "We deliver a customizable ",
      bodyTextSpan: "BMS called ENERG8TE™ for energy storage",
      bodyTextAfterSpan:
        " designed to maximize efficiency, safety, and reliability in industrial power systems.",
      ctaHref: "/solutions/energ8te",
      ctaLabel: "Learn more",
      logo: <Energate className="h-8 w-auto" />,
      logoContainerClasses:
        "hidden lg:block absolute bottom-36 right-20 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30",
    },
    mobile: {
      image: "/slider/12.jpg",
      headingIcon: <Energy className="mr-3 w-10 h-6" />,
      headingText: "BATTERY MANAGEMENT FOR ESS/BESS INSTALLATIONS",
      bodyTextBeforeSpan: "We deliver a customizable ",
      bodyTextSpan: "BMS called ENERG8TE™ for energy storage",
      bodyTextAfterSpan:
        " designed to maximize efficiency, safety, and reliability in industrial power systems.",
      ctaHref: "/solutions/energ8te",
      ctaLabel: "Learn More",
    },
  },
  {
    slideId: 1,
    desktop: {
      videoSources: [
        { src: "/vids/output.webm", type: "video/webm" },
        { src: "/vids/output.mp4", type: "video/mp4" },
      ],
      headingIcon: <Manage className="w-7 mr-3" />,
      headingText: "BATTERY FACTORY LINE TESTERS",
      bodyTextBeforeSpan: "We specialize in ",
      bodyTextSpan: "advanced Battery Management Systems (BMS)",
      bodyTextAfterSpan:
        " that enhance performance and ensure safety across automotive and industrial applications.",
      ctaHref: "/solutions/ecu8tr",
      ctaLabel: "Learn More",
      logo: <Equ8ter className="h-12 w-auto" />,
      logoContainerClasses:
        "hidden lg:block absolute bottom-44 right-16 bg-white/85 backdrop-blur-sm px-8 py-[60px] rounded-lg shadow-md border-white/30",
    },
    mobile: {
      image: "/slider/7.jpg",
      headingIcon: <Manage className="w-6 mr-3" />,
      headingText: "BATTERY FACTORY LINE TESTERS",
      bodyTextBeforeSpan: "We specialize in ",
      bodyTextSpan: "advanced Battery Management Systems (BMS)",
      bodyTextAfterSpan:
        " that enhance performance and ensure safety across automotive and industrial applications.",
      ctaHref: "/solutions/ecu8tr",
      ctaLabel: "Learn More",
    },
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Store one desktop video ref per slide
  const videoRefs = useRef([])

  // Track slides that have been visited so once a video/image is loaded, we keep it in the DOM.
  const [visitedSlides, setVisitedSlides] = useState(() => new Set([0]))

  // Keep track of the previous slide index
  const prevSlide = useRef(currentSlide)

  // Mark as mounted after first client render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize an array of video refs matching slidesData
  useEffect(() => {
    videoRefs.current = slidesData.map(() => null)
  }, [])

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

  // Dot component for pagination
  function Dot({ index }) {
    const isActive = currentSlide === index
    const shapeControls = useAnimationControls()
    const fillControls = useAnimationControls()

    useEffect(() => {
      if (!mounted) return
      if (isActive) {
        let canceled = false
        ;(async () => {
          try {
            // Expand shape
            await shapeControls.start({
              width: "70px",
              transition: { duration: 0.2 },
            })
            if (canceled) return

            // Fill bar
            await fillControls.start({
              width: "100%",
              transition: { duration: 6, ease: "linear" },
            })
            if (canceled) return

            // Shrink back
            await Promise.all([
              shapeControls.start({
                width: "10px",
                transition: { duration: 0.3 },
              }),
              fillControls.start({
                width: "0%",
                transition: { duration: 0.3 },
              }),
            ])
            if (canceled) return

            // Auto-advance to next slide
            if (instanceRef.current && currentSlide === index) {
              instanceRef.current.next()
            }
          } catch (err) {}
        })()

        return () => {
          canceled = true
        }
      } else {
        // If not active, reset animations
        shapeControls.start({ width: "10px", transition: { duration: 0.3 } })
        fillControls.start({ width: "0%", transition: { duration: 0.3 } })
      }
    }, [isActive, mounted, shapeControls, fillControls, index, currentSlide])

    return (
      <motion.div
        onClick={() => instanceRef.current?.moveToIdx(index)}
        className="relative mr-3 flex items-center justify-center h-[10px] bg-[#DBE1F9] rounded-full overflow-hidden cursor-pointer"
        style={{ minWidth: "10px" }}
        animate={shapeControls}
        initial={{ width: "10px" }}
      >
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#566FE3]"
          animate={fillControls}
          initial={{ width: "0%" }}
        />
      </motion.div>
    )
  }

  // RENDER
  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="relative w-full max-w-8xl bg-black xl:rounded-3xl overflow-hidden z-40">
        {/* Right-side background image */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/slider/slider-bg.png")' }}
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
              <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center px-4 pt-44 pb-20 w-full h-full">
                <div className="relative">
                  <div className="w-[800px] h-[450px] mr-44 mb-20">
                    {visitedSlides.has(index) && (
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                      >
                        {slide.desktop.videoSources.map((srcObj, i) => (
                          <source key={i} src={srcObj.src} type={srcObj.type} />
                        ))}
                      </video>
                    )}
                  </div>

                  {/* Video Info Box */}
                  <div className="hidden lg:block absolute top-12 right-6 xl:-right-24 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
                    <h3 className="text-lg 2xl:text-xl uppercase font-bold flex items-center mb-4">
                      {slide.desktop.headingIcon}
                      {slide.desktop.headingText}
                    </h3>
                    <p className="text-lg 2xl:text-xl text-gray-200 mb-6 tracking-wide">
                      {slide.desktop.bodyTextBeforeSpan}
                      <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                        {slide.desktop.bodyTextSpan}
                      </span>{" "}
                      {slide.desktop.bodyTextAfterSpan}
                    </p>
                    <Link href={slide.desktop.ctaHref} passHref>
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
              <div className="lg:hidden flex flex-col items-center w-full px-4 py-24">
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
                      {slide.mobile.bodyTextBeforeSpan}
                      <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                        {slide.mobile.bodyTextSpan}
                      </span>{" "}
                      {slide.mobile.bodyTextAfterSpan}
                    </p>
                    <Link href={slide.mobile.ctaHref} passHref>
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

        {/* DOTS (pagination) */}
        <div className="absolute bottom-10 lg:bottom-24 w-full flex justify-center z-20">
          {slidesData.map((_, i) => (
            <Dot key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}