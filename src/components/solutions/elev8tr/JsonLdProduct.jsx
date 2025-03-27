'use client'

import React from 'react'

export default function JsonLdProduct() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development",
          description: "ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.",
          brand: "Neutron Controls"
        }),
      }}
    />
  )
}