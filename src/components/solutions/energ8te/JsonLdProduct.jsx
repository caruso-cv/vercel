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
          name: "ENERG8TE™ BMS Controller for BESS/ESS Installations",
          description: "ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.",
          brand: "Neutron Controls"
        }),
      }}
    />
  )
}