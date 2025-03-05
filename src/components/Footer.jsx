'use client'

import React from "react";
import Logo from "@/components/logos/Logo";
import Elev8tr from "@/components/logos/ELEV8TR";
import Equ8ter from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";
import BackgroundFooter from "@/components/BackgroundFooter";
import LinkedIn from "@/components/icons/LinkedIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

return (
  <footer
    className="relative text-white overflow-x-hidden"
    style={ { paddingTop: "clamp(100px, calc(100vw * 0.23 + 13.79px), 200px)" } }
    suppressHydrationWarning
  >
      {/* Render BackgroundFooter only if NOT on About or Careers pages */}
      <BackgroundFooter />


      {/* Content container with gradient, blur, shadow, and border */}
      <div
        className="relative mx-auto z-10 w-full bg-gradient-to-t from-[#07080a] to-black/70 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] border-t border-[#111213] backdrop-blur-[72px] md:pb-40 pb-12 pt-28 px-6"
        style={{ willChange: "transform, opacity" }}
      >
        
        {/* ============== TOP ROW: 3 Columns ============== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-8xl mx-auto">
          
          {/* LOCATIONS Column */}
          <div>
            <h3 className="text-xs 4xs:text-sm uppercase tracking-[7px] font-semibold mb-3 text-white lg:text-base">
              Ottawa
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60 lg:text-lg">
              1145 Innovation Drive, Suite 101<br />
              Kanata, Ontario, K2K 3G8<br />
              Canada
            </p>
            <h3 className="text-xs 4xs:text-sm uppercase tracking-[7px] font-semibold mb-3 text-white lg:text-base">
              Toronto
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60 lg:text-lg">
              5270 Solar Drive, Unit 21<br />
              Mississauga, Ontario, L4W 0G7<br />
              Canada
            </p>
          </div>

          {/* SOLUTIONS Column */}
          <div>
            <h3 className=" text-xs 4xs:text-sm uppercase tracking-[7px] font-semibold mb-4 text-white lg:text-base">
              Solutions
            </h3>
            <div>
            <Link href="/solutions/ecu8tr">
                <Equ8ter
                  className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out mb-2 lg:h-10"
                />
              </Link>
              <Link href="/solutions/elev8tr">
                <Elev8tr
                  className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out mb-2 lg:h-10"
                />
              </Link>
              <Link href="/solutions/energ8te">
                <Energate
                  className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out lg:h-10"
                />
              </Link>
            </div>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="text-xs 4xs:text-sm uppercase tracking-[7px] font-semibold mb-3 lg:text-base">
              Company
            </h3>
            <ul className="space-y-[2px] leading-relaxed text-white/60 lg:text-lg 2xl:text-xl lg:space-y-[4px] 2xl:space-y-[6px]">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

        </div>
        
        {/* ============== BOTTOM ROW ============== */}
        <div className="mt-14 flex flex-col xs:flex-row items-center justify-between gap-4 max-w-8xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="h-16 lg:h-24" />
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/company/neutron-controls"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div className="flex items-center space-x-4 group cursor-pointer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <motion.p className="hidden xs:block text-[#BABABA] group-hover:text-white transition-colors duration-50 font-medium lg:text-lg">
                Follow us
              </motion.p>
              <div className="bg-white/5 rounded-[4px] p-1 group-hover:bg-white/10 transition-colors duration-50">
                <LinkedIn className="w-5" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </footer>
  );
}
