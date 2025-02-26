// MinimalNav.jsx (or define inside the same file)
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLogo from "@/components/logos/MobileLogo";
import ContactButton from "./DropButton";
import NavLinks from "./NavLinks";

export default function MinimalNav() {
  return (
    <motion.div
      // Animate in/out from above the top
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      exit={{ y: -80 }}
      transition={{ duration: 0.3 }}
      // On desktop, show; on mobile, keep hidden
      className="hidden lg:flex items-center justify-between px-6 bg-black text-white
                 fixed top-0 left-0 w-full h-16 z-[999]" 
    >
      {/* Logo on left */}
      <div className="flex items-center">
        <Link href="/">
          <NavLogo className="h-8 w-auto text-[#CFCFCF] hover:text-white hover:cursor-pointer"/>
        </Link>
      </div>

      {/* Main Nav links in the middle */}
      <div className="flex space-x-6">
        <NavLinks className="text-white" />
      </div>

      {/* Contact button on the right */}
      <div>
        <ContactButton />
      </div>
    </motion.div>
  );
}