import DigitalBackground from '@/components/DigitalBackground'
import NoiseOverlay from '@/components/NoiseOverlay'
import Elev8tr from "@/components/logos/ELEV8TR";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Example() {
    return (
      <div className="bg-white ">

        <div className=' h-full text-black flex flex-col lg:flex-row items-center justify-center  relative z-30 max-w-8xl mx-auto md:pb-52 pt-64'>
            <div className='flex justify-start mb-6 lg:mb-0 w-full pl-14 pt-32 lg:hidden'>
                <Elev8tr className="h-16 sm:h-24 mb-12" />
            </div>

            <div className="flex justify-center mb-6 lg:mb-0">
                <Image
                    src='/vertical/elev8tr.webp'
                    alt='Emula8tr ESS Controller'
                    width={1200}
                    height={800}
                    className="w-full max-w-full lg:max-w-[50vw] h-auto"
                />
            </div>

            <div className="lg:max-w-[50vw] mx-auto lg:w-2/3 text-left px-8 pt-12 lg:pt-0">

                <div className=' text-left px-8 pt-12 lg:pt-0 '>
                    <Elev8tr className="h-16 sm:h-24 3xl:h-36 md:mb-5 hidden lg:block" />
                    <h2 className="3xl:text-4xl text-2xl sm:text-3xl font-bold xl:mb-10 mb-6">
                    <span className="hidden sm:inline">
                        THE COMPLETE PLATFORM FOR
                        </span>{" "}
                        ACCELERATING BMS ALGORITHM DEVELOPMENT
                    </h2>
                    <p className='font-medium text-xl md:text-2xl 3xl:text-3xl xl:mb-10 mb-6'>ELEV8TR™ is a comprehensive package of automotive development tools designed for OEMs looking to fast-track their Battery Management System (BMS) algorithms.</p>
                    <ul className='list-disc font-base text-lg md:text-xl xl:text-2xl 3xl:text-3xl pl-4 leading-[1.8] mb-8 lg:mb-14 xl:space-y-3 md:space-y-1 '>
                        <li >All-in-One Simulation Solution</li>
                    </ul>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link href='/solutions/energ8te' passHref>
                        <motion.div
                        className="
                            inline-flex 
                            items-center 
                            justify-center
                            gap-2
                            min-h-[40px]
                            sm:min-h-[48px]
                            px-3
                            sm:px-6 
                            py-1.5
                            text-[1rem]
                            sm:text-lg
                            3xl:text-lg
                            font-medium 
                            leading-[16px]
                            tracking-[0.2px]
                            whitespace-nowrap
                            cursor-pointer
                            border-none
                            rounded-md
                            transition-colors
                            duration-200
                            ease-in-out
                            bg-[#000]
                            hover:bg-[#191919]
                            shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                            opacity-90
                            hover:opacity-100
                            hover:text-white
                            text-white/90
                        "
                        >Specifications
                        </motion.div>
                        </Link>
                        <Link href="#" className="text-lg/6 font-semibold text-gray-900">
                        View brochure <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        <DigitalBackground />
        <NoiseOverlay />
      </div>
    )
  }
  