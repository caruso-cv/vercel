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
  initial={{ y: -80 }}
  animate={{ y: 0 }}
  exit={{ y: -80 }}
  transition={{ duration: 0.3 }}
  className="hidden lg:flex items-center justify-center bg-black text-white fixed top-0 left-0 w-full h-16 z-[999]"
>
  <div className="mx-auto max-w-8xl w-full px-6 2xl:px-0 relative flex items-center justify-between">
    {/* Logo on left */}
    <div className="flex items-center">
      <Link href="/">
        <NavLogo className="h-8 w-auto text-[#CFCFCF] hover:text-white hover:cursor-pointer" />
      </Link>
    </div>

    {/* Centered Nav links */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <NavLinks className="text-white" />
    </div>

    {/* Contact button on the right */}
    <div>
      <ContactButton />
    </div>
  </div>
</motion.div>
  );
}