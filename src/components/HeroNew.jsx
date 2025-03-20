'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

function AutoSlider(slider) {
  let timeout;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 5000);
  }
  slider.on('created', () => {
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
}

export default function HeroNew() {
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slidesPerView: 1,
      duration: 1000,
      drag: false,
      created(s) {
        setSliderLoaded(true);
      },
    },
    [AutoSlider]
  );

  return (
    <div
      className="hidden md:block"
      style={{
        // Disabling text scaling
        WebkitTextSizeAdjust: 'none',
        MozTextSizeAdjust: 'none',
        msTextSizeAdjust: 'none',
        textSizeAdjust: 'none',
      }}
    >
      {/* Remove fixed height from this container */}
      <div
        ref={sliderRef}
        className={`keen-slider relative transition-opacity duration-500 ${
          sliderLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Slide 1 */}
        <div className="keen-slider__slide">
          {/* Use min-h instead of forcing h-full */}
          <div className="relative isolate overflow-hidden min-h-[calc(100vh-100px)] bg-gray-900">
            <Image
              src="/hero/energy.webp"
              alt="energy storage systems"
              fill
              className="object-cover"
              sizes="(max-width: 600px) 100vw,
                      (max-width: 1200px) 100vw, 
                      100vw"
              priority
              quality={80}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
            
            {/* Content container */}
            <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20">
              {/* Instead of h-full + items-start, consider items-center if you want vertical centering */}
              <div className="flex flex-col justify-center h-full py-12 sm:py-24 lg:py-32 z-20 mt-[10%] 3xl:mt-[20%]">
                <div className="max-w-2xl select-text">
                  <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
                    Contain your energy
                  </h1>
                  <p className="mt-8 text-xl sm:text-4xl font-medium text-gray-100">
                    Advanced BMS controllers for <br /> ESS/BESS installations.
                  </p>
                  <div className="mt-10 flex items-left justify-start gap-x-6">
                    <Link
                      passHref
                      href="#get-started"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('get-started');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <motion.div className="inline-flex py-3 px-3.5 text-sm sm:text-base font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                        <span>GET STARTED</span>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="keen-slider__slide">
          {/* Use min-h instead of forcing h-full */}
          <div className="relative isolate overflow-hidden min-h-[calc(100vh-100px)] bg-gray-900">
            <Image
              src="/hero/test.webp"
              alt="Battory factory point tester robot"
              fill
              className="object-cover"
              sizes="(max-width: 600px) 100vw,
                      (max-width: 1200px) 100vw, 
                      100vw"
              priority
              quality={80}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
            
            {/* Content container */}
            <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20">
              {/* Instead of h-full + items-start, consider items-center if you want vertical centering */}
              <div className="flex flex-col justify-center h-full py-12 sm:py-24 lg:py-32 z-20 mt-[10%] 3xl:mt-[20%]">
                <div className="max-w-2xl select-text">
                  <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
                    Test your limits
                  </h1>
                  <p className="mt-8 text-xl sm:text-4xl font-medium text-gray-100">
                    Battery factory point tester.
                  </p>
                  <div className="mt-10 flex items-left justify-start gap-x-6">
                    <Link
                      passHref
                      href="#ecu8tr"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('ecu8tr');
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <motion.div className="inline-flex py-3 px-3.5 text-sm sm:text-base font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                        <span>GET STARTED</span>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}