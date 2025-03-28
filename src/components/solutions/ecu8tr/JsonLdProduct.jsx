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
          mpn: "ECU8TR-001",
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Interfaces",
              value: "ISO COMM (Analog Devices ISO SPI BMS Devices, Infineon ISO UART BMS Devices, NXP BMS Devices, and Texas Instruments BMS Devices), Ethernet 10/100 baseT, CAN FD, 12V Power Input"
            },
            {
              "@type": "PropertyValue",
              name: "Dimensions",
              value: "8.000\"L x 16.600\"W x 1.750\"H (203.20mm x 421.64mm x 44.45mm)"
            },
            {
              "@type": "PropertyValue",
              name: "Power",
              value: "12V/36W AC/DC External Desktop (Class 1), Adapter International 90 ~ 264 VAC"
            },
            {
              "@type": "PropertyValue",
              name: "Indicators",
              value: "Test mode and results LED indicator"
            },
            {
              "@type": "PropertyValue",
              name: "Certifications",
              value: "UL Certified (UL61010)"
            }
          ]
        }),
      }}
    />
  )
}