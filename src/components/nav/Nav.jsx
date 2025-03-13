"use client";
import React, { useState } from "react";
import MainNav from "./MainNav";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* ----- MAIN NAV BAR (z-50) ----- */}
      <div className="relative w-full z-50">
        <MainNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}