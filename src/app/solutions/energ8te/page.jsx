import Energ8te from "@/components/solutions/energ8te/Energ8te";
import JsonLdProduct from '@/components/solutions/energ8te/JsonLdProduct';

export const metadata = {
  title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
  description:
    'ENERG8TE™ is an advanced BMS controller designed to optimize performance, reliability, and energy efficiency in Battery Energy Storage System (BESS) and ESS installations.',
    keywords: [
      'Battery Energy Storage Systems (BESS)',
      'ESS Controllers',
      'EV Battery Production Testing',
      'ESS/BESS Manufacturing Quality Control',
      'Battery Monitoring and Quality Control',
      'Automotive Battery Quality Assurance'
    ],
  openGraph: {
    title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
    description:
      'Optimize energy performance and reliability in Battery Energy Storage System (BESS) and ESS applications with the ENERG8TE™ advanced BMS controller.',
    url: 'https://www.neutroncontrols.com/solutions/energ8te',
    images: [
      {
        url: 'https://www.neutroncontrols.com/meta/energ8te.jpg',
        alt: 'ENERG8TE™ product photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENERG8TE™ BMS Controller for BESS/ESS Installations',
    description:
      'Optimize energy performance and reliability in BESS and ESS applications with ENERG8TE™, the advanced BMS controller by Neutron Controls.',
    images: ['https://www.neutroncontrols.com/meta/energ8te.jpg'],
  },
  alternates: {
    canonical: 'https://www.neutroncontrols.com/solutions/energ8te',
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
          <Energ8te />
        </main>
      </div>
    </>
  )
}