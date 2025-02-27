"use client";
import React, { useState } from "react";
import MainNav from "./MainNav";
import { motion } from "framer-motion";
import SecondaryNav from "@/components/nav/SecondaryNav";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondaryNavReady, setSecondaryNavReady] = useState(false);

  return (
    <div className="relative">
      {/* ----- MAIN NAV BAR (z-50) ----- */}
      <div className="relative w-full z-50">
        <MainNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          secondaryNavReady={secondaryNavReady}
        />
      </div>

      {/* ----- SECONDARY NAV CONTAINER ----- */}
      <div className="relative w-full z-40">
        <motion.div className="absolute w-full top-[122px] left-0">
          <SecondaryNav setSecondaryNavReady={setSecondaryNavReady} />
        </motion.div>
      </div>
    </div>
  );
}