"use client";
import React, { useState } from "react";
import MainNav from "./MainNav";
import Banner from './Banner'

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
      <div className="mt-[85px] lg:mt-[106px] absolute w-full z-40" >
        <Banner />
      </div>

    </div>
  );
}