'use client'

import React from "react";
import Logo from "@/components/logos/Logo";
import Equ8 from "@/components/logos/ECU8";
import Equ8ter from "@/components/logos/ECU8TR";
import Energate from "@/components/logos/ENERG8TE";
import BackgroundFooter from "@/components/BackgroundFooter";
import LinkedIn from "@/components/icons/LinkedIn";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

return (
  <footer
    className="relative bg-[#090A0B] text-white overflow-x-hidden"
    style={ { paddingTop: "clamp(100px, calc(100vw * 0.23 + 13.79px), 200px)" } }
    suppressHydrationWarning
  >
      {/* Render BackgroundFooter only if NOT on About or Careers pages */}
      <BackgroundFooter/>


      {/* Content container with gradient, blur, shadow, and border */}
      <div
        className="relative mx-auto z-10 w-full bg-gradient-to-t from-[#07080a] to-black/70 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] border-t border-[#111213] backdrop-blur-[72px] md:pb-40 pb-12 pt-28 px-6"
        style={{ willChange: "transform, opacity" }}
      >
        
        {/* ============== TOP ROW: 3 Columns ============== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* LOCATIONS Column */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3 text-white">
              Ottawa
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60">
              1145 Innovation Drive, Suite 101<br />
              Kanata, Ontario, K2K 3G8<br />
              Canada
            </p>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3 text-white">
              Toronto
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60">
              5270 Solar Drive, Unit 21<br />
              Mississauga, Ontario, L4W 0G7<br />
              Canada
            </p>
          </div>

          {/* SOLUTIONS Column */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-4 text-white">
              Solutions
            </h3>
            <div>
              <Link href="/solutions/ecu8tr">
                <Equ8 
                  className="h-6 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out"
                />
              </Link>
              <Link href="/solutions/ecu8tr">
                <Equ8ter
                  className="h-[26px] mt-4 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out"
                />
              </Link>
              <Link href="/solutions/energ8te">
                <Energate
                  className="h-[16.5px] mt-5 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out"
                />
              </Link>
            </div>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="text-sm uppercase tracking-[7px] font-semibold mb-3">
              Company
            </h3>
            <ul className="space-y-[2px] leading-relaxed text-white/60">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

        </div>
        
        {/* ============== BOTTOM ROW ============== */}
        <div className="mt-14 flex flex-col xs:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="h-16" />
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/company/neutron-controls"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div className="flex items-center space-x-4 group cursor-pointer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <motion.p className="hidden xs:block text-[#BABABA] group-hover:text-white transition-colors duration-50 font-medium">
                Follow us
              </motion.p>
              <div className="bg-white/5 rounded-[4px] p-1 group-hover:bg-white/10 transition-colors duration-50">
                <LinkedIn className="w-5 h-4.5" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </footer>
  );
}
