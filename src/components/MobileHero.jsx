'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Example() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect() 
          }
        })
      },
      { threshold: 0.1 }
    )

    const target = document.getElementById('hero-image')
    if (target) {
      observer.observe(target)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-gray-900 block lg:hidden">
      <div className="relative isolate overflow-hidden" id="hero-image">
        {isVisible && (
          <Image
            alt="Sunset with solar panels"
            src="/hero/sunset.webp"
            fill
            priority
            sizes="100vw"
            quality={70}
            className="absolute inset-0 -z-20 object-cover object-bottom md:object-center"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl"
        >
          {/* (Your clipPath content can remain here) */}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="mx-auto max-w-2xl
                       pt-[calc(12rem+env(safe-area-inset-top))] pb-32 
                       sm:pt-[calc(14rem+env(safe-area-inset-top))] sm:pb-48 
                       lg:py-56"
          >
            <div className="hidden sm:mb-8 sm:flex justify-left">
              <div className="relative rounded-full px-3 py-1 text-base/6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20 sm:text-lg">
                <Link href="/solutions/energ8te" className="font-semibold text-white">
                  Designed for efficiency, safety, and reliability.
                </Link>
              </div>
            </div>
            <div className="text-left">
              <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-6xl">
                Contain your energy
              </h1>
              <p className="mt-8 text-pretty text-xl font-medium text-gray-100 sm:text-3xl">
                Advanced BMS controllers for ESS/BESS installations.
              </p>
              <div className="mt-10 hidden xs:flex items-left justify-start gap-x-6">
                <Link
                  passHref
                  href="#get-started"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("get-started");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <motion.div className="inline-flex py-3 px-2.5 md:px-3.5 text-sm sm:text-base font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                    <span>GET STARTED</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>
      </div>
    </div>
  )
}