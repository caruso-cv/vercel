'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundHero() {

  const pathname = usePathname();
  const isPages = pathname === "/about" || pathname === "/services" || pathname === "/solutions/energ8te";

  return (
    <div
      className={`

        ${ isPages ? "filter hue-rotate-[240deg]" : "" }

        absolute 
        top-0
        left-1/2 
        -translate-x-1/2 
        pointer-events-none
        overflow-hidden
        w-full 
        4md:w-[1064px] 
        h-[420px]
        sm:h-[385px]
        bg-no-repeat 
        bg-top
        z-10
        [background:radial-gradient(50%_50%_at_50%_-20%,rgba(255,99,99,0.08)_0,hsla(0,100%,73%,0.04)_50.5%,rgba(90,23,177,0)_100%)]
        [background-size:clamp(200px,calc(100vw*1.586+45.31px),600px)]
        
      `}
    >
      <Image
        src="/bg/bg-hero.webp"
        alt="Neutron red background"
        fill
        priority
        className="object-cover"
        sizes="(max-width: 1064px) 100vw, 1064px"
      />
    </div>
  );
}
