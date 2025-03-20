
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DropButton() {
  return (
          <Link href="/contact" passHref>
            <motion.div
              className="
                items-center 
                justify-center
                hidden lg:inline-flex 
                shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                opacity-90
                hover:opacity-100
                text-black
                py-3 px-2.5 md:px-3.5 text-[0.75rem] leading-[1rem] font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF]
                uppercase
              "
            >
              
              <span>Contact us</span>
            </motion.div>
          </Link>
  );
}