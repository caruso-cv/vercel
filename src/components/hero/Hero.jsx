'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroNew() {
  const [firstText, setFirstText] = useState('Contain');
  const [firstAnim, setFirstAnim] = useState('visible'); // 'visible', 'exiting', 'entering'
  const [secondText, setSecondText] = useState('Your Energy');
  const [secondAnim, setSecondAnim] = useState('visible');
  
  // New state for paragraph text and its visibility
  const [paraText, setParaText] = useState('Advanced BMS controllers for <br /> ESS/BESS installations.');
  const [paraVisible, setParaVisible] = useState(true);

  // This effect triggers the animation cycle every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Animate first line and paragraph out
      setFirstAnim('exiting');
      setParaVisible(false);
      
      setTimeout(() => {
        // Toggle first text and update paragraph text based on the new headline
        setFirstText(prev => {
          const newText = prev === 'Contain' ? 'Test Your' : 'Contain';
          setParaText(newText === 'Test Your'
            ? 'Battery factory point tester.'
            : 'Advanced BMS controllers for <br /> ESS/BESS installations.'
          );
          return newText;
        });
        setFirstAnim('entering');
        // Shortly after, set first line to visible and fade paragraph in
        setTimeout(() => {
          setFirstAnim('visible');
          setParaVisible(true);
        }, 50);
      }, 450); // duration of exit animation for first line

      // For second line, start a bit after the first line begins exiting
      setTimeout(() => {
        setSecondAnim('exiting');
        setTimeout(() => {
          setSecondText(prev => (prev === 'Your Energy' ? 'Limits' : 'Your Energy'));
          setSecondAnim('entering');
          setTimeout(() => {
            setSecondAnim('visible');
          }, 50);
        }, 450);
      }, 100); // 100ms delay before second line starts
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Determine the Tailwind classes based on animation state for headline lines
  const getClass = (animState) => {
    if (animState === 'visible') return 'translate-y-0 opacity-100';
    if (animState === 'exiting') return '-translate-y-full opacity-0';
    if (animState === 'entering') return 'translate-y-full opacity-0';
    return '';
  };

  return (
    <section className="relative block min-h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero/hero-thumbanil.webp"
        style={{ willChange: 'transform' }}
        className="absolute inset-0 w-full h-full object-cover object-center hidden sm:block transform scale-100 sm:scale-125 xl:scale-100"
      >
        <source src="/vids/hero-vid-av1.webm" type="video/webm" />
        <source src="/vids/hero-vid.mp4" type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center sm:hidden transition-opacity duration-500 ${firstText === 'Contain' ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url(/hero/energy-mobile.webp)',
          willChange: 'opacity',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}      />
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center sm:hidden transition-opacity duration-500 ${firstText === 'Contain' ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: 'url(/hero/test-mobile.webp)',
          willChange: 'opacity',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-black/30" />
      <div className="relative mx-auto max-w-8xl px-6 lg:px-8 2xl:px-0 z-20 h-full">
        {/* Spacer for Navbar */}
        <div className="pt-[106px]"></div>
        <div className="flex flex-col h-full z-20 justify-center py-[100px]">
          <div className="max-w-2xl select-text">
            <h1 className="text-balance uppercase text-5xl font-bold text-white sm:text-[83.2px] whitespace-pre-line">
              {/* Fixed height container to prevent layout shift */}
              <span className="inline-block overflow-hidden pb-2 -mt-2 h-[3rem] sm:h-[83.2px]">
                <span
                  className={`inline-block m-0 p-0 transition-all duration-[450ms] ease-heading-transition-ease hyphens-auto ${getClass(firstAnim)}`}
                >
                  {firstText}
                </span>
              </span>
              <br />
              <span className="inline-block overflow-hidden pb-2 -mt-2 h-[3rem] sm:h-[83.2px]">
                <span
                  className={`inline-block m-0 p-0 transition-all duration-[450ms] ease-heading-transition-ease hyphens-auto ${getClass(secondAnim)}`}
                >
                  {secondText}
                </span>
              </span>
            </h1>
            <div className={`mt-8 text-xl sm:text-4xl font-medium text-gray-100 transition-opacity duration-500 ${paraVisible ? 'opacity-100' : 'opacity-0'} h-[6rem] overflow-hidden`} 
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
  );
}