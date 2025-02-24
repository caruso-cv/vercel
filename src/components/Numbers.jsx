'use client'

import React, { useState, useEffect, useRef } from "react";

const Numbers = ({
  timeValue = 1250000, // final number for TIME
  moneyValue = 2500000, // final number for MONEY
  duration = 4000, // total ms for the animation (4 seconds by default)
}) => {
  const [activeTab, setActiveTab] = useState("time");
  const [displayNumber, setDisplayNumber] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const finalValue = activeTab === "time" ? timeValue : moneyValue;
    const startValue = finalValue * 0.99;
    const range = finalValue - startValue;

    let startTimestamp = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = startValue + range * progress;

      setDisplayNumber(Math.round(currentValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayNumber(finalValue);
      }
    };

    setDisplayNumber(Math.round(startValue));
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [activeTab, inView, timeValue, moneyValue, duration]);

  return (
    <section ref={sectionRef} className="text-center sm:pt-36 pt-24 pb-6 sm:pb-12 max-w-4xl 3xl:max-w-6xl mx-auto">
      <h2 className="sm:text-4xl text-2xl 3xl:text-5xl font-bold mb-2 uppercase px-2">
        TRANSFORMING ENERGY MANAGEMENT <span className="hidden sm:block">& VEHICLE DEVELOPMENT</span>
      </h2>

      <p className=" mb-8 pt-4 text-lg lg:text-xl text font-medium px-4 3xl:text-2xl">
        Canadian companies could collectively save:
      </p>

      {/* Tabs */}
      <div className="inline-flex gap-2 mb-6 mt-2 bg-white p-2 rounded-full mx-2">
        <button
          className={`px-6 py-2.5 text-sm rounded-full transition font-bold ${
            activeTab === "time"
              ? "bg-[#4864e0] text-white"
              : "bg-[#DBE1F9] hover:bg-[#CFD9FF] text-[#3250d4]"
          }`}
          onClick={() => setActiveTab("time")}
        >
          TIME SAVED
        </button>
        <button
          className={`px-6 py-2.5 text-sm rounded-full transition font-bold ${
            activeTab === "money"
              ? "bg-[#4864e0] text-white"
              : "bg-[#DBE1F9] hover:bg-[#CFD9FF] text-[#3250d4]"
          }`}
          onClick={() => setActiveTab("money")}
        >
          MONEY SAVED
        </button>
      </div>

      {/* Displayed Number */}
      <div>
        <h1 className="sm:text-[120px] text-5xl xs:text-6xl font-medium text-[#566FE3] mt-4 sm:mt-0 sm:py-8">
          {activeTab === "money"
            ? `$${displayNumber.toLocaleString()}`
            : displayNumber.toLocaleString()}
        </h1>
        <p className="sm:text-xl px-4 font-medium mt-6 max-w-lg mx-auto  3xl:text-2xl">
          {activeTab === "money"
            ? "Dollars annually through optimized battery systems"
            : "Hours annually through optimized battery systems"}
        </p>
      </div>
    </section>
  );
};

export default Numbers;