export default function JsonLdProduct() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development",
          image: [
            "https://www.neutroncontrols.com/vertical/elev8tr.webp"
          ],
          description: "ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.",
          brand: {
            "@type": "Brand",
            name: "Neutron Controls™"
          },
          sku: "ELEV8TR",
          mpn: "ELEV8TR-001",
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Interfaces",
              value: "Integrated 800W Bi-directional Power Supply (configurable up to 15kW), Multi-IO Terminal Blocks, ISO COMM (ISO SPI, ISO UART) analog frontend, Ethernet 10/100 baseT, CAN FD via 9-pin DSub, 12V Power Input"
            },
            {
              "@type": "PropertyValue",
              name: "Power",
              value: "12V/36W AC/DC External Desktop (Class 1) Adapter International, 90 ~ 264 VAC"
            }
          ]
        }),
      }}
    />
  )
}