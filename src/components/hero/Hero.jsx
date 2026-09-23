'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HEADLINE_LINES = ['Accelerate', 'your path', 'to BMS'];
const RISE = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroNew() {
  const videoRef = useRef(null);
  const VIDEO_DESKTOP = '/vid/hero-1080.mp4';
  const VIDEO_MOBILE = '/vid/hero-720.mp4';
  const POSTER = '/vid/hero-poster.webp';
  // Phones don't get the video at all, so they get a portrait still instead
  const PHONE_IMAGE = '/hero/hero-mobile.webp';
  const PHONE = '(max-width: 639px)';

  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Mobile autoplay only works on a muted, inline video
    video.muted = true;
    video.playsInline = true;
    // Slight slowdown for a calmer drift; 0.8 still lands on a new source frame
    // 4 out of every 5 displayed frames, so it reads as smooth
    video.playbackRate = 0.8;

    const tryPlay = () =>
      video.play().then(() => setVideoPlaying(true)).catch(() => {});
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    // Phones show PHONE_IMAGE, so don't spend their data on a video they never see.
    // Tablets take the 720p cut so the first frame still arrives on cellular.
    const phone = window.matchMedia(PHONE);
    const load = () => {
      if (phone.matches) return;
      video.src = window.innerWidth < 1024 ? VIDEO_MOBILE : VIDEO_DESKTOP;
      video.load();
      tryPlay();
    };
    load();
    phone.addEventListener('change', load);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      phone.removeEventListener('change', load);
    };
  }, []);

  return (
    <>
      {/* First paint of the hero is one of these images, so fetch it early.
          These have to render inline: next/head is inert under the app router */}
      <link rel="preload" as="image" href={PHONE_IMAGE} type="image/webp" media={PHONE} />
      <link rel="preload" as="image" href={POSTER} type="image/webp" media="(min-width: 640px)" />
      <section className="relative block min-h-full overflow-hidden">
        {/* Phones get this still on its own — already cropped for a portrait
            viewport, so it needs none of the video's framing transform */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{ backgroundImage: `url("${PHONE_IMAGE}")` }}
        />
        {/* Shown until the video reports it is playing, so a blocked video never
            leaves a native play button over the hero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:block bg-cover bg-center transform -translate-x-[2%] scale-125 xl:scale-110"
          style={{ backgroundImage: `url("${POSTER}")` }}
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setVideoPlaying(true)}
          className={`absolute inset-0 hidden sm:block w-full h-full object-cover object-center transform -translate-x-[2%] scale-125 xl:scale-110 transition-opacity duration-700 ${videoPlaying ? 'opacity-100' : 'opacity-0'}`}
          style={{ willChange: 'transform' }}
        />
        {/* Headline, copy and nav are white and sit top-left, so darken those edges */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/38 to-black/14 sm:via-black/26 sm:to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/6 to-transparent" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">
          <div className="pt-[106px]" />
          <div className="flex flex-col h-full z-20 justify-center py-[100px] sm:pt-[104px] sm:pb-[192px]">
            <div className="max-w-2xl select-text">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } } }}
                className="uppercase text-5xl font-bold text-white sm:text-[68px] drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]"
              >
                {HEADLINE_LINES.map((line) => (
                  <motion.span
                    key={line}
                    className="block"
                    variants={RISE}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={RISE}
                transition={{ delay: 0.62, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-xl sm:text-3xl font-medium text-gray-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              >
                EV battery management ECUs <br className="hidden sm:inline" />built on Infineon AURIX™.
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={RISE}
                transition={{ delay: 0.78, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 sm:mt-10 flex items-left justify-start gap-x-6"
              >
                <Link
                  passHref
                  href="#get-started"
                  aria-label="Get started"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('get-started');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="inline-flex py-3 px-3.5 text-sm sm:text-base font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
                    <span>GET STARTED</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}