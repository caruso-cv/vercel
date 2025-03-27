import Elev8tr from "@/components/solutions/elev8tr/Elev8tr";
import JsonLdProduct from '@/components/solutions/elev8tr/JsonLdProduct';

export const metadata = {
  title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
  description:
    'ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.',
  openGraph: {
    title: 'ELEV8TR™ Battery Algorithm Simulator for OEM BMS Development',
    description:
      'ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.',
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
      'ELEV8TR™ accelerates OEM Battery Management System development with real-time simulation, hardware interaction, and MATLAB/Simulink integration — ideal for testing advanced BMS algorithms.',
    images: ['https://www.neutroncontrols.com/meta/elev8tr.jpg'], 
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