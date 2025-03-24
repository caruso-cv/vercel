'use client'

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundFooter() {

  const pathname = usePathname();
  const isPages = pathname === "/about" ||  pathname === "/services" ;

  return (
    <div
      className={` ${ isPages ? "filter hue-rotate-[230deg]" : "" } absolute top-[-40px] 3xl:top-[-76px] left-1/2 opacity-50 transform -translate-x-1/2 rotate-[85deg] w-[400px] h-[400px] 4xs:w-[500px] 4xs:h-[500px] sm:w-[600px] sm:h-[600px] 2xl:w-[700px] 2xl:h-[700px] 3xl:w-[800px] 3xl:h-[800px]`}
    >
      <Image
        src="/bg/bg.webp"
        alt="neutron red background"
        className="object-cover"
        width={1600 }
        height={1600}
      />
    </div>
  );
}