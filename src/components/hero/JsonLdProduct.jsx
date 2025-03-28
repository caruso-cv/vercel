'use client'

import React from 'react'

export default function JsonLdProduct() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Neutron Controls Product Overview",
          "description": "Overview of advanced battery testing and energy storage products from Neutron Controls.",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "ECU8TR™ Battery Factory Point Tester",
              "image": "https://www.neutroncontrols.com/vertical/ecu8tr.webp",
              "description": "Supports advanced BMS interfaces including Analog Devices ISO SPI, Infineon ISO UART, and Texas Instruments BMS devices.",
              "brand": {
                "@type": "Brand",
                "name": "Neutron Controls™"
              },
              "sku": "ECU8TR",
              "mpn": "ECU8TR-001"
            },
            {
              "@type": "Product",
              "name": "ELEV8TR™ Industrial Battery Validation System",
              "image": "https://www.neutroncontrols.com/vertical/elev8tr.webp",
              "description": "Delivers high-throughput validation and safety testing for energy storage systems, supporting a range of industrial BMS protocols.",
              "brand": {
                "@type": "Brand",
                "name": "Neutron Controls™"
              },
              "sku": "ELEV8TR",
              "mpn": "ELEV8TR-001"
            },
            {
              "@type": "Product",
              "name": "ENERG8TE™ BMS Controller for BESS/ESS Installations",
              "image": "https://www.neutroncontrols.com/vertical/energ8te.webp",
              "description": "Advanced BMS controller for optimizing performance, reliability, and energy efficiency in BESS/ESS installations.",
              "brand": {
                "@type": "Brand",
                "name": "Neutron Controls™"
              },
              "sku": "ENERG8TE",
              "mpn": "ENERG8TE-001"
            }
          ]
        }),
      }}
    />
  )
}