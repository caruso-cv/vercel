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
          image: [
            "https://www.neutroncontrols.com/vertical/energ8te.webp"
          ],
          description: "ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.",
          brand: {
            "@type": "Brand",
            name: "Neutron Controls™"
          },
          sku: "ENERG8TE",
          mpn: "ENERG8TE-001"
        }),
      }}
    />
  )
}