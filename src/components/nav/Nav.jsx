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
      <div className="relative z-50">
        <MainNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          secondaryNavReady={secondaryNavReady}
        />
      </div>

      {/* ----- SECONDARY NAV CONTAINER ----- */}
      <div className="relative w-full" style={{ height: "48px" }}>
        <motion.div className="absolute inset-0">
          <SecondaryNav setSecondaryNavReady={setSecondaryNavReady} />
        </motion.div>
      </div>
    </div>
  );
}