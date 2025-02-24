'use client';

import { useState, useEffect, useRef } from 'react';
import { Cog6ToothIcon, CloudArrowUpIcon, FingerPrintIcon } from '@heroicons/react/20/solid';
import InfineonLogo from '@/components/logos/Infineon';

const features = [
  {
    name: 'Seasoned Innovators. ',
    description: 'Collaborate with experts to deliver high-performance applications.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Advanced Technologies. ',
    description: 'Leverage cutting-edge Infineon solutions for faster time-to-market.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Specialized Support. ',
    description: 'Rely on end-to-end guidance, from concept to deployment.',
    icon: FingerPrintIcon,
  },
];

export default function InfineonSection() {
  // 1) All hooks are declared at the top (so they always run in the same order).
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const infineonRef = useRef(null);

  // 2) On the very first effect, mark that we've mounted. We do nothing else yet.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 3) In a second effect, only run once we know we’re mounted, to avoid SSR mismatch.
  useEffect(() => {
    if (!hasMounted) return;

    // Now we can safely check window.innerWidth
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // If on mobile, show the section statically (no animations).
    if (mobile) {
      setIsVisible(true);
      return;
    }

    // On desktop, observe intersection for “animate in” behavior.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (infineonRef.current) observer.observe(infineonRef.current);
    return () => observer.disconnect();
  }, [hasMounted]);

  // If not mounted yet, return nothing — but we’ve still run the same number of hooks
  if (!hasMounted) {
    return null;
  }

  // Transition classes only apply on desktop
  const transitionClasses = !isMobile ? 'transition-all duration-1000' : '';
  const opacityTransitionClasses = !isMobile ? 'transition-opacity duration-1000' : {};
  const gradientStyle = !isMobile ? { transitionDelay: '0ms' } : {};
  const svgStyle = !isMobile ? { transitionDelay: '200ms' } : {};
  const logoStyle = !isMobile ? { transitionDelay: '200ms' } : {};

  // Force static (fully visible) on mobile; animate if isVisible on desktop
  const visibilityClasses = isMobile || isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';

  return (
    <div ref={infineonRef} className="bg-gradient-to-b from-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 3xl:text-lg font-semibold text-[#425ACA]">Custom design</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl 3xl:text-6xl">
            Infineon's Preferred Design House
          </p>
          <p className="mt-6 text-lg/8 text-gray-300 3xl:text-xl">
            Unlock your design potential with Neutron Controls, your Infineon Preferred Design House for North America.
          </p>
        </div>
      </div>

      <div className="relative py-16 3xl:py-20">
        <div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
          <div className="relative w-[342px] h-[343px]">
            {/* Gradient Shadow Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-[#4DE9FE] to-[#0419AE] blur-2xl ${visibilityClasses} ${opacityTransitionClasses}`}
              style={gradientStyle}
            ></div>

            {/* Computer Chip SVG */}
            <svg
              viewBox="0 0 342 344"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute inset-0 h-full w-full ${visibilityClasses} ${transitionClasses}`}
              style={svgStyle}
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="342" y2="343" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1c1c1c" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
              </defs>
              <rect width="342" height="343" fill="url(#gradient)" />
            </svg>

            {/* Centered container for logo and text */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center ${visibilityClasses} ${transitionClasses}`}
              style={logoStyle}
            >
              <InfineonLogo className="w-60 h-auto text-white" />
              <p className="mt-6 text-4xl font-semibold bg-gradient-to-tr from-[#4DE9FE] to-[#0419AE] bg-clip-text text-transparent opacity-70">
                TriCore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9 3xl:text-lg">
              <dt className="inline font-semibold text-white">
                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#425ACA]" />
                {feature.name}
              </dt>
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}