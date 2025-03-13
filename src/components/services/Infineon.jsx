
'use client'
import React from "react";
import TopRight from "@/components/icons/TopRight";
import { motion } from "framer-motion";
import InfineonIcon from "@/components/AnimatedInfineon";
import Link from 'next/link';
import Bullets from '@/components/services/Bullets';


// Framer Motion variants for the arrow
const arrowVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: -2 },
};

function Infineon() {
  return (
    <section className="bg-[#090A0B] pt-20 sm:pb-16 hidden">

      {/* ================== 5-COLUMN DESKTOP (≥LG) ================== */}
      <div className="flex max-w-8xl mx-auto relative overflow-hidden">
        {/*
          ========= FADE GRADIENTS ON ALL SIDES =========
          Adjust the widths/heights as needed.
        */}
        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#090A0B] to-transparent" />
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#090A0B] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#090A0B] to-transparent" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090A0B] to-transparent" />



        {/* COLUMN TWO */}
        <div className="flex flex-col w-full border-r border-[#1B1C1E]">
          {/* Row 1 */}
          <div className="flex">
            <div className="w-1/2 py-12 border-r border-[#1B1C1E]" />
            <div className="w-1/2 py-12 border-[#1B1C1E]" />
          </div>

          {/* Row 2 */}
          <div className="flex">
            <div className="w-1/2 border-t py-6 border-r border-[#1B1C1E]" />
            <div className="w-1/2 border-t py-6 border-[#1B1C1E]" />
          </div>

          {/* Rows 3 & 4 -> merged cell for the image */}
          <div className="relative border-y border-[#1B1C1E] min-h-[680px] xl:min-h-[785.74px] min-w-[796.62px] flex items-center justify-center overflow-hidden">
            <div className='z-10'>
                <Bullets/>
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex">
            <div className="w-1/2 border-b py-6 border-r border-[#1B1C1E]"/>
            <div className="w-1/2 border-b py-6 border-[#1B1C1E]"/>
          </div>

          {/* Row 6 */}
          <div className="flex">
            <div className="w-1/2 py-12 border-r border-[#1B1C1E]"/>
            <div className="w-1/2 py-12 border-[#1B1C1E]"/>
          </div>
        </div>

        {/* COLUMNS 3 & 4 MERGED: polka‑dot background behind image */}
        <div className="hidden 2xl:flex flex-col w-full border-r border-[#1B1C1E]">
          {/* Row 1 */}
          <div className="flex">
            <div className="w-1/2 py-12 border-r border-[#1B1C1E]"/>
            <div className="w-1/2 py-12 border-[#1B1C1E]"/>
          </div>

          {/* Row 2 */}
          <div className="flex">
            <div className="w-1/2 border-t py-6 border-r border-[#1B1C1E]" />
            <div className="w-1/2 border-t py-6 border-[#1B1C1E]" />
          </div>

          {/* Rows 3 & 4 -> merged cell for the image */}
          <div className="relative border-y border-[#1B1C1E] min-h-[680px] xl:min-h-[785.74px] min-w-[796.62px] 2xl:flex items-center justify-center overflow-hidden hidden">
            {/* Polka‑dot background (inline SVG, smaller + spaced) */}
            <div
              className="
                absolute inset-0 z-0
                bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%20fill%3D%22%231B1C1E%22/%3E%3C/svg%3E')]
                bg-repeat
                pointer-events-none
              "
            />
            {/* Image on top (z-10) */}
            <div className="relative w-[600px] h-[400px] flex items-center justify-center">
              <InfineonIcon className="w-full h-full object-contain block mx-auto" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex">
            <div className="w-1/2 border-b py-6 border-r border-[#1B1C1E]" />
            <div className="w-1/2 border-b py-6 border-[#1B1C1E]" />
          </div>

          {/* Row 6 */}
          <div className="flex">
            <div className="w-1/2 py-12 border-r border-[#1B1C1E]" />
            <div className="w-1/2 py-12 border-[#1B1C1E]" />
          </div>
        </div>

        
      </div>

      {/* ================== RESPONSIVE (UNDER LG) ================== */}
      <div className="hidden max-w-8xl mx-auto px-4 sm:px-6">

        {/* ROW 1: top spacing + top border */}
        <div className="border-t border-[#1B1C1E] py-6" />

        {/* ROW 2: polka‑dot behind the image */}
        <div className="relative border-y border-[#1B1C1E] flex items-center justify-center py-8 overflow-hidden">
          <div
            className="
              absolute inset-0 z-0
              bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221%22%20fill%3D%22%231B1C1E%22/%3E%3C/svg%3E')]
              bg-repeat
              pointer-events-none
            "
          />
          <div className="relative w-full max-w-[796px] mx-auto aspect-[488/385] flex items-center justify-center">
            <InfineonIcon className="w-full h-full object-contain block mx-auto" />
          </div>
        </div>

        {/* ROW 3: two columns at md, single column below md */}
        <div className="border-b border-[#1B1C1E] grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN: big heading */}
          <div className="border-[#1B1C1E] p-8 pb-0 md:pb-8 flex items-center">
            <p className="text-pretty text-4xl font-bold text-white sm:text-balance sm:text-[2.7rem] uppercase leading-tight max-w-md">
              Infineon&apos;s Preferred Design House
            </p>
          </div>

          {/* RIGHT COLUMN: text + button with Motion hover */}
          <Link href="/services" className="block">
            <motion.div
              className="p-8 hover:bg-[#0C0D0F] cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <p className="text-lg leading-relaxed max-w-xs font-geist text-[#6A6B6C] mb-6">
                As an Infineon Preferred Design House, Neutron Controls brings ideas to life,
                uniting Infineon&apos;s advanced solutions with our expert guidance.
              </p>
              <span className="inline-block font-medium text-white transition-colors font-geist pt-2">
                Learn more
                <motion.span
                  className="inline-block w-5 h-5 mb-1 ml-2"
                  variants={arrowVariants}
                >
                  <TopRight />
                </motion.span>
              </span>
            </motion.div>
          </Link>
        </div>

        {/* ROW 4: bottom spacing */}
        <div className="py-6" />
      </div>
{/* 
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className=" text-white text-center bg-gray-600 p-6 ">
          <div className='bg-[#1C4968] align-middle m-2 h-[50px]'>Application Layer (Demo Code)</div>
          <div className='bg-[#267EBC]  m-2 h-[50px]'>Real-Time Environment</div>
          <div>
            <div className='flex'>
              <div className='bg-[#7940A3] ml-2 w-2/4 p-4'>Services Layer</div>
              <div className='bg-[#7940A3] mx-2 w-1/4 p-4'></div>
              <div className='bg-[#FA2A23] mr-2 p-4 w-1/4'>Complex Device Drivers</div>
            </div>
            <div>
              <div className='bg-[#2FB15D] m-2 h-[50px]'>MCU Abstruction Layer (MCAL)</div>
            </div>
            <div className='bg-[#FA2A23] m-2 h-[50px]'>Complex Device Drivers</div>
          </div>
          <div className='bg-[#505050] m-2 h-[50px]'>Infineon AURIX Microcontroller</div>
        </div>
      </div> */}

    </section>
  );
}

export default Infineon;