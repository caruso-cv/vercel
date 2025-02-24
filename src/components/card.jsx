import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopRight from '@/components/icons/TopRight';
import { AnimatePresence, motion } from "framer-motion";

function Card({ image, onImageLoad }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Link href="/services">
      <motion.div 
        className="relative overflow-hidden h-[300px] min-w-[400px] rounded-2xl flex justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div 
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
              <motion.h1 
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 cursor-pointer"  
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>Explore Now</span>
                <TopRight className="h-4 w-4 p-[1px] ml-1 stroke-white bg-black rounded-full" />
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <Image 
          src={image.src}  
          alt={image.alt} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
          className="object-cover"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
          onLoad={() => {
            setIsLoaded(true);
            if (onImageLoad) onImageLoad(image.src);
          }}
          priority
        />
      </motion.div>
    </Link>
  );
}

export default Card;