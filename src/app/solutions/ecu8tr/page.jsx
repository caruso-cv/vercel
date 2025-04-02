import JsonLdProduct from '@/components/solutions/ecu8tr/JsonLdProduct';
import ECU8TR from "@/components/solutions/ecu8tr/Ecu8tr";

export const metadata = {
  title: 'ECU8TR™ Battery Factory Point Tester',
  description:
    'ECU8TR™ supports advanced BMS interfaces including Analog Devices ISO SPI, Infineon ISO UART, XMP, and Texas Instruments BMS devices — ensuring high-performance battery production testing.',
    keywords: [
      'Battery Management Systems (BMS)',
      'ISO UART/SPI BMS Integration',
      'TI UART SPI Battery Management',
      'Battery Monitoring Systems',
      'Advanced Battery Communication Interfaces',
      'Battery Quality Control Systems'
    ],
  openGraph: {
    title: 'ECU8TR™ Battery Factory Point Tester',
    description:
      'Supports Analog Devices ISO SPI, Infineon ISO UART, XMP, and Texas Instruments BMS interfaces — ensuring high-performance battery production testing.',
    url: 'https://www.neutroncontrols.com/solutions/ecu8tr',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/ecu8tr.jpg',
        alt: 'ECU8TR product photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECU8TR™ Battery Factory Point Tester',
    description:
      'Supports Analog Devices ISO SPI, Infineon ISO UART, XMP, and Texas Instruments BMS interfaces.',
    images: ['https://www.neutroncontrols.com/meta/ecu8tr.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/solutions/ecu8tr',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <>
      <JsonLdProduct />
      <div className='bg-white relative'>
        <main>
          <ECU8TR />
        </main>
      </div>
    </>
  )
}