
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactButton() {
  return (
    <Link href='/contact' passHref>
    <motion.div className="hidden lg:inline-flex items-center justify-center py-3 px-2.5 md:px-3.5 text-sm font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black uppercase">
      <span>CONTACT US</span>
    </motion.div>
  </Link>
  );
}