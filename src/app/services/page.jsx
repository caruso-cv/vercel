'use client'

import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/20/solid';
import Battery from '@/components/icons/Battery';
import Design from '@/components/icons/Design';
import Safety from '@/components/icons/SafetyIcon';
import InfineonSection from '@/components/services/InfineonSection';
import Infineon from '@/components/services/Infineon';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'BMS Controls',
    id: 'tier-hobby',
    href: '/solutions/ecu8tr',
    buttonText: 'Discover BMS',
    description:
      'Elevate your battery management capabilities. Ensure reliable power and maximize energy efficiency.',
    features: [
      'High-performance BMS and ECU design',
      'Enhanced battery longevity',
      'Tailored solutions for EVs and renewables',
      'Industrial-grade safety and performance',
    ],
    icon: <span aria-label="Battery icon" role="img"><Battery className="h-20 w-20 sm:w-28 sm:h-28" aria-hidden="true" /></span>,
  },
  {
    name: 'Safety-Critical Design',
    id: 'tier-team',
    href: '/about',
    buttonText: 'Explore safety',
    description:
      'Drive safety and reliability with integrated systems that meet ISO 26262 standards.',
    features: [
      'Functional safety expertise for automotive and industrial control',
      'Compliance with ISO 26262 for highest reliability',
      'High-performance designs prioritizing occupant and environmental protection',
    ],
    icon: <span aria-label="Safety icon" role="img"><Safety className="h-20 w-20 sm:w-28 sm:h-28" aria-hidden="true" /></span>,
  },
  {
    name: 'Advanced Design Solutions',
    id: 'tier-enterprise',
    href: '/contact',
    buttonText: 'Get in touch',
    description:
      'Discover the next generation of innovation with tailored advanced design solutions.',
    features: [
      'Next-generation electronic systems built to your unique vision',
      'Bold prototypes leveraging cutting-edge engineering and technology',
      'Advanced analytics',
      'Expert teams tackling complex challenges with ingenuity and creativity',
    ],
    icon: <span aria-label="Design icon" role="img"><Design className="h-20 w-20 sm:w-28 sm:h-28" aria-hidden="true" /></span>,
  },
];

export default function Page() {
  return (
    <div className="overflow-hidden bg-[#090A0B]">
      {/* Header / Services Section with separate title and subtitle animations */}
      <section aria-labelledby="services-heading">
        <div className="mx-auto max-w-8xl px-6 pb-96 lg:pb-[416px] text-center pt-36 2xl:px-0 sm:pt-52">
          <div className="mx-auto max-w-4xl relative z-30">
            <motion.h1
              id="services-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-2 uppercase lg:mt-6 text-pretty text-4xl font-bold text-white sm:text-balance sm:text-[56px] md:mt-4 leading-[1.1]"
            >
              Smarter Energy Solutions
            </motion.h1>
          </div>
          <div className="relative mt-6 2xl:mt-10">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mx-auto max-w-2xl text-pretty font-medium text-gray-200 text-[1rem] sm:text-[1.25rem]/[2rem] lg:max-w-4xl"
            >
              Advanced BMS and ESS solutions designed for efficiency, safety, and <span className='hidden sm:inline'>seamless integration—optimizing performance and</span> reliability.
            </motion.p>
            <svg
              aria-hidden="true"
              role="presentation"
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 h-[1024px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#1188CA" />
                  <stop offset={1} stopColor="#030C6C" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Tier Cards Section with staggered fade-in and hover scale */}
      <section aria-labelledby="tier-cards-heading" className="flow-root bg-white pb-24 sm:pb-32 relative z-10">
        <h2 id="tier-cards-heading" className="sr-only">Service Tiers</h2>
        <div className="-mt-80">
          <div className="mx-auto max-w-8xl px-6 2xl:px-0">
            <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10 sm:p-8 w-full"
                >
                  <div>
                    <h3 id={tier.id} className="text-[1rem] leading-[1.75rem] font-semibold text-[#425ACA] pb-8">
                      {tier.name}
                    </h3>
                    <div className="mt-4 sm:mt-6 flex items-center justify-center" aria-label={`Icon representing ${tier.name}`} role="img">
                      {tier.icon}
                    </div>
                    <p className="mt-6 sm:mt-12 text-[1rem] leading-[1.65rem] text-black">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-2 sm:space-y-4 text-[1rem] leading-[1.5rem]  text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#425ACA]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 uppercase block rounded-md bg-[#425ACA] px-3.5 py-2 text-center text-[0.875rem] leading-[1.5rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA]"
                  >
                    {tier.buttonText}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: tiers.length * 0.2, duration: 0.5 }}
                className="flex flex-col gap-y-6 rounded-md p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center"
              >
                <div className="lg:flex-1">
                  <h3 className="text-[1rem] leading-[1.75rem] font-semibold text-[#425ACA]">Our AURIX Expertise</h3>
                  <p className="mt-4 text-[1rem] leading-[1.75rem] text-black">
                    Unleash the full potential of Infineon’s AURIX™-MCUs with expert design support and tailored training, equipping you to harness cutting-edge technology for maximum performance and reliability.
                  </p>
                </div>
                <div className="lg:pl-10">
                  <Link
                    href="/solutions/ecu8tr"
                    className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-[#425ACA] ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425ACA] md:text-[1rem] md:leading-[1.75rem]"
                  >
                    See our solutions <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fade in Infineon Section and Infineon */}
      <section aria-labelledby="infineon-heading">
        <h2 id="infineon-heading" className="sr-only">Infineon Services</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <InfineonSection />
          <Infineon />
        </motion.div>
      </section>
    </div>
  );
}