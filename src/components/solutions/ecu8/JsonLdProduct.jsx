export default function JsonLdProduct() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ECU8™ EV Battery Management ECU Prototype Platform",
          image: [
            "https://www.neutroncontrols.com/vertical/ecu8-board.webp"
          ],
          description: "ECU8™ is an Infineon AURIX™ based prototype platform for EV Battery Management ECUs, emphasizing ISO 26262 safety and ISO 21434 security, and intended as a path to certified production units owned and built by the OEM.",
          brand: {
            "@type": "Brand",
            name: "Neutron Controls™"
          },
          sku: "ECU8",
          mpn: "ECU8-001",
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Microcontroller",
              value: "Infineon AURIX™ based design, available with any member of Infineon’s AURIX™ family"
            },
            {
              "@type": "PropertyValue",
              name: "Interfaces",
              value: "Customizable with any BMS interface, Ethernet, ISO SPI, CAN/CAN FD, plus any additional interface required"
            },
            {
              "@type": "PropertyValue",
              name: "Safety and Security",
              value: "ISO 26262 functional safety, ISO 21434 cybersecurity"
            }
          ]
        }),
      }}
    />
  )
}
