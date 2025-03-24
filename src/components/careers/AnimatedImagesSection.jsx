// AnimatedImagesSection.jsx
'use client';

import { useState, useEffect } from 'react';
import AnimatedImage from '@/components/careers/AnimatedImage';

export default function AnimatedImagesSection() {
  const totalImages = 4; // Update if you change the number of images
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (loadedCount === totalImages) {
      setAllLoaded(true); // Trigger animation when all images have loaded
    }
  }, [loadedCount, totalImages]);

  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
      <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
        <AnimatedImage
          alt="Office Space"
          src="/careers/office.webp"
          width={700}
          height={500}
          className={`aspect-[7/5] w-[37rem] max-w-none rounded-2xl object-cover ${allLoaded ? 'animate-in' : ''}`}
          onLoad={handleImageLoad}
        />
      </div>
      <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
          <AnimatedImage
            alt="EV Car"
            src="/careers/ev.webp"
            width={384}
            height={288}
            className={`aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl object-cover ${allLoaded ? 'animate-in' : ''}`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
          <AnimatedImage
            alt="Radio Control"
            src="/careers/radio.webp"
            width={740}
            height={528}
            className={`aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl object-cover ${allLoaded ? 'animate-in' : ''}`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
          <AnimatedImage
            alt="Neutron Board"
            src="/careers/board.webp"
            width={384}
            height={288}
            className={`aspect-[4/3] w-[24rem] max-w-none rounded-2xl object-cover ${allLoaded ? 'animate-in' : ''}`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}