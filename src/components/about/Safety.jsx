'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InfineonSections() {
  return (
    <section className="bg-gradient-to-b from-gray-900 ">
      <div className="mx-auto max-w-8xl lg:pb-12 px-6 2xl:px-0">
        <p className="text-lg font-semibold text-[#425ACA] lg:text-xl">
          We're commited to our
        </p>
        <h2 className="mt-4 uppercase lg:mt-6 text-pretty text-2xl xs:text-3xl font-bold text-white sm:text-balance sm:text-[36.8px] max-w-xl !leading-[1.2] ">
          Design excellence and environmental responsibility
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          {/* Environmental Section */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white/5 p-6 ring-1 ring-inset ring-white/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <motion.div
                className="relative h-80 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.01 }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-t-xl shadow-2xl bg-gradient-to-tr from-[#74B7E9] to-[#065BBA] border-black/10 border-x border-t">
                  <Image
                    src="/logo/Orion14001.webp"
                    alt="Orion14001 Certification Badge"
                    width={250}
                    height={250}
                    priority
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  />
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tl-[2rem]" />
              </motion.div>
              <div className="p-6 xs:p-10">
                <h3 className="mt-2 text-[1.10rem] leading-[1.65rem] font-bold tracking-tight text-white uppercase ">
                  Environmental
                </h3>
                <p className="mt-2 text-[1.10rem] leading-[1.65rem] text-gray-300 font-medium ">
                  Neutron Controls shows its commitment to sustainability with ISO14001 certification, ensuring its operations not only meet environmental standards but also support stakeholder needs.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          {/* Infineon Preferred Design House Section */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white/5 p-6 ring-1 ring-inset ring-white/10 max-lg:rounded-t-[2rem] lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <motion.div
                className="relative h-80 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-tl-xl shadow-2xl bg-gradient-to-tr from-[#31CAB2] to-[#0A8176] border-black/10 border-l border-t">
                  <Image
                    src="/logo/infineon-white.webp"
                    alt="Infineon logo"
                    width={320}
                    height={149}
                    priority
                    className="absolute top-1/2 left-1/2 w-[62%] max-w-[320px] h-auto transform -translate-x-1/2 -translate-y-1/2 z-20"
                  />
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
              </motion.div>
              <div className="p-6 xs:p-10">
                <h3 className="mt-2 text-[1.10rem] leading-[1.65rem] font-bold tracking-tight text-white uppercase">
                  Infineon Preferred Design House
                </h3>
                <p className="mt-2 text-[1.10rem] leading-[1.65rem] text-gray-300 font-medium">
                  As an Infineon Preferred Design House for North America, Neutron Controls delivers AURIX™-based designs backed by direct access to Infineon’s technology, tools, and support.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}