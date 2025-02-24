'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedImage({ alt, src, width, height, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className={className}
      />
    </motion.div>
  );
}