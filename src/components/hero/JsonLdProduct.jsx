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
          "description": "Overview of EV battery management ECU platforms and battery factory testers from Neutron Controls.",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "ECU8™ EV Battery Management ECU Prototype Platform",
              "image": "https://www.neutroncontrols.com/vertical/ecu8-board.webp",
              "description": "An Infineon AURIX™ based prototype platform for EV Battery Management ECUs, emphasizing ISO 26262 safety and ISO 21434 security, and intended as a path to certified production units owned and built by the OEM.",
              "brand": {
                "@type": "Brand",
                "name": "Neutron Controls™"
              },
              "sku": "ECU8",
              "mpn": "ECU8-001"
            },
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
            }
          ]
        }),
      }}
    />
  )
}