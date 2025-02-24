"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Energate from "@/components/logos/Energate"
import Energy from "@/components/icons/Energy"
import { motion, useAnimationControls } from "framer-motion"
import Link from "next/link"
import Manage from "@/components/icons/BatteryManage"
import Auto from "@/components/icons/Auto"
import Equ8ter from "@/components/logos/Equ8ter"
import Equ8 from "@/components/logos/Equ8"

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Track slides that have been visited so once a video is rendered, it stays in the DOM
  const [visitedSlides, setVisitedSlides] = useState(() => new Set([0]))

  // Video refs for desktop versions only
  const videoRefSlide1Desktop = useRef(null)
  const videoRefSlide2Desktop = useRef(null)
  const videoRefSlide3Desktop = useRef(null)

  // Keep track of the previous slide index
  const prevSlide = useRef(currentSlide)

  // Mark as mounted after first client render (for Framer Motion SSR)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Helper to restart a particular slide's desktop video from 0 and play
  const restartAndPlaySlide = (index) => {
    if (index === 0 && videoRefSlide1Desktop.current) {
      videoRefSlide1Desktop.current.currentTime = 0
      videoRefSlide1Desktop.current.play().catch(() => {})
    } else if (index === 1 && videoRefSlide2Desktop.current) {
      videoRefSlide2Desktop.current.currentTime = 0
      videoRefSlide2Desktop.current.play().catch(() => {})
    } else if (index === 2 && videoRefSlide3Desktop.current) {
      videoRefSlide3Desktop.current.currentTime = 0
      videoRefSlide3Desktop.current.play().catch(() => {})
    }
  }

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

  // Restart the video from the beginning whenever a slide becomes active
  useEffect(() => {
    if (visitedSlides.has(currentSlide) && currentSlide !== prevSlide.current) {
      restartAndPlaySlide(currentSlide)
    }
    prevSlide.current = currentSlide
  }, [currentSlide, visitedSlides])

  // Dot Component remains unchanged
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
            await shapeControls.start({
              width: "70px",
              transition: { duration: 0.2 },
            })
            if (canceled) return

            await fillControls.start({
              width: "100%",
              transition: { duration: 6, ease: "linear" },
            })
            if (canceled) return

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

            if (instanceRef.current && currentSlide === index) {
              instanceRef.current.next()
            }
          } catch (err) {}
        })()
        return () => {
          canceled = true
        }
      } else {
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

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="relative w-full max-w-7xl bg-black xl:rounded-3xl overflow-hidden z-40">
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
          {/* ===================== SLIDE 1 ===================== */}
          <div className="keen-slider__slide relative">
            {/* Video layout – shown only on screens larger than medium (lg and up) */}
            <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center px-4 pt-44 pb-20 w-full h-full">
              <div className="relative">
                <div className="w-[800px] h-[450px] mr-44 mb-20">
                  {visitedSlides.has(0) && (
                    <video
                      ref={videoRefSlide1Desktop}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    >
                      <source src="/vids/storage.webm" type="video/webm" />
                      <source src="/vids/storage.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Video Info Box */}
                <div className="hidden lg:block absolute top-12 right-6 xl:-right-24 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Energy className="mr-3" />
                    Energy Storage
                  </h3>
                  <p className="text-base text-gray-200 mb-6 tracking-wide">
                    We deliver{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      cutting-edge energy storage control solutions
                    </span>{" "}
                    designed to maximize efficiency and reliability in energy and industrial power systems.
                  </p>
                  <Link href="/solutions/energ8te" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn more</span>
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Energate Logo (bottom-right) */}
              <div className="hidden lg:block absolute bottom-48 right-20 bg-white/85 backdrop-blur-sm px-4 py-[70px] rounded-lg shadow-md border-white/30">
                <Energate className="h-7 w-auto" />
              </div>
            </div>

            {/* Image layout – shown on medium and smaller screens */}
            <div className="lg:hidden flex flex-col items-center w-full px-4 py-24">
              <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/side-scroll/12.webp"
                    alt="Energy Storage"
                    fill
                    className="object-cover border-b border-white/10"
                  />
                </div>

                <div className="text-white p-5 pt-7">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Energy className="mr-3" />
                    Energy Storage
                  </h3>
                  <p className="text-sm text-gray-200 mb-6 tracking-wide">
                    We deliver{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      cutting-edge energy storage control solutions
                    </span>{" "}
                    designed to maximize efficiency and reliability in energy and industrial power systems.
                  </p>
                  <Link href="/solutions/energ8te" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn More</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== SLIDE 2 ===================== */}
          <div className="keen-slider__slide relative">
            {/* Video layout */}
            <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center px-4 pt-44 pb-20 w-full h-full">
              <div className="relative">
                <div className="w-[800px] h-[450px] mr-44 mb-20">
                  {visitedSlides.has(1) && (
                    <video
                      ref={videoRefSlide2Desktop}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    >
                      <source src="/vids/output.webm" type="video/webm" />
                      <source src="/vids/output.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Video Info Box */}
                <div className="hidden lg:block absolute top-12 right-6 xl:-right-24 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Manage className="w-7 mr-3" />
                    Battery Management
                  </h3>
                  <p className="text-base text-gray-200 mb-6 tracking-wide">
                    We specialize in{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      advanced Battery Management Systems (BMS)
                    </span>{" "}
                    that enhance performance and ensure safety across automotive and industrial applications.
                  </p>
                  <Link href="/solutions/ecu8tr" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn More</span>
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Logo */}
              <div className="hidden lg:block absolute bottom-48 right-20 bg-white/85 backdrop-blur-sm px-12 py-[60px] rounded-lg shadow-md border-white/30">
                <Equ8 className="h-9 w-auto" />
              </div>
            </div>

            {/* Image layout */}
            <div className="lg:hidden flex flex-col items-center w-full px-4 py-24">
              <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/side-scroll/7.webp"
                    alt="Battery Management"
                    fill
                    className="object-cover border-b border-white/10"
                  />
                </div>

                <div className="text-white p-5 pt-7">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Manage className="w-6 mr-3" />
                    Battery Management
                  </h3>
                  <p className="text-sm text-gray-200 mb-6 tracking-wide">
                    We specialize in{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      advanced Battery Management Systems (BMS)
                    </span>{" "}
                    that enhance performance and ensure safety across automotive and industrial applications.
                  </p>
                  <Link href="/solutions/ecu8tr" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn More</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== SLIDE 3 ===================== */}
          <div className="keen-slider__slide relative">
            {/* Video layout */}
            <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-center px-4 pt-44 pb-20 w-full h-full">
              <div className="relative">
                <div className="w-[800px] h-[450px] mr-44 mb-20">
                  {visitedSlides.has(2) && (
                    <video
                      ref={videoRefSlide3Desktop}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    >
                      <source src="/vids/auto.webm" type="video/webm" />
                      <source src="/vids/auto.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Video Info Box */}
                <div className="hidden lg:block absolute top-12 right-6 xl:-right-24 border border-white/10 bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/85 backdrop-blur-sm text-white p-5 pt-7 w-[90%] max-w-[460px] rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Auto className="w-8 mr-3" />
                    Automotive Engineering
                  </h3>
                  <p className="text-base text-gray-200 mb-6 tracking-wide">
                    We drive innovation by delivering{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      custom hardware and software solutions
                    </span>{" "}
                    that meet safety, efficiency, and performance demands for modern vehicles.
                  </p>
                  <Link href="/solutions/ecu8tr" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn More</span>
                    </motion.div>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block absolute bottom-48 right-20 bg-white/85 backdrop-blur-sm px-8 py-[60px] rounded-lg shadow-md border-white/30">
                <Equ8ter className="h-10 w-auto" />
              </div>
            </div>

            {/* Image layout */}
            <div className="lg:hidden flex flex-col items-center w-full px-4 py-24">
              <div className="border border-white/10 rounded-md bg-gradient-to-tr from-[#0C0D0F] to-[#111214] via-[#111214]/75 backdrop-blur-sm shadow-lg w-full max-w-[700px] overflow-hidden">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/side-scroll/11.webp"
                    alt="Automotive Engineering"
                    fill
                    className="object-cover border-b border-white/10"
                  />
                </div>

                <div className="text-white p-5 pt-7">
                  <h3 className="text-lg font-bold flex items-center mb-4">
                    <Auto className="w-6 mr-3" />
                    Automotive Engineering
                  </h3>
                  <p className="text-sm text-gray-200 mb-6 tracking-wide">
                    We drive innovation by delivering{" "}
                    <span className="text-[#8CD6FF] bg-[#1C445D] rounded-sm px-1">
                      custom hardware and software solutions
                    </span>{" "}
                    that meet safety, efficiency, and performance demands for modern vehicles.
                  </p>
                  <Link href="/solutions/ecu8tr" passHref>
                    <motion.div className="inline-flex items-center justify-center py-2 px-2.5 md:px-3.5 text-[13.5px] font-semibold tracking-[0.2px] cursor-pointer border-none rounded-[4px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                      <span>Learn More</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 lg:bottom-24 w-full flex justify-center z-20">
          <Dot index={0} />
          <Dot index={1} />
          <Dot index={2} />
        </div>
      </div>
    </div>
  )
}