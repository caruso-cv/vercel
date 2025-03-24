'use client';

import Link from 'next/link';
import React from 'react';

const ButtonLink = ({ buttonText, href, scrollId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(scrollId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link passHref href={href} scroll={false} onClick={handleClick}>
      <button className="inline-flex py-3 px-3.5 text-sm sm:text-base font-bold tracking-[0.2px] cursor-pointer border-none rounded-[5px] transition-colors duration-200 ease-in-out bg-[#E6E6E6] hover:bg-[#FFF] shadow-md opacity-90 hover:opacity-100 text-black">
        <span>{buttonText}</span>
      </button>
    </Link>
  );
};

export default ButtonLink;