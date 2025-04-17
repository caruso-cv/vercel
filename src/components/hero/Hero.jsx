'use client'
import React, { useState, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import Link from 'next/link';
import Head from 'next/head';

export default function HeroNew() {
  const videoRef = useRef(null);
  const HLS_URL = 'https://d3jn5509arnhlw.cloudfront.net/hls-hero/master.m3u8';

  const [firstText, setFirstText] = useState('Contain');
  const [firstAnim, setFirstAnim] = useState('visible');
  const [secondText, setSecondText] = useState('Your Energy');
  const [secondAnim, setSecondAnim] = useState('visible');
  const [paraText, setParaText] = useState('Advanced BMS controllers for <br /> ESS/BESS installations.');
  const [paraVisible, setParaVisible] = useState(true);

  // Animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setFirstAnim('exiting');
      setParaVisible(false);
      setTimeout(() => {
        setFirstText(prev => {
          const newText = prev === 'Contain' ? 'Test Your' : 'Contain';
          setParaText(newText === 'Test Your'
            ? 'Battery factory point tester.'
            : 'Advanced BMS controllers for <br /> ESS/BESS installations.'
          );
          return newText;
        });
        setFirstAnim('entering');
        setTimeout(() => {
          setFirstAnim('visible');
          setParaVisible(true);
        }, 50);
      }, 450);
      setTimeout(() => {
        setSecondAnim('exiting');
        setTimeout(() => {
          setSecondText(prev => (prev === 'Your Energy' ? 'Limits' : 'Your Energy'));
          setSecondAnim('entering');
          setTimeout(() => {
            setSecondAnim('visible');
          }, 50);
        }, 450);
      }, 100);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  
  // Helper for class names
  const getClass = (animState) => {
    if (animState === 'visible') return 'translate-y-0 opacity-100';
    if (animState === 'exiting') return '-translate-y-full opacity-0';
    if (animState === 'entering') return 'translate-y-full opacity-0';
    return '';
  };

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
          const levels = data.levels;
          // find all AV1 levels
          const av1Levels = levels.filter(l => /av01/.test(l.attrs.CODECS));
          let startLevelIndex;
          if (av1Levels.length) {
            // index of the highest AV1 variant
            const firstAv1Index = levels.findIndex(l => /av01/.test(l.attrs.CODECS));
            startLevelIndex = firstAv1Index + av1Levels.length - 1;
          } else {
            // fallback: highest bitrate overall
            startLevelIndex = levels.length - 1;
          }
          hls.startLevel = startLevelIndex;
        });
        hls.loadSource(HLS_URL);
        hls.attachMedia(videoRef.current);
        return () => { hls.destroy(); };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = HLS_URL;
      }
    }
  }, []);

  return (
    <>
      <Head>
        {/* Desktop hero video */}
        <link
          rel="preload"
          as="image"
          href="/hero/master.webp"
          type="image/webp"
          media="(min-width: 640px)"
        />
      </Head>
      <section className="relative block min-h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/master.webp"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-125 xl:scale-100"
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 to-black/10" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">
          <div className="pt-[106px]" />
          <div className="flex flex-col h-full z-20 justify-center py-[100px]">
            <div className="max-w-2xl select-text">
              <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
                <span className="inline-block overflow-hidden pb-2 -mt-2 h-[3rem] sm:h-[83.2px]">
                  <span className={`inline-block m-0 p-0 transition-all duration-[450ms] ease-heading-transition-ease hyphens-auto ${getClass(firstAnim)}`}>
                    {firstText}
                  </span>
                </span>
                <br />
                <span className="inline-block overflow-hidden pb-2 -mt-2 h-[3rem] sm:h-[83.2px]">
                  <span className={`inline-block m-0 p-0 transition-all duration-[450ms] ease-heading-transition-ease hyphens-auto ${getClass(secondAnim)}`}>
                    {secondText}
                  </span>
                </span>
              </h1>
              <div
                className={`mt-8 text-xl sm:text-4xl font-medium text-gray-100 transition-opacity duration-500 ${paraVisible ? 'opacity-100' : 'opacity-0'} h-[6rem] overflow-hidden`}
                dangerouslySetInnerHTML={{ __html: paraText }}
              />
              <div className="sm:mt-10 flex items-left justify-start gap-x-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}