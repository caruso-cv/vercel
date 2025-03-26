import Image from "next/image";
import React from "react";

const PartnersLogo = ({ image }) => {
  return (
    <div className="relative overflow-hidden h-[100px] min-w-[200px] flex justify-center items-center">
      <Image
        src={image}
        alt={image}
        fill
        className='object-cover'
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
      />
    </div>
  );
};

export default PartnersLogo;