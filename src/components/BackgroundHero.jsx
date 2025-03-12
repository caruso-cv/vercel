'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundHero() {

  const pathname = usePathname();
  const isPages = pathname === "/about" || pathname === "/services";
  const isHome = pathname === "/";
  const visibilityClasses = isHome ? "hidden lg:block" : "block";

  const isSolutionsPage = pathname.includes("/solutions");
  if (isSolutionsPage) {
    return null;
  }
  
  if (isHome || isSolutionsPage) {
    return null;
  }

  return (
    <div
      className={`
        ${isPages ? "filter hue-rotate-[240deg]" : ""}
        ${visibilityClasses}
        block
        absolute
        -top-24
        sm:top-0
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
      `}
    >
     <Image
        src="/bg/bg-hero.png"
        alt="Neutron red background"
        fill
        priority
        className="object-contain lg:object-cover"
        sizes="(max-width: 1064px) 100vw, 1064px"
      />
    </div>
  );
}