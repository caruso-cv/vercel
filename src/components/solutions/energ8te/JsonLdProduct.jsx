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
          mpn: "ENERG8TE-001",
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Advanced Charging and Discharging Control",
              value: "Manages charging/discharging cycles with precision to extend battery lifespan and optimize performance."
            },
            {
              "@type": "PropertyValue",
              name: "Grid Interaction and Compliance",
              value: "Includes peak shaving, time-of-use management, and reactive power control for compliance and efficiency."
            },
            {
              "@type": "PropertyValue",
              name: "Energy Source Compatibility",
              value: "Integrates easily with solar, wind, and grid power for small to large-scale energy systems."
            }
          ]
        }),
      }}
    />
  )
}