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
          description: "Supports advanced BMS interfaces including Analog Devices ISO SPI, Infineon ISO UART, and Texas Instruments BMS devices.",
          brand: "Neutron Controls"
        }),
      }}
    />
  )
}