import React from "react";
import Logo from "@/components/logos/Logo";
import ELEV8TR from "@/components/logos/ELEV8TR";
import ECU8TR from "@/components/logos/ECU8TR";
import ENERG8TE from "@/components/logos/ENERG8TE";
import BackgroundFooter from "@/components/backgrounds/BackgroundFooter";
import LinkedIn from "@/components/icons/LinkedIn";
import Link from "next/link";
import CookieLink from "@/components/cookies/CookieLink.client";

export default function Footer() {
  return (
    <footer
      className="relative text-white overflow-x-hidden mt-20"
      style={{ paddingTop: "clamp(100px, calc(100vw * 0.23 + 13.79px), 200px)" }}
    >
      {/* Background */}
      <BackgroundFooter />

      <div
        className="relative mx-auto z-10 w-full bg-gradient-to-t from-[#07080a] to-black/70 shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] border-t border-[#111213] backdrop-blur-[72px] md:pb-24 pb-12 pt-28"
        style={{ willChange: "transform, opacity" }}
      >
        {/* TOP ROW */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-8xl mx-auto px-6 2xl:px-0">
          {/* LOCATIONS Column */}
          <div>
            <h3 className="uppercase tracking-[7px] font-semibold mb-3 text-white lg:text-base">
              Ottawa
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60 lg:text-[1rem] lg:leading-[1.5rem] text-[1rem]">
              1145 Innovation Drive, Suite 101<br />
              Kanata, Ontario, K2K 3G8<br />
              Canada
            </p>
            <h3 className="uppercase tracking-[7px] font-semibold mb-3 text-white lg:text-base">
              Toronto
            </h3>
            <p className="mb-6 leading-[1.8] text-white/60 text-base lg:text-[1rem] lg:leading-[1.5rem] text-[1rem]">
              5270 Solar Drive, Unit 21<br />
              Mississauga, Ontario, L4W 0G7<br />
              Canada
            </p>
          </div>

          {/* SOLUTIONS Column */}
          <div>
            <h3 className="uppercase tracking-[7px] font-semibold mb-4 text-white hidden xs:block lg:text-base">
              Solutions
            </h3>
            <div>
              <Link 
                href="/solutions/ecu8tr"
                aria-label="Navigate to ECU8TR solution"
              >
                <ECU8TR className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out mb-2 lg:h-10" />
              </Link>
              <Link 
                href="/solutions/elev8tr"
                aria-label="Navigate to ELEV8TR solution"
              >
                <ELEV8TR className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out mb-2 lg:h-10" />
              </Link>
              <Link 
                href="/solutions/energ8te"
                aria-label="Navigate to ENERG8TE solution"
              >
                <ENERG8TE className="4xs:h-8 opacity-60 hover:opacity-100 cursor-pointer transition-all duration-50 ease-in-out lg:h-10" />
              </Link>
            </div>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="uppercase tracking-[7px] font-semibold mb-3 lg:text-[1rem] lg:leading-[1.5rem]">
              Company
            </h3>
            <ul className="space-y-[2px] leading-relaxed text-white/60 lg:text-[1rem] lg:leading-[1.5rem] lg:space-y-[4px] 2xl:space-y-[6px] text-[1rem]">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <CookieLink />
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-14 flex flex-col xs:flex-row items-center justify-between gap-4 max-w-8xl mx-auto px-6 2xl:px-0">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              aria-label="Navigate to homepage"
            >
              <Logo className="h-[4rem]" />
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/company/neutron-controls"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label="Visit our LinkedIn"
          >
            <div
              className="flex items-center space-x-4 group cursor-pointer transition-opacity duration-200 delay-200 animate-fadeIn"
            >
              <p className="hidden xs:block text-[#BABABA] group-hover:text-white transition-colors duration-50 font-medium lg:text-lg">
                Follow us
              </p>
              <div className="bg-white/5 rounded-[4px] p-1 group-hover:bg-white/10 transition-colors duration-50">
                <LinkedIn className="w-5" />
              </div>
            </div>
          </a>
        </div>
        
      </div>
      <div className="text-white/30 text-sm px-6 pb-6 2xl:px-0 max-w-8xl mx-auto">
        © Neutron Controls 2025
      </div>
    </footer>
  );
}