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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slidesPerView: 1,
      duration: 1000,
      drag: false,
      created() {
        setSliderLoaded(true);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      }
    },
    [AutoSlider]
  );

  return (
    <div
      className="block">
      <div
        ref={sliderRef}
        className={`keen-slider relative transition-opacity duration-500 ${
          sliderLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Slide 1 */}
        <section
          className="keen-slider__slide"
          role="group"
          aria-roledescription="slide"
          aria-label="Slide 1 of 2"
          aria-hidden={currentSlide !== 0}
        >
          <div className="relative isolate overflow-hidden bg-gray-900 min-h-full">
            <Image
              src="/hero/energy.webp"
              alt="energy storage systems"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              quality={50}
            />

            {/* Shader for hero image */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

            <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">

              {/* Spacer for Navbar */}
              <div className='pt-[106px]'></div>

              <div className="flex flex-col h-full z-20 justify-center py-[100px]">
                <div className="max-w-2xl select-text ">   
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
        </section>

        {/* Slide 2 */}
        <section
          className="keen-slider__slide"
          role="group"
          aria-roledescription="slide"
          aria-label="Slide 2 of 2"
          aria-hidden={currentSlide !== 1}
        >
          <div className="relative isolate overflow-hidden bg-gray-900 min-h-full">
            <Image
              src="/hero/test.webp"
              alt="Battery factory point tester robot"
              fill
              className="object-cover"
              sizes="100vw"
              quality={50}
            />

            {/* Shader for hero image */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

            <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">

              {/* Spacer for Navbar */}
              <div className='pt-[106px]'></div>

              <div className="flex flex-col h-full z-20 justify-center py-[100px]">
                <div className="max-w-2xl select-text ">   
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
        </section>
      </div> 
    </div>
  );
}