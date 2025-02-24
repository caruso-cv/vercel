import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function BackgroundFooter() {

  const pathname = usePathname();
  const isPages = pathname === "/about" ||  pathname === "/contact" ||  pathname === "/services";

  return (
    <div
      className={` ${ isPages ? "filter hue-rotate-[230deg]" : "" } absolute top-[-40px] left-1/2 opacity-50 transform -translate-x-1/2 rotate-[85deg]`}
      style={{ width: "800px", height: "800px" }}
    >
      <Image
        src="/bg/bg.webp"
        alt="neutron red background"
        fill
        className="object-cover"
        sizes="800px"
      />
    </div>
  );
}