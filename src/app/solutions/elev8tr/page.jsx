import Elev8tr from "@/components/solutions/elev8tr/Elev8tr";
import JsonLdProduct from '@/components/solutions/elev8tr/JsonLdProduct';

export const metadata = {
  title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
  description:
    'ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.',
  keywords: [
    'ELEV8TR',
    'Battery Algorithm Simulator',
    'BMS Testing',
    'BMS Development',
    'OEM BMS',
    'Simulink BMS Integration',
    'MATLAB Hardware-in-the-Loop',
    'Real-Time Simulation',
    'Neutron Controls',
  ],
  openGraph: {
    title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
    description:
      'Accelerate OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration.',
    url: 'https://www.neutroncontrols.com/solutions/elev8tr',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/elev8tr.jpg',
        alt: 'ELEV8TR™ product photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
    description:
      'Accelerate OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration.',
    images: ['https://www.neutroncontrols.com/meta/elev8tr.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/solutions/elev8tr',
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
          <Elev8tr />
        </main>
      </div>
    </>
  )
}