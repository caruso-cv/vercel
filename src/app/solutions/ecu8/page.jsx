import Ecu8 from "@/components/solutions/ecu8/Ecu8";
import JsonLdProduct from '@/components/solutions/ecu8/JsonLdProduct';

export const metadata = {
  title: 'ECU8™ EV Battery Management ECU Prototype Platform',
  description:
    'ECU8™ is an Infineon AURIX™ based prototype platform for EV Battery Management ECUs, emphasizing ISO 26262 safety and ISO 21434 security — a path to certified production units owned and built by the OEM.',
    keywords: [
      'EV Battery Management ECU',
      'Infineon AURIX™ BMS Platform',
      'ISO 26262 Functional Safety',
      'ISO 21434 Cybersecurity',
      'OEM BMS Development Platform',
      'Custom Battery Management Controller'
    ],
  openGraph: {
    title: 'ECU8™ EV Battery Management ECU Prototype Platform',
    description:
      'An Infineon AURIX™ based prototype platform for EV Battery Management ECUs — a path to certified production units owned and built by the OEM.',
    url: 'https://www.neutroncontrols.com/solutions/ecu8',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/general.jpg',
        alt: 'ECU8™ product photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECU8™ EV Battery Management ECU Prototype Platform',
    description:
      'An Infineon AURIX™ based prototype platform for EV Battery Management ECUs — a path to certified production units owned and built by the OEM.',
    images: ['https://www.neutroncontrols.com/meta/general.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/solutions/ecu8',
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
          <Ecu8 />
        </main>
      </div>
    </>
  )
}
