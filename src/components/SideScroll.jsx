'use client';

import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/card";

export default function SideScroll() {
  const images = [
    { src: "/side-scroll/10.webp", alt: "Custom Design Process" },
    { src: "/side-scroll/7.webp", alt: "ECU Design" },
    { src: "/side-scroll/8.webp", alt: "Engineer at Work" },
    { src: "/side-scroll/5.webp", alt: "Factory Floor" },
    { src: "/side-scroll/4.webp", alt: "Custom Design Process" },
    { src: "/side-scroll/3.webp", alt: "ECU Design" },
    { src: "/side-scroll/2.webp", alt: "Engineer at Work" },
    { src: "/side-scroll/1.webp", alt: "Factory Floor" }
  ];

  const prefersReducedMotion = useReducedMotion();
  const FAST_DURATION = prefersReducedMotion ? 0 : 50;
  const SLOW_DURATION = prefersReducedMotion ? 0 : 120;
  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRender(!rerender);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });
    }
    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <motion.div
      className="absolute left-0 flex gap-4 overflow-hidden scrollContainer z-40"
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
    >
      {[...images, ...images].map((item, idx) => (
        <Card image={item} key={idx} />
      ))}
    </motion.div>
  );
}