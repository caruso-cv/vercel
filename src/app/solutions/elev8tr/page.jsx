'use client'

import { useState, useEffect } from 'react'
import InfineonSection from '@/components/services/InfineonSection';
import Ecu8tr from '@/components/solutions/Ecu8tr'
import Purpose from "@/components/icons/Purpose"
import Quality from "@/components/icons/Quality"
import Parameter from "@/components/icons/Parameter"
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Elev8tr from "@/components/solutions/Elev8tr";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className='bg-white relative'>
      <main>
        <Elev8tr />
      </main>
      <div className="overflow-x-hidden relative bg-[#090A0B]">
        <InfineonSection />
      </div>
    </div>
  )
}