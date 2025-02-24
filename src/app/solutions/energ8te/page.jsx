'use client'

import { useState, useEffect } from 'react'
import Infineon from '@/components/Infineon'
import Energ8te from '@/components/Energ8te'
import Safety from "@/components/icons/Safety"
import Scale from "@/components/icons/Scale"
import Future from "@/components/icons/Future"
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Home() {
  const [arrowOpacity, setArrowOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100
      const newOpacity = Math.max(1 - window.scrollY / maxScroll, 0)
      setArrowOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <main>
        <div className="bg-[#090A0B] overflow-x-hidden relative min-h-[800px] 4xl:min-h-[1500px] 3xl:min-h-[1200px] xl:min-h-[850px]">
          <div className="px-12 pb-20 relative z-30">
            <div className="h-full w-full m-auto mt-28 max-w-7xl 3xl:max-w-8xl 3xl:mt-72 3xl:mb-24 xl:mb-20">
              <h1 className="text-white text-3xl sm:text-5xl 3xl:text-6xl text-left font-bold max-w-xl 3xl:max-w-2xl uppercase tracking-wider">
                Battery Energy Storage System
              </h1>
              <p className="text-white/60 font-geist sm:text-[1.25rem] 3xl:text-[1.5rem] mt-3 3xl:mt-6">
                BMS Controls for energy storage systems.
              </p>
            </div>
            <div className="flex mt-12 mx-auto max-w-7xl 3xl:max-w-8xl justify-between flex-wrap">
              <div className="py-8">
                <Safety className="w-12 h-auto mb-8" />
                <p className="text-white text-[2rem] 3xl:text-[2.25rem] font-semibold leading-[1.2] my-3 max-w-[15rem]">
                  Safety by design
                </p>
                <p className="text-white/60 font-geist max-w-xs 3xl:text-lg">
                  ENERG8TE™ integrates prevention measures, data logging, failsafe diagnostics, and risk mitigation for battery operation.
                </p>
              </div>
              <div className="py-8">
                <Scale className="w-auto h-[46px] mb-8" />
                <p className="text-white text-[2rem] 3xl:text-[2.25rem] font-semibold leading-[1.2] my-3 max-w-[15rem]">
                  Scalable + flexible
                </p>
                <p className="text-white/60 font-geist max-w-xs 3xl:text-lg">
                  Hardware platform enabling software algorithms for SoX, cell balancing, charging, and discharging.
                </p>
              </div>
              <div className="py-8">
                <Future className="w-12 h-auto mb-8" />
                <p className="text-white text-[2rem] 3xl:text-[2.25rem] font-semibold leading-[1.2] my-3 max-w-[15rem]">
                  Future-proof design
                </p>
                <p className="text-white/60 font-geist max-w-xs 3xl:text-lg">
                  ENERG8TE™ adapts with ESS advances, ensuring compatibility and long-term value.
                </p>
              </div>
            </div>
          </div>

          {/* Animated arrow that fades on scroll */}
          <div
            style={{ opacity: arrowOpacity, transition: 'opacity 0.5s ease-out' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDownIcon className="h-8 w-8 text-white animate-bounce" />
          </div>
        </div>
        <div>
          <Energ8te />
        </div>
      </main>
      <div className="overflow-x-hidden relative">
        <Infineon />
      </div>
    </div>
  )
}