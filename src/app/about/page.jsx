'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Environmental from '@/components/icons/Environmental'
import Quality from '@/components/icons/QualityIcon'

export default function Example() {
  return (
    <div className="bg-[#090A0B] relative h-full pb-14">
      {/* Large static white background (edge-to-edge) */}
      <div className="bg-white absolute h-[600px] 2xl:h-[650px] top-[500px] z-20 w-full rounded-xl"></div>
      
      <div className="h-[35vh] 3xl:h-[25vh] relative z-30 flex flex-col items-center justify-center pt-12">
        <h2 className="text-center text-base/7 3xl:text-lg font-semibold text-[#425ACA]">
          About The Neutrons
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl 3xl:text-6xl 3xl:max-w-2xl">
          Because your battery deserves a brain &#129504;
        </p>
      </div>

      {/* Main content container that lifts into place with a slight spring */}
      <motion.div
        className="rounded-4xl relative z-20 max-w-7xl mx-auto bg-gradient-to-t from-[#ffffff] to-white/70 border border-[#f4f4f4] backdrop-blur-[20px]"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid gap-4 my-8 lg:grid-cols-3 lg:grid-rows-2">

            {/* Quality Section */}
            <motion.div
              className="relative lg:row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.01 }}
            >
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg 3xl:text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Quality
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 3xl:text-base text-gray-600 max-lg:text-center">
                    Equally, its ISO9001 certification affirms Neutron Controls’ dedication to quality, maintaining high operational standards that consistently satisfy customers, shareholders, and other key stakeholders.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-xl shadow-2xl bg-gradient-to-tr from-[#74B7E9] to-[#065BBA] border-black/10 border-x border-t">
                    <Quality
                      className="absolute bottom-[200px] left-[30%] opacity-5 fill-white"
                      style={{ transform: 'translate(-50%, 50%)', height: '90%' }}
                    />
                    <Image
                      src="/logo/Orion9001.webp"
                      alt="Certification Badge"
                      width={250}
                      height={250}
                      priority
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </motion.div>

            {/* Performance Section */}
            <motion.div
              className="relative max-lg:row-start-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg 3xl:text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Performance
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 3xl:text-base text-gray-600 max-lg:text-center">
                    Leveraging semiconductor expertise and Canadian heritage, Neutron Controls drives superior performance in energy control and battery management.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    src="/about/performance.png"
                    alt="Performance indicator"
                    width={500}
                    height={500}
                    priority
                    className="w-full max-lg:max-w-xs filter hue-rotate-[350deg]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </motion.div>

            {/* Security Section */}
            <motion.div
              className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg 3xl:text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Security
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 3xl:text-base text-gray-600 max-lg:text-center">
                    Our safety-critical design ensures robust security. Neutron Controls is committed to protecting and empowering critical industrial and automotive control systems.
                  </p>
                </div>
                <div className="flex items-center justify-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <Image
                    src="/about/security.png"
                    alt="Security Icon"
                    width={500}
                    height={500}
                    priority
                    className="object-cover h-[min(152px,40cqw)] filter hue-rotate-[350deg] "
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </motion.div>

            {/* Environmental Section */}
            <motion.div
              className="relative lg:row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg 3xl:text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Environmental
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 3xl:text-base text-gray-600 max-lg:text-center">
                      Neutron Controls shows its commitment to sustainability with ISO14001 certification, ensuring its operations not only meet environmental standards but also support stakeholder needs.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl shadow-2xl bg-gradient-to-tr from-[#31CAB2] to-[#4CAF29] border-black/10 border-l border-t">
                      <Environmental
                        className="absolute top-0 right-0 h-full opacity-5 fill-white"
                        style={{ transform: 'translateX(25%)' }}
                      />
                      <Image
                        src="/logo/Orion14001.webp"
                        alt="Certification Badge"
                        width={250}
                        height={250}
                        priority
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}