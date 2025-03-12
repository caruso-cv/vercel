'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Example() {
  return (
    <div className="bg-gray-900 relative isolate overflow-hidden">
      <Image
        alt="Sunset with solar panels"
        src="/hero/energy.jpg"
        fill
        sizes="100vw"
        quality={70}
        className="absolute inset-0 -z-20 object-cover object-bottom md:object-center"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl"
      >
        {/* (Your clipPath content) */}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>
      <div className="mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0">
        <div className="max-w-2xl shrink-0 pt-[calc(12rem+env(safe-area-inset-top))] pb-32 sm:pt-[calc(14rem+env(safe-area-inset-top))] sm:pb-48 lg:py-56">
          <div className="text-left">
            <h1 className="text-balance uppercase text-5xl font-bold text-white sm:mt-12 sm:text-[5.2rem]">
              Contain your energy
            </h1>
            <p className="mt-8 text-pretty text-xl font-medium text-gray-100 sm:text-4xl">
              Advanced BMS controllers for ESS/BESS installations.
            </p>
            <div className="mt-10 flex items-left justify-start gap-x-6">
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
      
      {/* <div className="absolute right-[80px] top-1/2 transform -translate-y-1/2 z-30">
        <Image 
          src="/vertical/energ8te-box-hero.png"
          width={1000}
          height={600} 
          quality={70}
          priority
          alt="energ8te box"
          className="w-[900px] h-auto"
        />
      </div> */}
      
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
  )
}