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
          name: "ECU8TR™ Battery Factory Point Tester",
          image: [
            "https://www.neutroncontrols.com/vertical/ecu8tr.webp"
          ],
          description: "Supports advanced BMS interfaces including Analog Devices ISO SPI, Infineon ISO UART, and Texas Instruments BMS devices.",
          brand: {
            "@type": "Brand",
            name: "Neutron Controls™"
          },
          sku: "ECU8TR",
          mpn: "ECU8TR-001"
        }),
      }}
    />
  )
}